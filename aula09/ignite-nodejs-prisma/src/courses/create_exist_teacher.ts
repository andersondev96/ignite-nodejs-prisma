import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  const result = await prisma.courses.create({
    data: {
      name: "Curso de React Native",
      description: "Curso excelente de React Native",
      duration: 300,
      teacher: {
        connect: {
          id: "13baef18-1b26-4dc4-b32c-3c969ae00eeb"
        }
      }
    }
  });

  console.log(result);
}

main();
