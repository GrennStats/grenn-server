import {Controller, Get, Post, HttpStatus, Response, Param} from "@nestjs/common";
import {Response as Res} from 'express';
import {StatsRepository} from "./stats.repository";

@Controller()
export class PlayerStatsController {
    constructor(private stats: StatsRepository) {}

    @Get("player/:playerId/stats/current")
    public async getPlayersCurrentStats(@Response() res: Res, @Param("playerId") playerId: string) {
        const stats = await this.stats.getPlayersCurrentStats(playerId);

        res.status(HttpStatus.OK)
            .json(stats);
    }

    @Get("player/:playerId/stats/timeline")
    public async getPlayersTimelineStats(@Response() res: Res, @Param("playerId") playerId: string) {
        const stats = await this.stats.getPlayersTimelineStats(playerId);

        res.status(HttpStatus.OK)
            .json(stats);
    }
}