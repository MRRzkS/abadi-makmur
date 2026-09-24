"use client";

import { MotionConfig } from "framer-motion";
import type { PropsWithChildren } from "react";

export function MotionPreferences({ children }: PropsWithChildren) {
  return <MotionConfig reducedMotion="user">{children}</MotionConfig>;
}
