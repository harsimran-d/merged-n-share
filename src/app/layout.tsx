import type { Metadata } from "next";
import { Bricolage_Grotesque, Epilogue, Work_Sans } from "next/font/google";
import "./globals.css";
import Providers from "@/components/Providers";
import NextTopLoader from 'nextjs-toploader';
import { Toaster } from "@/components/ui/sonner";
import { Analytics } from "@vercel/analytics/react"
import { ThemeProvider } from "@/components/theme-provider";

// primary font
const work_sans = Work_Sans({
  subsets: ["latin"],
  weight: ["200", "300", "500", "600", "700", "800"],
  variable: '--font-primary',
  display: "swap",
});

// secondary font 
const bricolage = Bricolage_Grotesque({
  subsets: ["latin"],
  weight: ["200", "300", "500", "600", "700", "800"],
  variable: '--font-secondary',
  display: "swap",
});

// paragraph/text font 
const epilogue = Epilogue({
  subsets: ["latin"],
  weight: ["200", "300", "500", "600", "700", "800"],
  variable: '--font-paragraph',
  display: "swap",
});


export const metadata: Metadata = {
  title: "M&S",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${epilogue.variable} ${work_sans.variable} ${bricolage.variable} font-primary`}>
        <NextTopLoader color="#2E78C7" height={2} />
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
        >
          <Providers>
            <div className="min-h-screen py-8 relative overflow-hidden">
              <div className='absolute left-[50%] translate-x-[-50%] -top-[2rem] md:-top-[6rem] size-[12rem] md:size-[14rem] rounded-full bg-gradient-to-t from-yellow-400 to-yellow-700 blur-[8em]'></div>
              <main className="max-w-[1180px] px-4 mx-auto">{children}</main>
              <div className='absolute left-[50%] -z-0 border-2 opacity-75 border-white translate-x-[-50%] -bottom-[2rem] md:-bottom-[6rem] size-[12rem] md:size-[14rem] rounded-full bg-gradient-to-t from-yellow-400 to-yellow-700 blur-[8em]'></div>
            </div>

          </Providers>
        </ThemeProvider>
        <Analytics />
        <Toaster />
      </body>
    </html>
  );
}
