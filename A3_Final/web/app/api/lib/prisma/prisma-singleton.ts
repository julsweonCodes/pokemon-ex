import { PrismaClient } from '@/prisma/generated';
const globalPrisma = globalThis as typeof globalThis & {
  prisma?: PrismaClient;
};
// If the global prisma doesn't exist, make one.
const prismaInstance = globalPrisma.prisma ?? new PrismaClient({});
export { prismaInstance };
