"use client";
import * as React from "react";
import Link from "next/link";

export function Header({ title }: { title: string }) {
  return (
    <div className="text-8xl text-center font-medium font-[family-name:var(--font-chillax)]">
      <Link href="/" passHref>
        <span>{title}</span>
      </Link>
    </div>
  );
}
