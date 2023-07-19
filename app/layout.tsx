"use client";
import Footer from "@/components/Footer";
import "./globals.css";
import { Urbanist } from "next/font/google";
import Navbar from "@/components/Navbar";
import ModalProvider from "@/providers/modal-provider";
import ToastProvider from "@/providers/toast-provider";

import { MedusaProvider } from "medusa-react";
import { QueryClient } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import HydrationZustand from "@/components/ZustandHydration"

import { useEffect, useState } from "react";

const queryClient = new QueryClient();

const font = Urbanist({ subsets: ["latin"] });

export const metadata = {
  title: "Store",
  description: "Store",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  return (
    <html lang="en">
      <body className={font.className}>
        <MedusaProvider
          queryClientProviderProps={{ client: queryClient }}
          baseUrl="https://medusabackend-production-c032.up.railway.app"
        >
          <ModalProvider />
          <ToastProvider />
          <Navbar />
          <HydrationZustand>
          {children}
          </HydrationZustand>
          <Footer />
          <ReactQueryDevtools />
        </MedusaProvider>
      </body>
    </html>
  );
}
