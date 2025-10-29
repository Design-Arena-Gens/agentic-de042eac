import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";

const payloadSchema = z.object({
  samples: z.array(z.string()).max(4),
  notes: z.string().optional(),
});

export async function POST(request: NextRequest) {
  try {
    const payload = await request.json();
    const parsed = payloadSchema.parse(payload);

    return NextResponse.json(
      {
        status: "ok",
        message: "Sample request received",
        data: parsed,
      },
      { status: 200 }
    );
  } catch {
    return NextResponse.json(
      {
        status: "error",
        message: "Invalid payload",
      },
      { status: 400 }
    );
  }
}
