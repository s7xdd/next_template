import { NextResponse } from "next/server";
import { cookies } from "next/headers";

export async function GET() {
  // Create a response object
  const response = NextResponse.json({
    success: true,
    message: "All cookies cleared successfully.",
  });

  cookies().delete("wordpress_logged_in_");

  cookies().delete("wp_woocommerce_session_");

  cookies().delete("wordpress_sec_");

  cookies().delete("woocommerce_cart_hash");

  cookies().delete("woocommerce_items_in_cart");

  return response;
}
