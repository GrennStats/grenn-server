import {Module} from "@nestjs/common";
import {PlayerSearchController} from "./search.controller";
import {DbSearchService} from "./services/db-search.service";
import {ApiSearchService} from "./services/api-search.service";
import {SearchRepository} from "./search.repository";

@Module({
    controllers: [
        PlayerSearchController
    ],
    components: [
        ApiSearchService,
        DbSearchService,
        SearchRepository
    ],
    modules: [],
})
export class PlayerSearchModule {}