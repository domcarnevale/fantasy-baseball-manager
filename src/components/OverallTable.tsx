import { Players } from "@/types.interface";
import OverallTableRow from "./OverallTableRow";

interface OverallTableRowProps {
  players: Players;
}

const OverallTable = ({ players }: OverallTableRowProps) => {
  return (
    <table className="min-w-full text-left text-sm font-light">
      <thead className="border-b bg-neutral-50 font-medium dark:border-neutral-500 dark:text-neutral-800">
        <tr>
          <th scope="col" className="px-6 py-4">
            DRAFTED?
          </th>
          <th scope="col" className="px-6 py-4">
            RANK
          </th>
          <th scope="col" className="px-6 py-4">
            POS
          </th>
          <th scope="col" className="px-6 py-4">
            PLAYER
          </th>
          <th scope="col" className="px-6 py-4">
            POS RANK
          </th>
          <th scope="col" className="px-6 py-4">
            TEAM
          </th>
          <th scope="col" className="px-6 py-4">
            $
          </th>
        </tr>
      </thead>
      <tbody>
        {players.map((player) => (
          <OverallTableRow
            key={player.playerId}
            name={player.name}
            team={player.team}
            position={player.position}
            rank={player.rank}
            rankPosition={player.rankPosition}
            isDrafted={player.isDrafted}
          />
        ))}
      </tbody>
    </table>
  );
};

export default OverallTable;
