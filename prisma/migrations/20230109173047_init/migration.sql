-- CreateTable
CREATE TABLE "user" (
    "id" SERIAL NOT NULL,
    "client" TEXT NOT NULL,
    "stage" INTEGER NOT NULL,

    CONSTRAINT "user_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "user_client_key" ON "user"("client");
