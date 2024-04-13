import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
    const book1 = await prisma.book.upsert({
        where: { id: "6619b5d2323026ca521c9004" },
        update: {},
        create: {
            title: "Dune",
            author: "Frank Herbert",
            stock: 10,
        }
    });

    const book2 = await prisma.book.upsert({
        where: { id: "6619b5d9323026ca521c9005" },
        update: {},
        create: {
            title: "Foundation",
            author: "Isaac Asimov",
            stock: 5,
        }
    });

    console.log("Books created: ", { book1, book2 });
    
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    // close Prisma Client at the end
    await prisma.$disconnect();
  });
