import { Players } from "@/types.interface";
import PositionTableRow from "./PositionTableRow";
import { useEffect, useState } from "react";
import Select, { MultiValue } from "react-select";

interface PositionTableRowProps {
  players: Players;
}

interface PositionOption {
  value: string;
  label: string;
}

type PositionOptions = PositionOption[];

const PositionTable = ({ players }: PositionTableRowProps) => {
  const positions = Array.from(
    new Set(players.map((player) => player.position))
  );

  const positionOptions: PositionOptions = positions.map((pos) => ({
    value: pos,
    label: pos,
  }));

  const [selectedPositions, setSelectedPositions] = useState<string[]>([]);
  const [filteredPlayers, setFilteredPlayers] = useState<Players>(players);

  useEffect(() => {
    console.log("selectedPositions", selectedPositions);
    const filteredPlayers =
      selectedPositions.length !== 0
        ? players.filter((player) =>
            selectedPositions.includes(player.position)
          )
        : players;
    console.log("filteredPlayers", filteredPlayers);
    setFilteredPlayers(filteredPlayers);
  }, [players, selectedPositions]);

  const handlePositionChange = (e: MultiValue<PositionOption>) => {
    console.log("handlePositionChange", e);
    const newSelectedPositions = e.map((option) => option.value);
    console.log("newSelectedPositions", newSelectedPositions);

    newSelectedPositions.length === 0
      ? setSelectedPositions(positions)
      : setSelectedPositions(newSelectedPositions);
  };

  return (
    <>
      <Select
        isMulti
        options={positionOptions}
        onChange={handlePositionChange}
      />
      <table className="min-w-full text-left text-sm font-light">
        <thead className="border-b bg-neutral-50 font-medium dark:border-neutral-500 dark:text-neutral-800">
          <tr>
            <th scope="col" className="px-6 py-4">
              DRAFTED?
            </th>
            <th scope="col" className="px-6 py-4">
              POS RANK
            </th>
            <th scope="col" className="px-6 py-4">
              POS
            </th>
            <th scope="col" className="px-6 py-4">
              PLAYER
            </th>
            <th scope="col" className="px-6 py-4">
              OVR RANK
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
          {filteredPlayers.map((player) => (
            <PositionTableRow
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
    </>
  );
};

export default PositionTable;
