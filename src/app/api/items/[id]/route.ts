import dbConnect from "@/config/database/mongodb";
import item from "../../../../../models/item";
import { NextRequest } from "next/server";

export async function GET(request: NextRequest) {
  await dbConnect();

  const searchParams = request.nextUrl.searchParams;
  const query = searchParams.get("id");

  console.log("searchParams",searchParams)

  try {
    const foundItem = await item.findById(query);

    if (!foundItem) {
      return new Response(JSON.stringify({ error: "Item not found" }), {
        status: 404,
        headers: { "Content-Type": "application/json" },
      });
    }

    return new Response(JSON.stringify(foundItem), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error("Error fetching item:", error);
    return new Response(JSON.stringify({ error: "Failed to fetch item", details: error?.message }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}
