import {Component} from "@nestjs/common";
import {HttpException} from "@nestjs/core";
import * as request from "request-promise-native";
import {encodePlayerId} from "../../player.utility";
import {SearchModel} from "./../search.model";

@Component()
export class DbSearchService {

    public async saveStatsOfPlayer(playerId: string): Promise<void> {
        await SearchModel.create({
            playerId: playerId,
        });
    }
}