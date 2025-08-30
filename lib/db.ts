import {PrismaClient} from '@prisma/client';
//import {env} from '~/env/server.mjs';
const globalForPrisma = global as unknown as {prisma: PrismaClient};
export const db = globalForPrisma.prisma || new PrismaClient();
if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = db;
