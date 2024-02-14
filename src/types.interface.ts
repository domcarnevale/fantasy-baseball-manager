
export interface Player {
  playerId: string;
  name: string;
  team: string;
  position: string;
  rank: number;
  rankPosition: number;
  isDrafted: boolean;
}

export type Players = Player[]

export interface DraftRankingResponseObject {
  playerId: string;
  name: string;
  team: string;
  position: string;
  rank: number;
  rank_position: number;
}

export type DraftRankingResponse = DraftRankingResponseObject[]