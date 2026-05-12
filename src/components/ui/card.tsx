import { cn } from "@/lib/cn";

interface CardProps {
  children: React.ReactNode;
  className?: string;
}

export function Card({ children, className }: CardProps) {
  return (
    <div
      className={cn(
        `rounded-[28px] border border-[#d4b06a]/10 bg-[#3a173f]/60 backdrop-blur-sm`,
        className,
      )}
    >
      {children}
    </div>
  );
}
