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
      className={cn("py-[clamp(80px,10vh,120px)]", className)}
    >
      {children}
    </TagName>
  );
}
