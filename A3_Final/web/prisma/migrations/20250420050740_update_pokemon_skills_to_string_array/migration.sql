-- CreateTable
CREATE TABLE "Pokemon" (
    "id" SERIAL NOT NULL,
    "pokemon_name" VARCHAR(100) NOT NULL,
    "pokemon_type" VARCHAR(50) NOT NULL,
    "level" INTEGER NOT NULL DEFAULT 1,
    "hit_points" INTEGER NOT NULL DEFAULT 100,
    "max_hit_points" INTEGER NOT NULL DEFAULT 100,
    "battles_won" INTEGER NOT NULL DEFAULT 0,
    "battles_lost" INTEGER NOT NULL DEFAULT 0,
    "image_url" VARCHAR(255),
    "skills" TEXT[],
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Pokemon_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "PokemonBattle" (
    "id" SERIAL NOT NULL,
    "pokemon_1_id" INTEGER NOT NULL,
    "pokemon_2_id" INTEGER NOT NULL,
    "pokemon_1_seed" INTEGER NOT NULL,
    "pokemon_2_seed" INTEGER NOT NULL,
    "battle_date" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "winner_pokemon_id" INTEGER,
    "battle_duration" TEXT,
    "battle_log" JSONB,

    CONSTRAINT "PokemonBattle_pkey" PRIMARY KEY ("id")
);
