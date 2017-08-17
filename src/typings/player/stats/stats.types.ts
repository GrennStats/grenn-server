export interface Stats {
    power_score: number;
    kills: number;
    deaths: number;
    guardian_damage: number;
    kda: number;
    wounds_given: number;
    summons: number;
    damage_dealt: number;
    healing_given: number;
    assists: number;
    damage_soaked: number;
    medals_earned: number;
    time_played: number;
}

export interface TotalStats extends Stats {
    wins: number;
    losses: number;
    motiga_skill: number;
    rank: number;
    total_games: number;
}

export interface StatsType {
    total: TotalStats;
    avg: Stats;
    best: Stats;
}