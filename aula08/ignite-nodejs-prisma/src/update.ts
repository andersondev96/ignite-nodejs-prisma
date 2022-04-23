import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  const result = await prisma.courses.update({
    where: {
      id: "4eef77c8-c264-42a8-a108-f25e9d1e3151"
    },
    data: {
      duration: 250,
      name: "Curso de ReactJS",
    }
  });

  console.log(result);
}

main();