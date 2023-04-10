import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

type PostReview = {
  name: string;
  address: string;
  review: string;
  isFavorited: boolean;
  username: string;
};

const postReview = async ({
  name,
  address,
  review,
  isFavorited,
  username,
}: PostReview) => {
  await prisma.review.create({
    data: {
      name: name,
      address: address,
      review: review,
      favorited: isFavorited,
      authorUsername: username,
    },
  });
};

export default postReview;
