import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  const result = await prisma.courses.create({
    data: {
      name: "Curso de Elixr",
      duration: 200,
      description: "Curso excelente de Elixr",
      teacher: {
        create: {
          name: "Rafa Camarda",
        },
      },
    },
  });

  console.log(result);
}

main();
