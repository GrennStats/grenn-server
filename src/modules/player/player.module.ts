import {Module} from "@nestjs/common";
import {PlayerStatsModule} from "./stats/stats.module";
import {PlayerSearchModule} from "./search/search.module";

@Module({
    modules: [
        PlayerStatsModule,
        PlayerSearchModule
    ],
})
export class PlayerModule {}