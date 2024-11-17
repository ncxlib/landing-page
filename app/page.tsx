"use client";
import { Codeblock } from "@/components/Codeblock";
import { installationCode } from "@/public/code-snippets/install";
import { getStartedCode } from "@/public/code-snippets/getStarted";

export default function Home() {
  return (
    <div className="w-full h-full mx-auto mt-16 pb-8">
      <div className="">
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

      <div className="text-center p-8 text-2xl font-medium">
        Please ⭐ our repo to support our work!
      </div>
    </div>
  );
}
