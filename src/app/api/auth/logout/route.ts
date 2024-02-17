import { createRouteHandlerClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const requestUrl = new URL(request.url);
  const cookieStore = cookies();
  const supabase = createRouteHandlerClient({ cookies: () => cookieStore });

  await supabase.auth.signOut();

  cookieStore.delete("_user_details");
  cookieStore.delete("_paperadda_jwt");

  return NextResponse.redirect(`${requestUrl.origin}`, {
    status: 301,
  });
}
