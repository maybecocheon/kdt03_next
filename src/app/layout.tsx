import type { Metadata } from "next";
import { myFont } from "./fonts";
import "./globals.css";
import Header from "@/component/Header";
import Footer from "@/component/Footer";

export const metadata: Metadata = {
  title: "K-Digital 3기",
  description: "K-Digital 3기 Next.js",
};

// nextjs가 전달해 주는 props가 children
export default function RootLayout({ children, }: Readonly<{children: React.ReactNode;}>) {
  return (
    <html lang="ko">
      {/*    <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}> */}
      <body className={myFont.className}>
        <div className="w-full h-screen flex flex-col justify-center items-center overflow-y-hidden">
          <Header />
          <main className="h-full w-full flex flex-col justify-center items-center overflow-y-auto">
            {children} {/* 내가 app 폴더 내에 만든 컴포넌트가 children */}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
