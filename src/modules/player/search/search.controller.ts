import {Controller, Get, Post, HttpStatus, Response, Param} from "@nestjs/common";
import {Request, Response as Res, NextFunction} from 'express';
import {ApiSearchService} from "./api-search.service";

@Controller()
export class PlayerSearchController {
    constructor(private search: ApiSearchService) {}

    @Get("player/:playerId/query")
    public async findPlayer(@Response() res: Res, @Param("playerId") playerId: string) {
        const stats = await this.search.findPlayer(playerId);
        res.status(HttpStatus.OK).json(stats);
    }
}