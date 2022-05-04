import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  const result = await prisma.courses.create({
    data: {
      name: "Curso de ReactJS",
      duration: 300,
      description: "Curso excelente de ReactJS",
      fk_id_teacher: "de73f515-ee19-4e12-97a5-7fff536f8829",
    },
  });

  console.log(result);
}

main();
