interface PageContainerProps {
  children: React.ReactNode;
  className?: string;
}

export function PageContainer({ children, className = "" }: PageContainerProps) {
  return (
    <div
      className={`mx-auto w-full max-w-page px-5 md:px-10 lg:px-16 ${className}`}
    >
      {children}
    </div>
  );
}
