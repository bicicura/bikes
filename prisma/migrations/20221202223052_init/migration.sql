-- CreateTable
CREATE TABLE "Product" (
    "id" SERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "name" VARCHAR(255) NOT NULL,
    "body" TEXT,
    "published" BOOLEAN NOT NULL DEFAULT false,
    "brandId" INTEGER NOT NULL,
    "image" TEXT,
    "categoryId" INTEGER NOT NULL,

    CONSTRAINT "Product_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Brand" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(255) NOT NULL,
    "body" TEXT,
    
    CONSTRAINT "Brand_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "User" (
    "id" SERIAL NOT NULL,
    "email" TEXT NOT NULL,
    "name" TEXT,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- Create Categroy Table
CREATE TABLE "Category" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(255) NOT NULL,
    "slug" TEXT,
    
    CONSTRAINT "Category_pkey" PRIMARY KEY ("id")
);

---Create index
CREATE UNIQUE INDEX "User.email" ON "User"("email");

--Create foreign key
ALTER TABLE "Product" ADD FOREIGN KEY("brandId") REFERENCES "Brand"("id") ON DELETE CASCADE ON UPDATE CASCADE;

--Create foreign key
ALTER TABLE "Product" ADD FOREIGN KEY("categoryId") REFERENCES "Category"("id") ON DELETE CASCADE ON UPDATE CASCADE;

---Create index for product table
CREATE INDEX "Product.brandId" ON "Product"("brandId");

---Create index for product table
CREATE INDEX "Product.categoryId" ON "Product"("categoryId");

