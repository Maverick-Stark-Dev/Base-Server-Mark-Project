import { AppServer } from './server';
import { databaseSettings, serverSettings } from './settings';

async function main() {
  const serverApp: AppServer = new AppServer();
  serverApp.runServer(serverSettings.PORT_APP);
  await serverApp.databaseConnect(databaseSettings.SERVER_DB_URL);
}

main();
