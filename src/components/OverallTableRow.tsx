"use client";

import { useState } from "react";
import Checkbox from "./Checkbox";

interface OverallTableRowProps {
  name: string;
  team: string;
  position: string;
  rank: number;
  rankPosition: number;
  isDrafted: boolean;
}

const OverallTableRow = ({
  name,
  team,
  position,
  rank,
  rankPosition,
  isDrafted,
}: OverallTableRowProps) => {
  const [isBlurred, setIsBlurred] = useState(isDrafted);

  const handleCheckBoxChange = () => setIsBlurred(!isBlurred);

  const blurRow = isBlurred ? "blur-[1px]" : "";
  const cellClassesCommon = "whitespace-nowrap px-6 py-4 text-center ";
  const cellClassesBlur = cellClassesCommon + blurRow;

  return (
    <tr className="border-b transition duration-300 ease-in-out hover:bg-neutral-100 dark:border-neutral-500 dark:hover:bg-neutral-600">
      <td className={cellClassesCommon}>
        <Checkbox handleCheckBoxChange={handleCheckBoxChange} />
      </td>
      <td className={cellClassesBlur}>{rank}</td>
      <td className={cellClassesBlur}>{position}</td>
      <td className={cellClassesBlur + " font-medium"}>{name}</td>
      <td className={cellClassesBlur}>{rankPosition}</td>
      <td className={cellClassesBlur}>{team}</td>
      <td className={cellClassesBlur}>N/A</td>
    </tr>
  );
};

export default OverallTableRow;
