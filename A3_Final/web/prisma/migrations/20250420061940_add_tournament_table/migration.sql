-- AlterTable
ALTER TABLE "PokemonBattle" ADD COLUMN     "tournamentId" INTEGER;

-- CreateTable
CREATE TABLE "Tournament" (
    "id" SERIAL NOT NULL,
    "venue" TEXT NOT NULL,
    "seed" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Tournament_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "PokemonBattle" ADD CONSTRAINT "PokemonBattle_tournamentId_fkey" FOREIGN KEY ("tournamentId") REFERENCES "Tournament"("id") ON DELETE SET NULL ON UPDATE CASCADE;
