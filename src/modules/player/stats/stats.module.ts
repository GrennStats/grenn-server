import {Module} from "@nestjs/common";
import {PlayerStatsController} from "./stats.controller";
import {ApiStatsService} from "./api-stats.service";

@Module({
    controllers: [
        PlayerStatsController
    ],
    components: [
        ApiStatsService
    ],
    modules: [],
})
export class PlayerStatsModule {}