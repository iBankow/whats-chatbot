import { create, Whatsapp } from "@wppconnect-team/wppconnect";
import { GetUserStageService } from "./services/GetUserStageService";
import { stages } from "./stages/index";

const getUserService = new GetUserStageService();

create({ session: "sales" })
  .then((client) => start(client))
  .catch((error) => console.log(error));

async function start(client: Whatsapp) {
  client.onMessage(async (message) => {
    const { stage } = await getUserService.execute({ client: message.from });

    switch (stage) {
      case 0:
        stages[stage].obj.execute(client, message);
        break;

      default:
        break;
    }
  });
}
