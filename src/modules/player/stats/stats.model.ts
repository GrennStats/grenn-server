import {Schema, Document} from "mongoose";
import {ApiCurrentStatsDataResponse} from "./api-stats.service";
import {mongoConnection} from "../../model";


export const statsSchema: Schema = new Schema({
    createdAt: { type: Date, default: Date.now },
    playerId: String,
    stats: Object
});

export interface StatsModel extends Document {
    createdAt: Date;
    playerId: string;
    stats: ApiCurrentStatsDataResponse;
}

export const statsModel = mongoConnection.model<StatsModel>("Stats", statsSchema);