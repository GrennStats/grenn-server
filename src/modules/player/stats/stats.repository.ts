import {ApiStatsService, ApiCurrentStatsDataResponse} from "./services/api-stats.service";
import {DbStatsService, StatsTimeline} from "./services/db-stats.service";
import {StatsConfig} from "./stats.config";
import {Component} from "@nestjs/common";

@Component()
export class StatsRepository {
    constructor(
        private apiStats: ApiStatsService,
        private dbStats: DbStatsService,
        private config: StatsConfig
    ) {}

    /**
     * Checks if the stats need to be stored in the database
     *
     * @param playerId
     */
    protected async needStatsToBeStored(playerId: string) {
        return !await this.dbStats.getStatsOfToday(playerId);
    }

    /**
     * Stores the stats if needed
     *
     * @param playerId
     * @param stats
     */
    protected async storeStats(playerId: string, stats: ApiCurrentStatsDataResponse) {
        if (await this.needStatsToBeStored(playerId)) {
            await this.dbStats.saveStatsOfPlayer(playerId, stats);
        }
    }

    /**
     * Fetches the current stats of a player from the API
     * And saves them in the database if needed
     *
     * @param playerId
     */
    public async getPlayersCurrentStats(playerId: string): Promise<ApiCurrentStatsDataResponse> {
        const stats = await this.apiStats.getStatsOfPlayer(playerId);
        await this.storeStats(playerId, stats);

        return stats;
    }

    /**
     * Gets all timeline stats of a player
     *
     * @param playerId
     */
    public async getPlayersTimelineStats(playerId: string): Promise<StatsTimeline> {
        return this.dbStats.getStatsOfPlayer(playerId);
    }
}