import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const checkoutUrl = process.env.STRIPE_PAYMENT_LINK;

  if (checkoutUrl) {
    return NextResponse.redirect(checkoutUrl);
  }

  return NextResponse.redirect(new URL("/#pricing", request.url));
}
