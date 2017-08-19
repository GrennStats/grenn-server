import {Controller, Get, Post, HttpStatus, Response, Param} from "@nestjs/common";
import {Response as Res} from 'express';

@Controller()
export class HealthCheckController {

    @Get("health/grenn")
    public checkGrennHealth(@Res() res: Res) {
        res.status(HttpStatus.OK).json({
            message: "Healthy"
        });
    }

    @Get("health/whatasha")
    public checkWhatashaHealth(@Res() res: Res) {
        res.status(HttpStatus.NOT_IMPLEMENTED);
    }

    @Get("health/gigantic")
    public checkGiganticHealth(@Res() res: Res) {
        res.status(HttpStatus.NOT_IMPLEMENTED);
    }
}