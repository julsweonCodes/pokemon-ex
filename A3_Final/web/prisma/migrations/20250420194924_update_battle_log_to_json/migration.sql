/*
  Warnings:

  - The `skills` column on the `Pokemon` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - You are about to alter the column `instance_name` on the `Pokemon` table. The data in that column could be lost. The data in that column will be cast from `Text` to `VarChar(255)`.
  - The `battle_log` column on the `PokemonBattle` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- AlterTable
ALTER TABLE "Pokemon" DROP COLUMN "skills",
ADD COLUMN     "skills" INTEGER[] DEFAULT ARRAY[]::INTEGER[],
ALTER COLUMN "instance_name" SET DATA TYPE VARCHAR(255);

-- AlterTable
ALTER TABLE "PokemonBattle" DROP COLUMN "battle_log",
ADD COLUMN     "battle_log" JSONB;

-- AlterTable
ALTER TABLE "Tournament" ALTER COLUMN "venue" SET DEFAULT 'Default Arena';

-- CreateTable
CREATE TABLE "PokemonSkill" (
    "id" SERIAL NOT NULL,
    "is_attack" BOOLEAN NOT NULL,
    "name" VARCHAR(200) NOT NULL,
    "pokemon_type" VARCHAR(200) NOT NULL,
    "damage" INTEGER NOT NULL,

    CONSTRAINT "PokemonSkill_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ArchivedBattles" (
    "id" SERIAL NOT NULL,
    "battle_history_id" INTEGER NOT NULL,
    "archive_date" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "ArchivedBattles_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "PokemonBattleHistory" (
    "id" SERIAL NOT NULL,
    "battle_id" INTEGER NOT NULL,
    "pokemon_1_id" INTEGER NOT NULL,
    "pokemon_2_id" INTEGER NOT NULL,
    "pokemon_1_seed" INTEGER NOT NULL,
    "pokemon_2_seed" INTEGER NOT NULL,
    "battle_date" TIMESTAMP(3) NOT NULL,
    "winner_pokemon_id" INTEGER NOT NULL,
    "battle_duration" INTEGER NOT NULL,
    "battle_log" JSONB NOT NULL,

    CONSTRAINT "PokemonBattleHistory_pkey" PRIMARY KEY ("id")
);
