"use client";
import { Codeblock } from "@/components/Codeblock";
import { Header } from "@/components/Header";
import { Navbar } from "@/components/Navigation/Navbar";
import { installationCode } from "@/public/code-snippets/install";
import { getStartedCode } from "@/public/code-snippets/getStarted";

export default function Home() {
  return (
    <div className="w-screen h-screen mx-auto mt-16 pb-8">
      <div className="mx-auto w-2/3">
        <div className="absolute top-10 right-10 text-xl font-bold">version: 0.2.4</div>

        <Header />
        <Navbar />
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
          title="Quick Start"
          code={getStartedCode}
          language="python"
          linenumbers={true}
        />
      </div>
    </div>
  );
}
