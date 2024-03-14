import Link from "next/link";
import { ArrowLeftIcon } from "./icons";

export function BackToMainPageLink() {
  return (
    <Link
      href="#"
      className="flex items-center gap-2 text-xs text-teal-600 leading-tight"
    >
      <ArrowLeftIcon />
      Main Page
    </Link>
  );
}
