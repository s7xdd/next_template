import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export async function GET() {
  const allCookies = cookies();

  console.log("HTTP-Only Cookies:");
  allCookies.getAll().forEach((cookie) => {
    console.log(`${cookie.name}: ${cookie.value}`);
  });

  return NextResponse.json({
    success: true,
    message: "Cookies logged successfully.",
    cookies: allCookies.getAll(), // Optionally return all cookies in the response
  });
}
