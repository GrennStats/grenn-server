import {Component} from "@nestjs/common";
import {HttpException} from "@nestjs/core";
import * as request from "request-promise-native";
import {encodePlayerId} from "../../player.utility";
import {SearchModel} from "./../search.model";

export type SearchRanking = {[playerId: string]: number};

@Component()
export class DbSearchService {

    public async getMostPopularSearches(): Promise<SearchRanking> {
        const data = await SearchModel.aggregate([{
            "$group" : {_id: "$playerId", count: {$sum: 1}}
        }]);

        const response = {};
        data.forEach((search: any) => response[search._id] = search.count);

        return response;
    }

    public async saveStatsOfPlayer(playerId: string): Promise<void> {
        await SearchModel.create({
            playerId: playerId,
        });
    }
}