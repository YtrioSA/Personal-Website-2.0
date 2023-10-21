-- CreateTable
CREATE TABLE "Hand" (
    "id" SERIAL NOT NULL,
    "like" INTEGER NOT NULL,
    "dislike" INTEGER NOT NULL,

    CONSTRAINT "Hand_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Hand_like_key" ON "Hand"("like");

-- CreateIndex
CREATE UNIQUE INDEX "Hand_dislike_key" ON "Hand"("dislike");
