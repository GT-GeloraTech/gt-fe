import { cva, type VariantProps } from "class-variance-authority";
import { Loader2 } from "lucide-react";
import { forwardRef, type ButtonHTMLAttributes } from "react";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        primary: "bg-black text-white hover:bg-black/90 focus-visible:ring-black",
        secondary: "bg-gray-100 text-gray-900 hover:bg-gray-200 focus-visible:ring-gray-300",
        outline:
          "border border-gray-300 bg-transparent text-gray-900 hover:bg-gray-50 focus-visible:ring-gray-300",
        ghost: "bg-transparent hover:bg-gray-100 text-gray-900",
        destructive: "bg-red-600 text-white hover:bg-red-700 focus-visible:ring-red-600",
        link: "underline-offset-4 hover:underline text-black bg-transparent",
      },
      size: {
        sm: "h-8 px-3",
        md: "h-10 px-4",
        lg: "h-12 px-6 text-base",
        icon: "h-10 w-10",
      },
      fullWidth: { true: "w-full" },
    },
    defaultVariants: { variant: "primary", size: "md" },
  },
);

export interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof buttonVariants> {
  isLoading?: boolean;
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, fullWidth, isLoading, disabled, children, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(buttonVariants({ variant, size, fullWidth }), className)}
        disabled={disabled ?? isLoading}
        {...props}
      >
        {isLoading ? <Loader2 className="h-4 w-4 animate-spin" aria-hidden /> : null}
        {children}
      </button>
    );
  },
);
Button.displayName = "Button";

export { buttonVariants };
