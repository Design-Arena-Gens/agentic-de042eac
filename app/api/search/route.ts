import { NextRequest, NextResponse } from "next/server";
import { executeSearch } from "../../../lib/search";

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const query = searchParams.get("q") ?? "";
  const results = executeSearch(query).map((product) => ({
    handle: product.handle,
    name: product.name,
    collection: product.collection,
    image: product.image,
  }));

  return NextResponse.json({ results });
}
