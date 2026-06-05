import { cn } from "@/app/lib/utils";

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
}

export function Container({ children, className }: ContainerProps) {
  return (
    <div
      className={cn(
        "mx-auto w-full max-w-[1280px] px-4 sm:px-6 lg:px-8 xl:px-10",
        className
      )}
    >
      {children}
    </div>
  );
}
