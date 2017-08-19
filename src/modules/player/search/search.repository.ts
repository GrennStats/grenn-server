import {Component} from "@nestjs/common";
import {ApiSearchService} from "./services/api-search.service";
import {DbSearchService} from "./services/db-search.service";

@Component()
export class SearchRepository {
    constructor(private apiSearch: ApiSearchService, private dbSearch: DbSearchService) {}

    protected async saveLogQuery(playerId: string): Promise<void> {
        this.dbSearch.saveStatsOfPlayer(playerId);
    }

    public async findPlayer(playerId: string) {
        await this.saveLogQuery(playerId);

        return this.apiSearch.findPlayer(playerId);
    }
}