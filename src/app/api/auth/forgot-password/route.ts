import { createRouteHandlerClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";

export const POST = async (req: NextRequest) => {
  const requestUrl = new URL(req.url);
  const formData = await req.formData();
  const email = String(formData.get("email"));
  console.log('email', email)

  const cookieStore = cookies();
  const supabase = createRouteHandlerClient({
    cookies: () => cookieStore,
  });

  try {
    const { error } = await supabase.auth.resetPasswordForEmail(email);
    if (error) return NextResponse.json(error.message);
    return NextResponse.json("Please check you email");
  } catch (error: any) {
    return NextResponse.json(error.message);
  }
};
