"use client";

import dynamic from "next/dynamic";
import { useMemo } from "react";

// import "react-quill/dist/q÷uill.bubble.css";

interface PreviewProps {
  value: string;
}

export const Preview = ({ value }: PreviewProps) => {
  // const ReactQuill = useMemo(() => dynamic(() => import("react-quill"), { ssr: false }), []);

  return <div>{value}</div>;
};
