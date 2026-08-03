"use client";

import { sendGAEvent } from "@next/third-parties/google";
import Link from "next/link";
import type { CSSProperties, ReactNode } from "react";

type TrackedAuthorLinkProps = {
  href: string;
  sourcePath: string;
  sourceTitle: string;
  authorName: string;
  className?: string;
  style?: CSSProperties;
  children: ReactNode;
};

export default function TrackedAuthorLink({
  href,
  sourcePath,
  sourceTitle,
  authorName,
  className,
  style,
  children,
}: TrackedAuthorLinkProps) {
  return (
    <Link
      href={href}
      className={className}
      style={style}
      onClick={() =>
        sendGAEvent("event", "author_click", {
          source_path: sourcePath,
          source_title: sourceTitle,
          destination_path: href,
          author_name: authorName,
          placement: "content_byline",
        })
      }
    >
      {children}
    </Link>
  );
}
