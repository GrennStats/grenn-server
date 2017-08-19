import {Component} from "@nestjs/common";
import {HttpException} from "@nestjs/core";
import * as request from "request-promise-native";
import {encodePlayerId} from "../../player.utility";
import {HeroKeyObject} from "../../../../typings/hero/hero-keys.type";
import {StatsType} from "../../../../typings/player/stats/stats.types";

export interface ApiCurrentStatsDataResponse extends HeroKeyObject<StatsType> {
    all: StatsType;
}

export interface ApiCurrentStatsResponse {
    data: {
        [playerId: string]: ApiCurrentStatsDataResponse;
    }
}

@Component()
export class ApiStatsService {

    /**
     * Fetches the current stats of the inofficial whatasha.me API
     *
     * @param playerId
     */
    public async getStatsOfPlayer(playerId: string): Promise<ApiCurrentStatsDataResponse> {
        const encodedId = encodePlayerId(playerId);
        const url = `https://gigantic-mmr-api.azurewebsites.net/leaderboards/${encodedId}`;

        const data: ApiCurrentStatsResponse = await request({url: url, json: true});

        if (!data || !data.data || Object.keys(data.data).length === 1) {
            throw new HttpException("Player ${playerId} not found", 404);
        }

        return data.data[playerId];
    }
}