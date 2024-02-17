import { createRouteHandlerClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const requestUrl = new URL(request.url);
  const formData = await request.formData();
  const name = formData.get("name") as string;
  const phone = formData.get("phone") as string;
  const email = formData.get("email") as string;
  const password = formData.get("password") as string;

  const cookieStore = cookies();
  const { auth } = createRouteHandlerClient({ cookies: () => cookieStore });

  try {
    const { data, error } = await auth.signUp({
      email,
      password,
      phone,

      options: {
        // emailRedirectTo: `${requestUrl.origin}/api/auth/callback`,
        data: {
          name,
        },
      },
    });

    if (error) return NextResponse.json(error.message);

    cookieStore.set("_user_details", JSON.stringify(data.user));

    cookies().set("_paperadda_jwt", data.session?.access_token as string);

    // return NextResponse.redirect(requestUrl.origin, {
    //   status: 301,
    // });
    return NextResponse.json(data);
  } catch (error: any) {
    console.log('err', error);
    return NextResponse.json(error.message);
  }
}
