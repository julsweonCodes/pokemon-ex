CREATE OR REPLACE FUNCTION archive_by_month(month_param INT)
RETURNS VOID AS $$
BEGIN
    -- Removed INSERT INTO ArchivedBattles due to schema mismatch

    -- Use correct table name "PokemonBattleHistory" and quote identifiers
    INSERT INTO "PokemonBattleHistory"(battle_id, pokemon_1_id, pokemon_2_id, battle_date, winner_pokemon_id, battle_duration, battle_log)
    SELECT "battle_id", "pokemon_1_id", "pokemon_2_id", "battle_date", "winner_pokemon_id", "battle_duration", "battle_log" 
    FROM "PokemonBattle" WHERE EXTRACT(MONTH FROM "battle_date") = month_param;

    DELETE FROM "PokemonBattle"
    WHERE EXTRACT(MONTH FROM "battle_date") = month_param;
END;
$$ LANGUAGE plpgsql;

CREATE OR REPLACE FUNCTION archive_by_days(days_after INT)
RETURNS VOID AS $$
BEGIN
    -- Removed INSERT INTO ArchivedBattles due to schema mismatch

    -- Use correct table name "PokemonBattleHistory" and quote identifiers
    INSERT INTO "PokemonBattleHistory"(battle_id, pokemon_1_id, pokemon_2_id, battle_date, winner_pokemon_id, battle_duration, battle_log)
    SELECT "battle_id", "pokemon_1_id", "pokemon_2_id", "battle_date", "winner_pokemon_id", "battle_duration", "battle_log" 
    FROM "PokemonBattle" WHERE "battle_date" <= NOW() - INTERVAL '1 day' * days_after;

    DELETE FROM "PokemonBattle"
    WHERE "battle_date" <= NOW() - INTERVAL '1 day' * days_after;
END;
$$ LANGUAGE plpgsql;

CREATE OR REPLACE FUNCTION archive_by_limit(battle_limit INT)
RETURNS VOID AS $$
DECLARE
    id_limit INT;
BEGIN
    -- Determine the ID threshold based on the limit (find the Nth oldest battle_id)
    SELECT "battle_id" INTO id_limit
    FROM "PokemonBattle"
    ORDER BY "battle_id" ASC
    LIMIT 1 OFFSET battle_limit - 1;

    IF id_limit IS NOT NULL THEN
        -- Removed INSERT INTO ArchivedBattles due to schema mismatch

        -- Use correct table name "PokemonBattleHistory" and quote identifiers
        INSERT INTO "PokemonBattleHistory" (battle_id, pokemon_1_id, pokemon_2_id, battle_date, winner_pokemon_id, battle_duration, battle_log)
        SELECT "battle_id", "pokemon_1_id", "pokemon_2_id", "battle_date", "winner_pokemon_id", "battle_duration", "battle_log" 
        FROM "PokemonBattle" WHERE "battle_id" <= id_limit;

        DELETE FROM "PokemonBattle"
        WHERE "battle_id" <= id_limit;
    END IF;
END;
$$ LANGUAGE plpgsql;

CREATE OR REPLACE FUNCTION archive_pokemon(p_pokemon_id INT)
RETURNS VOID AS $$
BEGIN
    -- NOTE: Assumes an "is_archived" column exists in the "Pokemon" table.
    -- You might need to add this column via a Prisma migration if it doesn't exist.
    UPDATE "Pokemon"
    SET "is_archived" = TRUE
    WHERE "id" = p_pokemon_id;
END;
$$ LANGUAGE plpgsql;

CREATE OR REPLACE FUNCTION unarchive_pokemon(p_pokemon_id INT)
RETURNS VOID AS $$
BEGIN
    -- NOTE: Assumes an "is_archived" column exists in the "Pokemon" table.
    UPDATE "Pokemon"
    SET "is_archived" = FALSE
    WHERE "id" = p_pokemon_id;
END;
$$ LANGUAGE plpgsql;