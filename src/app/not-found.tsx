import Link from "next/link";
import React from "react";

export default function NotFound() {
  return (
    <div>
      <h2>Not Found</h2>
      <p>Could not find requested resources</p>
      <Link href="/" />
    </div>
  );
}
