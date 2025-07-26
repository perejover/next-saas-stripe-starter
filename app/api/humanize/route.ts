import { NextResponse } from "next/server";

export async function POST(request: Request) {
    const { text } = await request.json();
    if (typeof text !== "string") {
        return NextResponse.json({ error: "Invalid input" }, { status: 400 });
    }
    // Simple humanization logic (same as before)
    const humanized = text
        .replace(/ /g, "\u2009"); // <-- Esta línea agrega el thin space https://github.com/Oct4Pie/zero-zerogpt
    return NextResponse.json({ humanized });
}
