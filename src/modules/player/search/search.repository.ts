import {Component} from "@nestjs/common";
import {ApiSearchService, SearchPlayerResponse} from "./services/api-search.service";
import {DbSearchService, SearchRanking} from "./services/db-search.service";

@Component()
export class SearchRepository {
    constructor(private apiSearch: ApiSearchService, private dbSearch: DbSearchService) {}

    protected async saveLogQuery(playerId: string): Promise<void> {
        this.dbSearch.saveSearch(playerId);
    }

    public async getMostPopularSearches(): Promise<SearchRanking> {
        return this.dbSearch.getMostPopularSearches();
    }

    public async findPlayer(playerId: string): Promise<SearchPlayerResponse> {
        await this.saveLogQuery(playerId);

        return this.apiSearch.findPlayer(playerId);
    }
}