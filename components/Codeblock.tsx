"use client"
import * as React from "react";
import { CopyBlock, dracula } from "react-code-blocks";

export interface ICodeblockProps {
  title: string | null;
  code: string;
  language: string;
  linenumbers: boolean,
  className?: string,
}

export function Codeblock(props: ICodeblockProps) {
  return (
    <div className={`text-xl ${props.className}`}>
      {props.title && (
        <div className="mt-10 mb-4 text-left text-2xl font-semibold">
          {props.title}
        </div>
      )}
      <CopyBlock
        language={props.language}
        text={props.code}
        showLineNumbers={props.linenumbers}
        theme={dracula}
        codeBlock
      />
    </div>
  );
}
