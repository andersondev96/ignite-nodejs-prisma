/*
  Warnings:

  - Added the required column `fk_id_teacher` to the `courses` table without a default value. This is not possible if the table is not empty.
  - Added the required column `fk_id_teacher` to the `modules` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "teachers" DROP CONSTRAINT "teachers_coursesId_fkey";

-- AlterTable
ALTER TABLE "courses" ADD COLUMN     "fk_id_teacher" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "modules" ADD COLUMN     "fk_id_teacher" TEXT NOT NULL;

-- AddForeignKey
ALTER TABLE "courses" ADD CONSTRAINT "courses_fk_id_teacher_fkey" FOREIGN KEY ("fk_id_teacher") REFERENCES "teachers"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
