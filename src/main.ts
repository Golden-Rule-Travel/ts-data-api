import "dotenv/config";

import { envs } from "./envs";
import { dataSourcesNames } from "./mdb";

import app from "./app";

const port = process.env.PORT ? Number(process.env.PORT) : envs.SERVER_PORT;
const address = envs.SERVER_ADDRESS;

app.listen(port, address, () => {
  const message =
    `Delbridge TypeScript Data API running on ${address}:${port}` +
    `\nAvailable Data Sources: ${JSON.stringify(dataSourcesNames)}`;

  console.log(message);
});
