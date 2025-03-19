import { Roboto } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import Image from "next/image";

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
              <Link href="/">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="24px"
                  viewBox="0 -960 960 960"
                  width="24px"
                  fill="#e8eaed"
                >
                  <path d="M440-280h80v-160h160v-80H520v-160h-80v160H280v80h160v160Zm40 200q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z" />
                </svg>
              </Link>
              <Link href="/">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="24px"
                  viewBox="0 -960 960 960"
                  width="24px"
                  fill="#e8eaed"
                >
                  <path d="M240-200h120v-240h240v240h120v-360L480-740 240-560v360Zm-80 80v-480l320-240 320 240v480H520v-240h-80v240H160Zm320-350Z" />
                </svg>
              </Link>
              <Link href="/">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="24px"
                  viewBox="0 -960 960 960"
                  width="24px"
                  fill="#e8eaed"
                >
                  <path d="M784-120 532-372q-30 24-69 38t-83 14q-109 0-184.5-75.5T120-580q0-109 75.5-184.5T380-840q109 0 184.5 75.5T640-580q0 44-14 83t-38 69l252 252-56 56ZM380-400q75 0 127.5-52.5T560-580q0-75-52.5-127.5T380-760q-75 0-127.5 52.5T200-580q0 75 52.5 127.5T380-400Z" />
                </svg>
              </Link>
              <Link href="/">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="24px"
                  viewBox="0 -960 960 960"
                  width="24px"
                  fill="#e8eaed"
                >
                  <path d="M400-400h160v-80H400v80Zm0-120h320v-80H400v80Zm0-120h320v-80H400v80Zm-80 400q-33 0-56.5-23.5T240-320v-480q0-33 23.5-56.5T320-880h480q33 0 56.5 23.5T880-800v480q0 33-23.5 56.5T800-240H320Zm0-80h480v-480H320v480ZM160-80q-33 0-56.5-23.5T80-160v-560h80v560h560v80H160Zm160-720v480-480Z" />
                </svg>
              </Link>
              <Link href="/" className="mt-4 p-2 px-2 rounded-md bg-gray-900">
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
        <div className="absolute top-0 right-20">
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
