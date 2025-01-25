import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { cn } from "@/lib/utils";

interface ResponsiveDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  title?: string;
  children: React.ReactNode;
  className?: string;
  maxWidth?: "sm" | "md" | "lg" | "xl" | "2xl" | "3xl" | "4xl" | "5xl";
}

const maxWidthClasses = {
  sm: "max-w-sm",
  md: "max-w-md",
  lg: "max-w-lg",
  xl: "max-w-xl",
  "2xl": "max-w-2xl",
  "3xl": "max-w-3xl",
  "4xl": "max-w-4xl",
  "5xl": "max-w-5xl",
};

export const ResponsiveDialog = ({
  open,
  onOpenChange,
  title,
  children,
  className,
  maxWidth = "md"
}: ResponsiveDialogProps) => {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent 
        className={cn(
          "w-[95%] mx-auto",
          maxWidthClasses[maxWidth],
          "p-4 sm:p-6",
          "bg-dashboard-card border-dashboard-cardBorder",
          "max-h-[90vh] overflow-y-auto",
          className
        )}
      >
        {title && (
          <DialogHeader>
            <DialogTitle className="text-xl sm:text-2xl font-semibold text-dashboard-accent1">
              {title}
            </DialogTitle>
          </DialogHeader>
        )}
        {children}
      </DialogContent>
    </Dialog>
  );
};