import { Inter } from "next/font/google";
import AuthContextProvider from "@/context/AuthContext";
import AppLayout from "@/ui/AppLayout";
import "../styles/globals.css";




export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body suppressHydrationWarning={true}>
        <AuthContextProvider>
          <AppLayout>{children}</AppLayout>
        </AuthContextProvider>
      </body>
    </html>
  );
}
