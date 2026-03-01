import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "개인 지식 관리 (PKM) - 사유하고 실천하는 존재",
  description: "사유-실천-존재의 지식 관리 철학을 담은 퍼스널 브랜딩 공간입니다.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className="font-sans antialiased text-foreground bg-background">
        {children}
      </body>
    </html>
  );
}
