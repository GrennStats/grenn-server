import {Module} from "@nestjs/common";
import * as bunyan from "bunyan";
import {LoggerService} from "./logging.service";

@Module({
    components: [
        {provide: bunyan, useValue: LoggerService}
    ],
    exports: [
        bunyan
    ]
})
export class LoggingModule {}