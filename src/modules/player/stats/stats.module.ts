import {Module} from "@nestjs/common";
import {PlayerStatsController} from "./stats.controller";
import {ApiStatsService} from "./api-stats.service";
import {DbStatsService} from "./db-stats.service";

@Module({
    controllers: [
        PlayerStatsController
    ],
    components: [
        ApiStatsService,
        DbStatsService
    ],
    modules: [],
})
export class PlayerStatsModule {}