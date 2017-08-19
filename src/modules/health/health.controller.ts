import {Controller, Get, Post, HttpStatus, Response, Param} from "@nestjs/common";
import {Response as Res} from 'express';
import * as request from "request-promise-native";

@Controller()
export class HealthCheckController {

    @Get("health/grenn")
    public checkGrennHealth(@Response() res: Res) {
        res.status(HttpStatus.OK)
            .json({message: "Healthy"});
    }

    @Get("health/whatasha")
    public async checkWhatashaHealth(@Response() res: Res) {
        const url = `https://gigantic-mmr-api.azurewebsites.net/leaderboards/nadichiko`;
        const data = await request({url: url, json: true});

        res.status(HttpStatus.OK)
            .json({message: "Healthy"});
    }

    @Get("health/gogigantic")
    public async checkGoGiganticHealth(@Response() res: Res) {
        const url = `https://stats.gogigantic.com/en/gigantic-careers/playersearch/?username=itruliapage_num=0&page_size=100`;
        const data = await request({url: url, json: true});

        res.status(HttpStatus.OK)
            .json({message: "Healthy"});
    }
}