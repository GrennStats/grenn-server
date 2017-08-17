import {Module} from "@nestjs/common";
import {ApiSearchService} from "./api-search.service";
import {PlayerSearchController} from "./search.controller";

@Module({
    controllers: [
        PlayerSearchController
    ],
    components: [
        ApiSearchService
    ],
    modules: [],
})
export class PlayerSearchModule {}