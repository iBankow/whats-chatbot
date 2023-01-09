import { prisma } from "../database/prisma";

type GetUserStageServiceParams = {
  client: string;
};

export class GetUserStageService {
  async execute({ client }: GetUserStageServiceParams) {
    const user = await prisma.user.findFirst({
      where: {
        client,
      },
    });

    if (!user) {
      const newUser = await prisma.user.create({
        data: {
          client,
          stage: 0,
        },
      });

      return newUser;
    }

    return user;
  }
}
