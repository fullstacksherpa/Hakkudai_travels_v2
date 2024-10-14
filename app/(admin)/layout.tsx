import "./globals.css";
import CmsNavbar from "@/components/studio/Navbar";
export const metadata = {
  title: "Hakkudai",
  description: "sanity content editing",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <CmsNavbar />
        {children}
      </body>
    </html>
  );
}
