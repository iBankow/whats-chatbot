import { Message, Whatsapp } from "@wppconnect-team/wppconnect";

import { menu } from "../menu";

function execute(client: Whatsapp, message: Message): void {
  let menuMsg = "CARDAPIO \n\n";
  Object.keys(menu).forEach((item) => {
    let name = menu[item].name;
    let price = menu[item].price;

    menuMsg += `${name}-------R$${price} \n`;
  });

  if (message.body === "Hello") {
    client
      .sendText(message.from, menuMsg)
      .then((result) => {
        console.log("Result: ", result); //return object success
      })
      .catch((erro) => {
        console.error("Error when sending: ", erro); //return object error
      });
  }

  return;
}

export { execute };
