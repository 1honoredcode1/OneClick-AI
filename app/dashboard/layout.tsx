import type { Metadata } from "next";
import React from "react";
import { cookies } from "next/headers";
import Sidebar from "@/components/dashboard/sidebar";

export const metadata: Metadata = {
  title: "OnceClick AI",
  description: "Your personal AI assistant for everyday tasks",
};

export default async function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const cookieStore = await cookies();
  const metadataCookie = cookieStore.get("metadata");

  return (
    <div className="bg-[#050509] min-h-screen flex flex-col p-0 antialiased text-zinc-100 selection:bg-zinc-800 font-sans">
      {metadataCookie?.value ? (
        <>
          <Sidebar />
          <div className="flex-1 flex flex-col md:ml-64 relative min-h-screen transition-all duration-300">
            {/* <Headers/> */}
            <main className="flex-1">{children} </main>
          </div>
        </>
      ) : (
        children
      )}
    </div>
  );
}
