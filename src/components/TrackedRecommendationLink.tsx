"use client";

import { sendGAEvent } from "@next/third-parties/google";
import Link from "next/link";
import type { CSSProperties, ReactNode } from "react";

type TrackedRecommendationLinkProps = {
  href: string;
  sourcePath: string;
  sourceTitle: string;
  destinationTitle: string;
  className?: string;
  style?: CSSProperties;
  children: ReactNode;
};

export default function TrackedRecommendationLink({
  href,
  sourcePath,
  sourceTitle,
  destinationTitle,
  className,
  style,
  children,
}: TrackedRecommendationLinkProps) {
  return (
    <Link
      href={href}
      className={className}
      style={style}
      onClick={() =>
        sendGAEvent("event", "select_content", {
          content_type: "recommendation",
          content_id: href,
          source_path: sourcePath,
          source_title: sourceTitle,
          destination_path: href,
          destination_title: destinationTitle,
          placement: "daha_fazlasi",
        })
      }
    >
      {children}
    </Link>
  );
}
