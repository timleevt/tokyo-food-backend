import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

type params = {
  username: string;
  hashedPassword: string;
  email: string;
  isLocal: boolean;
};

const postUser = async ({
  username,
  hashedPassword,
  email,
  isLocal,
}: params) => {
  await prisma.user.create({
    data: {
      username,
      password: hashedPassword,
      email,
      isLocal,
    },
  });
};

export default postUser;
