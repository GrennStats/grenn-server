import {Component} from "@nestjs/common";
import {HttpException} from "@nestjs/core";
import * as request from "request-promise-native";
import {encodePlayerId} from "../../player.utility";
import {ApiCurrentStatsDataResponse} from "./api-stats.service";
import {StatsModel} from "./../stats.model";

@Component()
export class DbStatsService {
    public async hasStatsOfToday(playerId: string): Promise<boolean> {
        return false;
    }

    public async saveStatsOfPlayer(playerId: string, stats: ApiCurrentStatsDataResponse): Promise<void> {
        await StatsModel.create({
            playerId: playerId,
            stats: stats
        });
    }

    // public async getStatsOfPlayer(playerId: string): Promise<ApiCurrentStatsDataResponse> {

    // }
}