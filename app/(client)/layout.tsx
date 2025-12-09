import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ClerkProvider } from "@clerk/nextjs";
import Chatbot from "@/components/chatbot/Chatbot";
import "../globals.css"
import GoogleTranslateManager from "@/components/GoogleTranslateManager";

export const metadata: Metadata = {
  title: {
    template: "%s - AgriHub online store",
    default: "AgriHub online store",
  },
  description: "AgriHub online store, Your one stop shop for all your needs",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <div className="flex flex-col min-h-screen relative z-10 bg-white">
        <GoogleTranslateManager />
        <Header />
        <main className="flex-1">{children}</main>
        <Chatbot />
        <Footer />
      </div>
    </ClerkProvider>
  );
}