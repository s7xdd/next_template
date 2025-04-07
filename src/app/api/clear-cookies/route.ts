import { NextResponse } from "next/server";

export async function GET() {
  // Create a response object
  const response = NextResponse.json({
    success: true,
    message: "All cookies cleared successfully.",
  });

  response.cookies.delete("wordpress_logged_in_");

  response.cookies.delete("wp_woocommerce_session_");

  response.cookies.delete("wordpress_sec_");

  response.cookies.delete("woocommerce_cart_hash");

  response.cookies.delete("woocommerce_items_in_cart");

  return response;
}
