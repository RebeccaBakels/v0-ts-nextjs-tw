/**
 * This code was generated by v0 by Vercel.
 * @see https://v0.dev/t/sNIFRLOhFXy
 */
import Link from "next/link";
import { Button } from "@/components/ui/button";

export function LandingPage() {
  return (
    <div className="grid h-screen w-full overflow-hidden p-8 space-y-8 bg-yellow-100 dark:bg-yellow-100 pattern-corgis">
      <div className="flex flex-col items-center gap-4">
        <img
          alt="Profile Picture"
          className="rounded-full border-8 border-yellow-500 dark:border-yellow-400"
          height="250"
          src="/public/profilepic.jpeg"
          style={{
            aspectRatio: "250/250",
            objectFit: "cover",
          }}
          width="250"
        />
        <h1 className="text-3xl font-bold text-center text-yellow-500 dark:text-yellow-400">
          John Doe
        </h1>
        <p className="text-center text-zinc-500 dark:text-zinc-400">
          I'm a software developer who loves to share knowledge with others. I'm
          passionate about Javascript, React and Node.js. And, I love Corgis!
        </p>
      </div>
      <div className="space-y-4">
        <h2 className="text-2xl font-bold text-yellow-500 dark:text-yellow-400">
          Talks
        </h2>
        <ul className="list-disc list-inside space-y-2">
          <li className="flex items-center gap-2">
            <svg
              className=" h-6 w-6 text-yellow-500 dark:text-yellow-400"
              fill="none"
              height="24"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              width="24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z" />
              <path d="M19 10v2a7 7 0 0 1-14 0v-2" />
              <line x1="12" x2="12" y1="19" y2="22" />
            </svg>
            <Link className="text-yellow-600 hover:underline" href="#">
              Building scalable applications with Node.js
            </Link>
          </li>
          <li className="flex items-center gap-2">
            <svg
              className=" h-6 w-6 text-yellow-500 dark:text-yellow-400"
              fill="none"
              height="24"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              width="24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z" />
              <path d="M19 10v2a7 7 0 0 1-14 0v-2" />
              <line x1="12" x2="12" y1="19" y2="22" />
            </svg>
            <Link className="text-yellow-600 hover:underline" href="#">
              Advanced React Patterns
            </Link>
          </li>
        </ul>
      </div>
      <div className="space-y-4">
        <h2 className="text-2xl font-bold text-yellow-500 dark:text-yellow-400">
          Articles
        </h2>
        <ul className="list-disc list-inside space-y-2">
          <li className="flex items-center gap-2">
            <svg
              className=" h-6 w-6 text-yellow-500 dark:text-yellow-400"
              fill="none"
              height="24"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              width="24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z" />
              <path d="m15 5 4 4" />
            </svg>
            <Link className="text-yellow-600 hover:underline" href="#">
              Understanding JavaScript Hoisting
            </Link>
          </li>
          <li className="flex items-center gap-2">
            <svg
              className=" h-6 w-6 text-yellow-500 dark:text-yellow-400"
              fill="none"
              height="24"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              width="24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z" />
              <path d="m15 5 4 4" />
            </svg>
            <Link className="text-yellow-600 hover:underline" href="#">
              React Hooks: An introduction
            </Link>
          </li>
        </ul>
      </div>
      <div className="flex items-center gap-4">
        <Link href="#">
          <Button size="icon" variant="ghost">
            <svg
              className=" h-6 w-6 text-yellow-600"
              fill="none"
              height="24"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              width="24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
            </svg>
            <span className="sr-only">Twitter</span>
          </Button>
        </Link>
        <Link href="#">
          <Button size="icon" variant="ghost">
            <svg
              className=" h-6 w-6 text-yellow-600"
              fill="none"
              height="24"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              width="24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
              <path d="M9 18c-4.51 2-5-2-7-2" />
            </svg>
            <span className="sr-only">GitHub</span>
          </Button>
        </Link>
        <Link href="#">
          <Button size="icon" variant="ghost">
            <svg
              className=" h-6 w-6 text-yellow-600"
              fill="none"
              height="24"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              width="24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
              <rect height="12" width="4" x="2" y="9" />
              <circle cx="4" cy="4" r="2" />
            </svg>
            <span className="sr-only">LinkedIn</span>
          </Button>
        </Link>
        <Link href="#">
          <Button size="icon" variant="ghost">
            <svg
              className=" h-6 w-6 text-yellow-600"
              fill="none"
              height="24"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              width="24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect height="20" rx="5" ry="5" width="20" x="2" y="2" />
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
              <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
            </svg>
            <span className="sr-only">Instagram</span>
          </Button>
        </Link>
      </div>
    </div>
  );
}
