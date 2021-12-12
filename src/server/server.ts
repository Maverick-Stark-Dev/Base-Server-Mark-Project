import express, { Application } from 'express';
import cors from 'cors';
import morgan from 'morgan';
import { serverSettings } from '../settings';
import { databaseConnection } from '../database';

export class AppServer {
  private app: Application;
  constructor() {
    this.app = express();
    this.middlewares();
    this.controllers();
  }

  middlewares(): void {
    this.app.use(cors());
    this.app.use(morgan('dev'));
    this.app.use(express.json());
  }

  //   ####### GENERATE THE ROUTES

  controllers(): void {
    // Here are the routes
  }

  // ####### CONNECTION TO THE DATABASE #######

  async databaseConnect(url: string): Promise<void> {
    // Here is the configuration to connect to any database
    await databaseConnection(url);
  }

  // ####### RUNNING SERVER #######

  runServer(port: number | string): void {
    try {
      this.app.listen(port, () => {
        console.log(`Server running at: http://${serverSettings.HOST_APP}:${port}/api/v1/`);
      });
    } catch (error) {
      console.log(`Failed to connect-> ${error}`);
    }
  }
}
