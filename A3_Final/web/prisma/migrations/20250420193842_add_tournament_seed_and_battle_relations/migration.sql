-- AlterTable
ALTER TABLE "Tournament" ADD COLUMN     "seed" INTEGER NOT NULL DEFAULT 0;

-- AddForeignKey
ALTER TABLE "PokemonBattle" ADD CONSTRAINT "PokemonBattle_pokemon_1_id_fkey" FOREIGN KEY ("pokemon_1_id") REFERENCES "Pokemon"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PokemonBattle" ADD CONSTRAINT "PokemonBattle_pokemon_2_id_fkey" FOREIGN KEY ("pokemon_2_id") REFERENCES "Pokemon"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PokemonBattle" ADD CONSTRAINT "PokemonBattle_winner_pokemon_id_fkey" FOREIGN KEY ("winner_pokemon_id") REFERENCES "Pokemon"("id") ON DELETE SET NULL ON UPDATE CASCADE;
