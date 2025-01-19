import Feed from "@/components/Feed";
import Navbar from "@/components/Navbar";
import Image from "next/image";

export default function Home() {
  return (
    <main className="bg-white dark:bg-blue-900 -mt-4">
      <Navbar/>
      <Feed/>
    </main>
  );
}

// git add .
// git commit -m "Added navbar"
// git push origin main 