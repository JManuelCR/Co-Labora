import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <header>
        <nav className="flex justify-around">
          <div>
            <Link href="/">
              <img src="" alt="Co-Labrora logo" />
            </Link>
          </div>
          <div></div>
        </nav>
      </header>
      <h1>This is hero</h1>
    </main>
  );
}
