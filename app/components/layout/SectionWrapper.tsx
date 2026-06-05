import { cn } from "@/app/lib/utils";

interface SectionWrapperProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
  as?: "section" | "div" | "article";
}

export function SectionWrapper({
  children,
  className,
  id,
  as: Tag = "section",
}: SectionWrapperProps) {
  const TagName = Tag;
  return (
    <TagName
      id={id}
      className={cn("scroll-mt-20 py-16 sm:py-20 lg:py-28", className)}
    >
      {children}
    </TagName>
  );
}
