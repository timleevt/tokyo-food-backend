import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

const getReviews = async () => {
  return await prisma.review.findMany({
    include: {
      author: {
        select: {
          username: true
        }
      }
    },
    orderBy: {
      date: 'desc'
    }
  });
};

export default getReviews;
