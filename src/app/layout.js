import { Inter } from "next/font/google";
import "./globals.css";
import DashboardLayout from "@/components/layouts/DashboardLayout";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Egg app",
  description: "This is egg application portal",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <DashboardLayout>{children}</DashboardLayout>
      </body>
    </html>
  );
}
