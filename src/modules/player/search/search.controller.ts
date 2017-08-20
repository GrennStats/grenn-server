import {Controller, Get, Post, HttpStatus, Response, Param} from "@nestjs/common";
import {Request, Response as Res, NextFunction} from 'express';
import {SearchRepository} from "./search.repository";

@Controller()
export class PlayerSearchController {
    constructor(private search: SearchRepository) {}

    @Get("player/search")
    public async getMostPopularSearches(@Response() res: Res) {
        const ranking = await this.search.getMostPopularSearches();
        res.status(HttpStatus.OK).json(ranking);
    }

    @Get("player/:playerId/query")
    public async findPlayer(@Response() res: Res, @Param("playerId") playerId: string) {
        const stats = await this.search.findPlayer(playerId);
        res.status(HttpStatus.OK).json(stats);
    }
}