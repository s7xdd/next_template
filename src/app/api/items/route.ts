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

  const itemData = await item.create(JSON.parse(request.body));

  return new Response(JSON.stringify(itemData), {
    status: 201,
    headers: {
      "Content-Type": "application/json",
    },
  });
}
