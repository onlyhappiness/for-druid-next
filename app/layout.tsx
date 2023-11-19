import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Providers from "./providers.client";
import { cache } from "react";
import { QueryClient, dehydrate } from "@tanstack/react-query";
import Hydrate from "./Hydrate.client";

import ClientLayout from "@/layout/main-layout";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

const getQueryClient = cache(() => new QueryClient());

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const queryClient = getQueryClient();
  const dehydratedState = dehydrate(queryClient);

  queryClient.clear();

  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          <Hydrate state={dehydratedState}>
            <ClientLayout>{children}</ClientLayout>
          </Hydrate>
        </Providers>
      </body>
    </html>
  );
}
