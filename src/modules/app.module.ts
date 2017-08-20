import {Module} from "@nestjs/common";
import {PlayerModule} from "./player/player.module";
import {HealthCheckModule} from "./health/health.module";
import {LoggingModule} from "./logging/logging.module";

@Module({
    modules: [
        PlayerModule,
        HealthCheckModule,
        LoggingModule
    ]
})
export class ApplicationModule {}