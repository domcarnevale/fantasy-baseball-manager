"use client";

import axios from "axios";

export const getDraftRankings = async () => {
  try {
    const { data, status } = await axios({
      url: `http://localhost:3000/api/draft-rankings`,
      method: "GET",
    });
    return data.data.players;
  } catch (error) {
    console.error("Recieved Error: ", error);
    throw error;
  }
};
