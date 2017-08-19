import {Schema, Document} from "mongoose";
import {ApiCurrentStatsDataResponse} from "./services/api-stats.service";
import {mongoConnection} from "../../model";

export const statsSchema: Schema = new Schema({
    createdAt: { type: Date, default: Date.now },
    playerId: String,
    stats: Object
});

export interface Stats extends Document {
    createdAt: Date;
    playerId: string;
    stats: ApiCurrentStatsDataResponse;
}

export const StatsModel = mongoConnection.model<Stats>("Stats", statsSchema);