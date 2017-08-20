import {Component} from "@nestjs/common";
import {HttpException} from "@nestjs/core";
import * as request from "request-promise-native";
import {encodePlayerId} from "../../player.utility";
import {ApiCurrentStatsDataResponse} from "./api-stats.service";
import {StatsModel} from "./../stats.model";
import {Stats} from "../stats.model";

export type StatsTimeline = {[timeStamp: string]: ApiCurrentStatsDataResponse};

export function transformTimelineStats(stats: Stats[]): StatsTimeline {
    const response = {};
    stats.forEach(entry => response[entry.createdAt.getTime()] = entry.stats);

    return response;
}

@Component()
export class DbStatsService {
    public async getStatsOfToday(playerId: string): Promise<ApiCurrentStatsDataResponse> {
        const date = new Date();
        date.setHours(0, 0, 0, 0);

        const data = await StatsModel.findOne({
            createdAt: {$gte: date},
            playerId: playerId
        });

        return data ? data.stats : null;
    }

    public async getStatsOfTimeframe(playerId: string, begin: Date, end: Date): Promise<StatsTimeline> {
        const data = await StatsModel.find({
            createdAt: {
                $gte: begin,
                $lt: end
            },
            playerId: playerId
        });

        return transformTimelineStats(data);
    }

    public async saveStatsOfPlayer(playerId: string, stats: ApiCurrentStatsDataResponse): Promise<void> {
        await StatsModel.create({
            playerId: playerId,
            stats: stats
        });
    }

    public async getStatsOfPlayer(playerId: string): Promise<StatsTimeline> {
        const data = await StatsModel.find({playerId: playerId});

        return transformTimelineStats(data);
    }
}