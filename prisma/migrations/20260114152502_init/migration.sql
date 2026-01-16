-- CreateTable
CREATE TABLE "QuizResult" (
    "id" TEXT NOT NULL,
    "score_type" TEXT NOT NULL,
    "final_score" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "QuizResult_pkey" PRIMARY KEY ("id")
);
