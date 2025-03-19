import { Roboto } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import Image from "next/image";
import NavElements from "./components/navelements";

const roboto = Roboto({
  subsets: ["latin"],
});

export const metadata = {
  title: "Soundverse AI assignment",
  description: "Soundverse AI assignment",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${roboto.className} antialiased w-screen overflow-x-hidden`}
      >
        <nav className="fixed h-screen z-50 bg-opacity-80 top-0 left-0 w-16 p-4 bg-black backdrop-blur-sm justify-between items-center flex flex-col">
          <div className="top flex flex-col gap-6">
            <div className="logo">
              <Image
                className="max-w-full"
                src={"/logo.png"}
                width={50}
                height={50}
                alt="logo"
              />
            </div>
            <div className="menu flex flex-col gap-4 items-center">
              <NavElements />
              <Link
                href="/"
                className="mt-4 p-2 px-2 rounded-md text-white bg-gray-900 border-2 border-purple-900"
              >
                <span>DNA</span>
              </Link>
            </div>
          </div>
          <div className="bottom mb-4">
            <Link href="/">
              <div className="rounded-full overflow-hidden my-10">
                <Image
                  src="/placeholder.jpg"
                  width={40}
                  height={100}
                  alt="Profile"
                />
              </div>
            </Link>
          </div>
        </nav>
        <div className="absolute top-0 right-5 md:right-20">
          <div className="rounded-full overflow-hidden my-10 cursor-pointer">
            <Image
              src="/placeholder.jpg"
              width={50}
              height={50}
              alt="Profile"
            />
          </div>
        </div>
        {children}
      </body>
    </html>
  );
}
