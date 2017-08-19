import {Module} from "@nestjs/common";
import {PlayerStatsController} from "./stats.controller";
import {ApiStatsService} from "./services/api-stats.service";
import {DbStatsService} from "./services/db-stats.service";
import {StatsRepository} from "./stats.repository";
import {StatsConfig} from "./stats.config";

@Module({
    controllers: [
        PlayerStatsController
    ],
    components: [
        ApiStatsService,
        DbStatsService,
        StatsRepository,
        StatsConfig
    ],
    modules: [],
})
export class PlayerStatsModule {}