import {Controller, Get, Post, HttpStatus, Response, Param} from "@nestjs/common";
import {Request, Response as Res, NextFunction} from 'express';
import {ApiStatsService} from "./api-stats.service";

@Controller()
export class PlayerStatsController {
    constructor(private stats: ApiStatsService) {}

    @Get("player/:playerId/stats/current")
    public async getCurrentPlayerStats(@Response() res: Res, @Param("playerId") playerId: string) {
        const stats = await this.stats.getStatsOfPlayer(playerId);
        res.status(HttpStatus.OK).json(stats);
    }
}