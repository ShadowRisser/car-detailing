import { NextRequest, NextResponse } from "next/server";
import { db } from "@/lib/db";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, phone, vehicle, service, message } = body;

    if (!name || !email || !service) {
      return NextResponse.json(
        { error: "Name, email, and service are required." },
        { status: 400 }
      );
    }

    await db.booking.create({
      data: {
        name,
        email,
        phone: phone || null,
        vehicle: vehicle || null,
        service,
        message: message || null,
      },
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Booking error:", error);
    return NextResponse.json(
      { error: "Internal server error." },
      { status: 500 }
    );
  }
}