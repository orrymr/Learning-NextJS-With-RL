import Link from "next/link";

export default function Home() {
  return (
    <div className="text-center text-white p-8 rounded-lg shadow-lg bg-opacity-75 bg-black">
      <h1 className="text-5xl font-bold mb-4 text-red-400">
        Welcome to OGZILLA
      </h1>
      <p className="text-lg mb-8 text-red-400">
        The ultimate platform for all your needs.
      </p>
      <Link href="/profile">
        <button className="bg-red-300 text-black font-semibold py-2 px-4 rounded transition duration-300 hover:bg-gradient-to-r hover:from-purple-400 hover:via-pink-500 hover:to-red-500 hover:text-white">
          Get Started
        </button>
      </Link>
    </div>
  );
}