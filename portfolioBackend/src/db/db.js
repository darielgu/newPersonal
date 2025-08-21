import { PrismaClient } from "@prisma/client";
import { withAccelerate } from "@prisma/extension-accelerate";

const prisma = new PrismaClient();

// process.on("beforeExit", async () => {
//   await prisma.$disconnect();
// });
export default prisma;
