import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html>
      <body>
        <h1><Link href="/">WEB</Link></h1>
        <ol>
          <li><Link href="/read/1">html</Link></li>
          <li><Link href="/read/2">css</Link></li>
        </ol>
        {children}
        <ul>
          <li><Link href="/create">Create</Link></li>
          <li><Link href="/update/1">Update</Link></li>
          <li><input type="button" value="delete" /></li>
        </ul>
      </body>
    </html>
  );
}
