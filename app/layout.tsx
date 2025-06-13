import type { Metadata } from "next";
import { Open_Sans } from "next/font/google";
import "./globals.css";
import { AntdRegistry } from "@ant-design/nextjs-registry";
import CustomProviders from "@cd/components/providers.component";
import { ThemeProvider } from "@cd/context/theme.context";
import { Layout } from "antd";

const open_sans = Open_Sans({
  variable: "--font-open_sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Cyder",
  description: "Cyder dashboard",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${open_sans.variable}`}>
        <ThemeProvider>
          <AntdRegistry>
            <CustomProviders>
              <Layout>{children}</Layout>
            </CustomProviders>
          </AntdRegistry>
        </ThemeProvider>
      </body>
    </html>
  );
}
