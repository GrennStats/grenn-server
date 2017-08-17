import {Component} from "@nestjs/common";
import {HttpException} from "@nestjs/core";
import * as request from "request-promise-native";
import {encodePlayerId} from "../player.utility";
import {SearchPlayerObject} from "../../../typings/player/search/search.types";

export interface SearchPlayerResponse {
    data: SearchPlayerObject[];
}

export class ApiSearchService {

    /**
     * Find a player from the inofficial Gigantic API
     *
     * @param playerId
     */
    public async findPlayer(playerId: string): Promise<SearchPlayerResponse> {
        const encodedId = encodePlayerId(playerId);
        const url = `https://stats.gogigantic.com/en/gigantic-careers/playersearch/?username=${encodedId}&page_num=0&page_size=100`;

        const data = await request({url: url, json: true});

        return data.data;
    }
}