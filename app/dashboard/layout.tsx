import type { Metadata } from "next";
import React, { Suspense } from "react";
import { cookies } from "next/headers";
import Sidebar from "@/components/dashboard/sidebar";

export const metadata: Metadata = {
  title: "OnceClick AI",
  description: "Your personal AI assistant for everyday tasks",
};

async function DashboardShell({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const cookieStore = await cookies();
  const metadataCookie = cookieStore.get("metadata");

  return metadataCookie?.value ? (
    <>
      <Sidebar />
      <div className="flex-1 flex flex-col md:ml-64 relative min-h-screen transition-all duration-300">
        <main className="flex-1">{children}</main>
      </div>
    </>
  ) : (
    children
  );
}

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="bg-[#050509] min-h-screen flex flex-col p-0 antialiased text-zinc-100 selection:bg-zinc-800 font-sans">
      <Suspense fallback={children}>
        <DashboardShell>{children}</DashboardShell>
      </Suspense>
    </div>
  );
}
