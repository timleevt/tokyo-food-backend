import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

type params = {
  username: string;
};
const getUserPw = async ({ username }: params) => {
  const pw = await prisma.user.findUnique({
    where: {
      username,
    },
    select: {
      password: true,
    },
  });
  return pw?.password;
};

export default getUserPw;