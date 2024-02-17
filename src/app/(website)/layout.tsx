import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { cookies } from "next/headers";
import { supabase } from "@/supabase";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "PaperAdda",
  description:
    "PaperAdda is a platform for students to share their notes and papers.",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  let user = null;
  const enCodedToken = cookies().get("sb-tjzfopxyhqberyhidqhl-auth-token")
    ?.value as string;
  if (enCodedToken) {
    const {
      data: { user: userData },
    } = await supabase.auth.getUser(JSON.parse(enCodedToken)[0]);
    user = userData;
  }

  return (
    <>
      <Header user={user} />
      <main className="mt-44 md:px-10 px-3 lg:px-20 w-full min-h-screen">
        {children}
      </main>
      <Footer />
    </>
  );
}
