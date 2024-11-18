"use client";
import { Codeblock } from "@/components/Codeblock";
import { installationCode } from "@/public/code-snippets/install";
import { getStartedCode } from "@/public/code-snippets/getStarted";

export default function Home() {
  return (
    <div className="w-screen h-screen">
      <div className="mx-auto w-2/3">
        <div className="mt-16 text-center text-lg">
          A high-performance and lightweight neural network library for Python.
        </div>
        <Codeblock
          title="Installation"
          code={installationCode}
          language="shell"
          linenumbers={false}
        />
        <Codeblock
          className="md:block hidden"
          title="Quick Start"
          code={getStartedCode}
          language="python"
          linenumbers={true}
        />
        <div className="block md:hidden mt-8 text-center">
          <ul className="list-none space-y-2">
            <li className="flex items-center">
              <span className="text-green-500 mr-2">✔️</span> Lightweight and
              Fast
            </li>
            <li className="flex items-center">
              <span className="text-green-500 mr-2">✔️</span> Easy to Use
            </li>
            <li className="flex items-center">
              <span className="text-green-500 mr-2">✔️</span> Open Source
            </li>
          </ul>
        </div>

          <div className="block md:hidden mt-12 text-center">
            <a
              href="https://github.com/ncxlib"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-black text-white px-5 py-3 rounded"
            >
              Get Started
            </a>
          </div>
          <div className="block md:hidden mt-8 text-center">
            <a
              href="https://github.com/ncxlib"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-black border-2 border-black px-5 py-2 rounded"
            >
              Bugsmash
            </a>
          </div>
        </div>
      <div className=" mt-8 text-center">
        <a
          href="https://github.com/your-repo"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center space-x-2 hover:underline"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="black"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 20.5l-7.76-4.5v-9l7.76-4.5 7.76 4.5v9l-7.76 4.5z"
            />
          </svg>
          <span>Star us on GitHub!</span>
        </a>
      </div>
    </div>
  );
}
