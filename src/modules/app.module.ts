import {Module} from "@nestjs/common";
import {PlayerModule} from "./player/player.module";

@Module({
    modules: [
        PlayerModule
    ],
})
export class ApplicationModule {}