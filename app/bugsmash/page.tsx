"use client";
import { Codeblock } from "@/components/Codeblock";
import { bugSmashTemplateCode } from "@/public/code-snippets/bugSmashTemplateCode";

export default function BugSmash() {
  const repoLink = "https://github.com/ncxlib/NeuralNetwork";

  return (
    <div className="w-screen h-screen mt-16">
      <div className="mx-auto w-2/3">
        <div className="mt-4 text-4xl font-black text-green-600 text-center">
          $100 Prize
        </div>

        <div className="text-2xl font-semibold text-left mt-8">Overview</div>
        <div className="mt-4 text-xl">
          We built this neural network library and need your help to test it and
          find bugs. We support tabular data like CSV and image data. You can
          use our documentation linked above. To give motivation for this bug
          smash, we have a cash prize of{" "}
          <span className="text-green-600 font-bold">$100</span> to whoever
          finds the most amount of bugs in our code.
        </div>

        <div className="text-2xl font-semibold text-left mt-8">
          Contest Dates
        </div>
        <div className="mt-4 text-xl">
          11/14/2024 - 11/24/2024 Midnight EST
          <br />
          Winner will be contacted through their github.
        </div>

        <div className="text-2xl font-semibold text-left mt-8">Rules</div>
        <div className="mt-4 text-xl">
          <ol className="list-decimal ml-7">
            <li>Visit our get started page and install our library.</li>
            <li>
              Each bug you find must be reported in a new issue on our github{" "}
              <a className="text-blue-500" target="_blank" href={repoLink}>
                repo.
              </a>
            </li>
            <li>
              Issues should be about legitimate bugs which will be reviewed by
              the founders.
            </li>
            <li>
              If there is already an issue about the bug you find, you cannot
              create another one. First come first serve.
            </li>
            <li className="mb-6">
              Please use the following template for reporting an issue:
            </li>
            <Codeblock
              title={""}
              code={bugSmashTemplateCode}
              language="text"
              linenumbers={false}
            />
          </ol>
        </div>

        <div className="mt-8 pb-12 text-center">
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
    </div>
  );
}
