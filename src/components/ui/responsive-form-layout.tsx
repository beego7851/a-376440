import { cn } from "@/lib/utils"

interface ResponsiveFormLayoutProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode
  footer?: React.ReactNode
}

export function ResponsiveFormLayout({
  children,
  footer,
  className,
  ...props
}: ResponsiveFormLayoutProps) {
  return (
    <div className="flex flex-col h-full">
      <div 
        className={cn(
          "flex-1 overflow-y-auto px-4 sm:px-6",
          "space-y-4 py-4",
          className
        )} 
        {...props}
      >
        {children}
      </div>
      {footer && (
        <div className="flex flex-col-reverse sm:flex-row justify-end gap-2 p-4 sm:p-6 border-t">
          {footer}
        </div>
      )}
    </div>
  )
}

export function ResponsiveFormField({
  children,
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        "grid grid-cols-1 sm:grid-cols-4 items-center gap-2 sm:gap-4",
        className
      )}
      {...props}
    >
      {children}
    </div>
  )
}

export function ResponsiveFormLabel({
  children,
  className,
  ...props
}: React.HTMLAttributes<HTMLLabelElement>) {
  return (
    <label
      className={cn(
        "text-sm font-medium text-dashboard-text sm:text-right",
        className
      )}
      {...props}
    >
      {children}
    </label>
  )
}

export function ResponsiveFormInput({
  children,
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        "col-span-1 sm:col-span-3",
        className
      )}
      {...props}
    >
      {children}
    </div>
  )
}