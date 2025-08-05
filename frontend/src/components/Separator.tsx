import clsx from "clsx";

export default function Separator({ className }: { className?: string }) {
  return <div className={clsx("w-full bg-[#1D293D] h-[2px]", className)} />;
}
