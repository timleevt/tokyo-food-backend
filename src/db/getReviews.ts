import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

const getReviews = async () => {
  return await prisma.review.findMany({
    orderBy: {
      date: 'desc'
    }
  });
};

export default getReviews;
