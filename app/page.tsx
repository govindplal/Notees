import Image from "next/image";
import { Button } from "@/components/ui/button"; // Ensure the casing matches the file name

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col p-4 m-2 w-100vw overflow-x-hidden"> {/* Added overflow-hidden */}
      <nav className="w-full flex justify-between mb-10">
        <div className="text-2xl font-bold">Notee</div>
        <div className="flex space-x-4 items-center">
          <a href="#features">Features</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
          <Button variant="default" size="sm">Login</Button>
        </div>
      </nav>

      <div className="flex w-full items-start justify-between"> {/* Ensure full width */}
        <div className="text-left w-full md:w-1/2 p-10"> {/* Full width on small screens */}
          <h1 className="text-6xl font-extrabold">Take Notes. Anywhere. Anytime.</h1>
          <p className="mt-4 text-xl">Change the way you take notes.</p>
        </div>
        <div className="w-full md:w-1/3 flex justify-center"> {/* Set width to 50% for image */}
          <Image
            src="/Hero.png" // Replace with your image path
            alt="Hero"
            width={600} // Adjusted width to fill half the viewport
            height={300} // Adjust height as needed
            className="rounded-lg w-full h-auto" // Ensures the image fills the container
          />
        </div>
      </div>

      <footer className="mt-10">
        <p>&copy; 2023 Notee. All rights reserved.</p>
      </footer>
    </main>
  );
}
