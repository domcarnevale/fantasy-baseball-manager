"use client";

import OverallTable from "@/components/OverallTable";
import PositionTable from "@/components/PositionTable";
import { DraftRankingResponse, Player, Players } from "@/types.interface";
import { getDraftRankings } from "@/utils/fantasyNerdsApiUtils";
import { useEffect, useState } from "react";
import useAsyncEffect from "use-async-effect";

const testRankings = [
  {
    playerId: "839",
    name: "Ronald Acuña Jr.",
    team: "ATL",
    position: "LF",
    rank: 1,
    rank_position: 1,
  },
  {
    playerId: "954",
    name: "Fernando Tatis Jr.",
    team: "SD",
    position: "SS",
    rank: 2,
    rank_position: 1,
  },
  {
    playerId: "35",
    name: "Mookie Betts",
    team: "LA",
    position: "RF",
    rank: 3,
    rank_position: 1,
  },
];

const mapDraftRankingResponse = (rankings: DraftRankingResponse): Players => {
  return rankings.map((ranking) => {
    return {
      ...ranking,
      rankPosition: ranking.rank_position,
      isDrafted: false,
    };
  });
};

export default function Home() {
  const [players, setPlayers] = useState<Players>([]);

  useAsyncEffect(async () => {
    const rankings = await getDraftRankings();
    const mappedRankings = mapDraftRankingResponse(rankings);
    setPlayers(mappedRankings);
  }, []);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div>
        <h1>Fantasy Baseball Manager</h1>
        {false ? (
          <OverallTable players={players} />
        ) : (
          <PositionTable players={players} />
        )}
      </div>
    </main>
  );
}
