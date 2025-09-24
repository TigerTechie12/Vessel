-- CreateTable
CREATE TABLE "public"."User" (
    "id" SERIAL NOT NULL,
    "email" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "password" TEXT NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."Secret" (
    "id" SERIAL NOT NULL,
    "userId" INTEGER NOT NULL,
    "mnemonic" TEXT NOT NULL,
    "publickey" TEXT NOT NULL,
    "privatekey" TEXT NOT NULL,

    CONSTRAINT "Secret_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "public"."User"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Secret_userId_key" ON "public"."Secret"("userId");

-- CreateIndex
CREATE UNIQUE INDEX "Secret_mnemonic_key" ON "public"."Secret"("mnemonic");

-- CreateIndex
CREATE UNIQUE INDEX "Secret_publickey_key" ON "public"."Secret"("publickey");

-- CreateIndex
CREATE UNIQUE INDEX "Secret_privatekey_key" ON "public"."Secret"("privatekey");

-- AddForeignKey
ALTER TABLE "public"."Secret" ADD CONSTRAINT "Secret_userId_fkey" FOREIGN KEY ("userId") REFERENCES "public"."User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
