import axios from "axios";

const clientId = "TEST";

export async function GET(request: Request) {
  const { data, status } = await axios({
    url: `https://api.fantasynerds.com/v1/mlb/draft-rankings?apikey=${clientId}`,
    method: "GET",
  });

  return Response.json({ data });
}
