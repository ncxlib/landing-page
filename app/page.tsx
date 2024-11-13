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
