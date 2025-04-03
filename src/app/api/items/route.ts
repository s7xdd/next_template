import dbConnect from "@/config/database/mongodb";
import item from "../../../../models/item";

export async function GET(request: Request) {
  await dbConnect();

  const items = await item.find({});

  return new Response(JSON.stringify(items), {
    status: 200,
    headers: {
      "Content-Type": "application/json",
    },
  });
}

export async function POST(request: Request) {
  await dbConnect();

  try {
    const body = await request.json();

    const newItem = await item.create(body);

    return new Response(JSON.stringify(newItem), {
      status: 201,
      headers: {
        "Content-Type": "application/json",
      },
    });
  } catch (error: any) {
    console.error("Error creating item:", error);
    return new Response(JSON.stringify({ error: "Failed to create item", details: error?.message }), {
      status: 400,
      headers: {
        "Content-Type": "application/json",
      },
    });
  }
}
