import { prisma } from "../database/prisma";

type GetUserStageServiceParams = {
  client: string;
  stage: number;
};

export class GetUserStageService {
  async execute({ client, stage }: GetUserStageServiceParams) {
    const data = await prisma.user.findFirst({
      where: {
        client,
      },
    });

    if (!data) {
      throw new Error("User not find");
    }

    const user = await prisma.user.update({
      where: {
        client,
      },
      data: {
        stage,
      },
    });

    return user;
  }
}
