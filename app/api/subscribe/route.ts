import { NextRequest, NextResponse } from "next/server";
import sanityClient from "@sanity/client";

// Sanity client
const client = sanityClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  token: process.env.SANITY_API_TOKEN, // must be write token
  useCdn: false,
});

export async function POST(req: NextRequest) {
  try {
    const { email } = await req.json();

    if (!email) {
      return NextResponse.json({ message: "Email is required" }, { status: 400 });
    }

    await client.create({
      _type: "newsletter",
      email,
      createdAt: new Date().toISOString(),
    });

    return NextResponse.json({ message: "Subscribed successfully!" });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ message: "Something went wrong" }, { status: 500 });
  }
}










