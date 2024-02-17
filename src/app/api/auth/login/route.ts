import { createRouteHandlerClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const requestUrl = new URL(request.url);
  const formData = await request.formData();
  const email = String(formData.get("email"));
  const password = String(formData.get("password"));

  const cookieStore = cookies();
  const supabase = createRouteHandlerClient({
    cookies: () => cookieStore,
  });

  const { data } = await supabase.auth.signInWithPassword({
    email,
    password,
  });

  if (!data.user || !data.session)
    return NextResponse.json("User does not exist");

  cookieStore.set("_user_details", JSON.stringify(data.user));

  cookies().set("_paperadda_jwt", data.session?.access_token as string, {
    maxAge: 3600,
  });

  return NextResponse.redirect(requestUrl.origin, {
    status: 301,
  });
}
