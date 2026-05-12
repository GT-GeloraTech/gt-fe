import { cn } from "@/lib/cn";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

export function Button({ children, className, ...props }: ButtonProps) {
  return (
    <button
      className={cn(
        `inline-flex cursor-pointer items-center justify-center whitespace-nowrap transition-all duration-300`,
        className,
      )}
      {...props}
    >
      {children}
    </button>
  );
}
