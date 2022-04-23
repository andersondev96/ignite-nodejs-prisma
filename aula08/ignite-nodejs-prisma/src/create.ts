import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  const result = await prisma.courses.create({
    data: {
      duration: 300,
      name: "Curso de ReactJS",
      description: "Curso excelente de ReactJS com Diego",
    },
  });

  console.log(result);
}

main();
