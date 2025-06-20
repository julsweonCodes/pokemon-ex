import { create, StateCreator } from 'zustand';
import { Pokemon } from '@/services/cache';
import { PersistenceService } from '@/services/persistence-service';

interface BattleState {
  pokemon1: Pokemon | null;
  pokemon2: Pokemon | null;
  pokemon1HP: number;
  pokemon2HP: number;
  isGameOver: boolean;
  winner: Pokemon | null;
  battleLog: string[];
  isSimulating: boolean;
  setPokemon1: (pokemon: Pokemon) => void;
  setPokemon2: (pokemon: Pokemon) => void;
  attack: (type: 'normal' | 'special') => void;
  defend: () => void;
  resetBattle: () => void;
  toggleSimulation: () => void;
}

type BattleStore = StateCreator<BattleState>;

export const useBattleStore = create<BattleState>((set, get) => ({
  pokemon1: null,
  pokemon2: null,
  pokemon1HP: 0,
  pokemon2HP: 0,
  isGameOver: false,
  winner: null,
  battleLog: [],
  isSimulating: false,

  setPokemon1: (pokemon: Pokemon) => {
    set({ 
      pokemon1: pokemon, 
      pokemon1HP: pokemon.hit_points,
      battleLog: [`${pokemon.pokemon_name} has entered the battle!`]
    });
  },

  setPokemon2: (pokemon: Pokemon) => {
    set({ 
      pokemon2: pokemon, 
      pokemon2HP: pokemon.hit_points,
      battleLog: [...get().battleLog, `${pokemon.pokemon_name} has entered the battle!`]
    });
  },

  attack: (type: 'normal' | 'special') => {
    const state = get();
    console.log('[battle.ts] attack called. isGameOver:', state.isGameOver);
    if (state.isGameOver || !state.pokemon1 || !state.pokemon2) return;

    const attacker = state.pokemon1;
    const defender = state.pokemon2;
    let damage = 0;

    if (type === 'normal') {
      damage = Math.floor(Math.random() * 10) + 5;
    } else {
      damage = Math.floor(Math.random() * 15) + 10;
    }

    const newDefenderHP = Math.max(0, state.pokemon2HP - damage);
    let isGameOver = newDefenderHP === 0;
    let winner = isGameOver ? attacker : null;
    let loser = isGameOver ? defender : null;

    console.log(`[battle.ts] P1 attacks. New P2 HP: ${newDefenderHP}. isGameOver: ${isGameOver}`);

    set({
      pokemon2HP: newDefenderHP,
      isGameOver,
      winner,
      battleLog: [...state.battleLog, 
        `${attacker.pokemon_name} used ${type} attack! Dealt ${damage} damage!`,
        `${defender.pokemon_name} HP: ${newDefenderHP}/${defender.hit_points}`,
        ...(isGameOver && winner ? [`${winner.pokemon_name} wins the battle!`] : [])
      ]
    });

    console.log(`[battle.ts] Checking P1 win condition: isGameOver=${isGameOver}, winner=${!!winner}, loser=${!!loser}, winner.id=${winner?.id}, loser.id=${loser?.id}`);
    if (isGameOver && winner && loser && winner.id && loser.id) {
        console.log('[battle.ts] P1 win condition MET. Calling PersistenceService.recordBattleResult...');
        PersistenceService.recordBattleResult(winner.id, loser.id)
          .then(success => console.log('[battle.ts] PersistenceService.recordBattleResult (P1 win) returned:', success))
          .catch(err => console.error('[battle.ts] Error calling PersistenceService.recordBattleResult (P1 win):', err));
    } else {
        console.log('[battle.ts] P1 win condition NOT MET.');
    }

    if (!isGameOver) {
      setTimeout(() => {
        const currentState = get();
        console.log('[battle.ts] P2 counter-attack timeout. isGameOver:', currentState.isGameOver);
        if (currentState.isGameOver || !currentState.pokemon1 || !currentState.pokemon2) return;
        
        const counterAttacker = currentState.pokemon2;
        const counterDefender = currentState.pokemon1;
        const counterDamage = Math.floor(Math.random() * 10) + 5;
        const newAttackerHP = Math.max(0, currentState.pokemon1HP - counterDamage);
        const isCounterGameOver = newAttackerHP === 0;
        const counterWinner = isCounterGameOver ? counterAttacker : null;
        const counterLoser = isCounterGameOver ? counterDefender : null;

        console.log(`[battle.ts] P2 counter-attacks. New P1 HP: ${newAttackerHP}. isCounterGameOver: ${isCounterGameOver}`);

        set({
          pokemon1HP: newAttackerHP,
          isGameOver: isCounterGameOver,
          winner: counterWinner,
          battleLog: [...currentState.battleLog, 
            `${counterAttacker.pokemon_name} counterattacked! Dealt ${counterDamage} damage!`,
            `${counterDefender.pokemon_name} HP: ${newAttackerHP}/${counterDefender.hit_points}`,
            ...(isCounterGameOver && counterWinner ? [`${counterWinner.pokemon_name} wins the battle!`] : [])
          ]
        });
        
        console.log(`[battle.ts] Checking P2 win condition: isCounterGameOver=${isCounterGameOver}, counterWinner=${!!counterWinner}, counterLoser=${!!counterLoser}, counterWinner.id=${counterWinner?.id}, counterLoser.id=${counterLoser?.id}`);
        if (isCounterGameOver && counterWinner && counterLoser && counterWinner.id && counterLoser.id) {
            console.log('[battle.ts] P2 win condition MET. Calling PersistenceService.recordBattleResult...');
            PersistenceService.recordBattleResult(counterWinner.id, counterLoser.id)
              .then(success => console.log('[battle.ts] PersistenceService.recordBattleResult (P2 win) returned:', success))
              .catch(err => console.error('[battle.ts] Error calling PersistenceService.recordBattleResult (P2 win):', err));
        } else {
            console.log('[battle.ts] P2 win condition NOT MET.');
        }

        if (!isCounterGameOver && currentState.isSimulating) {
          setTimeout(() => get().attack('normal'), 1000);
        }
      }, 1000);
    }
  },

  defend: () => {
    const state = get();
    console.log('[battle.ts] defend called. isGameOver:', state.isGameOver);
    if (state.isGameOver || !state.pokemon1 || !state.pokemon2) return;

    set({
      battleLog: [...state.battleLog, `${state.pokemon1.pokemon_name} is defending!`]
    });

    setTimeout(() => {
      const currentState = get();
      console.log('[battle.ts] P2 attack after defend timeout. isGameOver:', currentState.isGameOver);
      if (currentState.isGameOver || !currentState.pokemon1 || !currentState.pokemon2) return;
      const defender = currentState.pokemon2;
      const attacker = currentState.pokemon1;
      const damage = Math.floor(Math.random() * 5) + 1;
      const newHP = Math.max(0, currentState.pokemon1HP - damage);
      const isGameOver = newHP === 0;
      const winner = isGameOver ? defender : null;
      const loser = isGameOver ? attacker : null;

      console.log(`[battle.ts] P2 attacks after P1 defends. New P1 HP: ${newHP}. isGameOver: ${isGameOver}`);

      set({
        pokemon1HP: newHP,
        isGameOver,
        winner,
        battleLog: [...currentState.battleLog, 
          `${defender.pokemon_name} attacked! Dealt ${damage} damage!`,
          `${attacker.pokemon_name} HP: ${newHP}/${attacker.hit_points}`,
          ...(isGameOver && winner ? [`${winner.pokemon_name} wins the battle!`] : [])
        ]
      });

      console.log(`[battle.ts] Checking P2 win after defend condition: isGameOver=${isGameOver}, winner=${!!winner}, loser=${!!loser}, winner.id=${winner?.id}, loser.id=${loser?.id}`);
      if (isGameOver && winner && loser && winner.id && loser.id) {
          console.log('[battle.ts] P2 win after defend condition MET. Calling PersistenceService.recordBattleResult...');
          PersistenceService.recordBattleResult(winner.id, loser.id)
            .then(success => console.log('[battle.ts] PersistenceService.recordBattleResult (P2 win after defend) returned:', success))
            .catch(err => console.error('[battle.ts] Error calling PersistenceService.recordBattleResult (P2 win after defend):', err));
      } else {
          console.log('[battle.ts] P2 win after defend condition NOT MET.');
      }

    }, 1000);
  },

  resetBattle: () => {
    const state = get();
    set({
      pokemon1HP: state.pokemon1?.hit_points || 0,
      pokemon2HP: state.pokemon2?.hit_points || 0,
      isGameOver: false,
      winner: null,
      battleLog: state.pokemon1 && state.pokemon2 ? 
        [`${state.pokemon1.pokemon_name} and ${state.pokemon2.pokemon_name} are ready for a new battle!`] : 
        [],
      isSimulating: false
    });
  },

  toggleSimulation: () => {
    const state = get();
    const newIsSimulating = !state.isSimulating;
    
    set({ 
      isSimulating: newIsSimulating,
      battleLog: [...state.battleLog, newIsSimulating ? 'Auto battle started!' : 'Auto battle stopped!']
    });

    if (newIsSimulating && !state.isGameOver) {
      get().attack('normal');
    }
  }
})); 