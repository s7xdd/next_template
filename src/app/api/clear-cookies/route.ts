import { NextResponse } from "next/server";

export async function GET() {
  // Create a response object
  const response = NextResponse.json({
    success: true,
    message: "All cookies cleared successfully.",
  });

  // Clear the specified cookies with proper attributes
  response.cookies.set("wordpress_logged_in_da260f678c092b5b227bc93c9ad4de24", "", {
    path: "/",
    expires: new Date(0), // Expire immediately
    secure: true, // Ensure Secure attribute is set
    httpOnly: true, // Ensure HttpOnly attribute is set
    sameSite: "lax", // Allow cross-origin requests
  });

  response.cookies.set("wp_woocommerce_session_da260f678c092b5b227bc93c9ad4de24", "", {
    path: "/",
    expires: new Date(0),
    secure: true,
    httpOnly: true,
    sameSite: "lax",
  });

  response.cookies.set("wordpress_sec_da260f678c092b5b227bc93c9ad4de24", "", {
    path: "/",
    expires: new Date(0),
    secure: true,
    httpOnly: true,
    sameSite: "lax",
  });

  response.cookies.set("woocommerce_cart_hash", "", {
    path: "/",
    expires: new Date(0),
    secure: true,
    httpOnly: false, // This cookie might need to be accessible by JavaScript
    sameSite: "lax",
  });

  response.cookies.set("woocommerce_items_in_cart", "", {
    path: "/",
    expires: new Date(0),
    secure: true,
    httpOnly: false, // This cookie might need to be accessible by JavaScript
    sameSite: "lax",
  });

  return response;
}
