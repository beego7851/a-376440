import { cn } from "@/lib/utils";

interface ResponsiveFormLayoutProps {
  children: React.ReactNode;
  className?: string;
  columns?: 1 | 2 | 3;
}

export const ResponsiveFormLayout = ({
  children,
  className,
  columns = 1
}: ResponsiveFormLayoutProps) => {
  const gridCols = {
    1: "grid-cols-1",
    2: "grid-cols-1 sm:grid-cols-2",
    3: "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
  };

  return (
    <div className={cn(
      "grid gap-4 sm:gap-6",
      gridCols[columns],
      className
    )}>
      {children}
    </div>
  );
};