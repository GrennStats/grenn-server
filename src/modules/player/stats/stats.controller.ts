import {Controller, Get, Post, HttpStatus, Response, Param} from "@nestjs/common";
import {Request, Response as Res, NextFunction} from 'express';
import {ApiStatsService} from "./api-stats.service";
import {DbStatsService} from "./db-stats.service";

@Controller()
export class PlayerStatsController {
    constructor(private apiStats: ApiStatsService, private dbStats: DbStatsService) {}

    @Get("player/:playerId/stats/current")
    public async getCurrentPlayerStats(@Response() res: Res, @Param("playerId") playerId: string) {
        const stats = await this.apiStats.getStatsOfPlayer(playerId);

        await this.dbStats.saveStatsOfPlayer(playerId, stats);
        res.status(HttpStatus.OK).json(stats);
    }
}