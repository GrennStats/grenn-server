import {Module} from "@nestjs/common";
import {PlayerModule} from "./player/player.module";
import {HealthCheckModule} from "./health/health.module";

@Module({
    modules: [
        PlayerModule,
        HealthCheckModule
    ],
})
export class ApplicationModule {}