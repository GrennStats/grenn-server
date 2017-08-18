import {Model as MongoModel, Connection, createConnection} from "mongoose";
import {StatsModel} from "./player/stats/stats.model";

export interface Model {
  stats: MongoModel<StatsModel>;
}

const MONGODB_CONNECTION: string = "mongodb://localhost:27017";
export const mongoConnection: Connection = createConnection(MONGODB_CONNECTION);