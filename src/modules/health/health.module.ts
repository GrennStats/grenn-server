import {Module} from "@nestjs/common";
import {HealthCheckController} from "./health.controller";

@Module({
    controllers: [
        HealthCheckController
    ],
    components: [
    ],
    modules: [],
})
export class HealthCheckModule {}