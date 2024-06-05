import { cn } from "@/lib/utils";

function Skeleton({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn("animate-pulse rounded-md bg-muted", className)}
      {...props}
    />
  );
}

function SkeletonCard({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <section className={cn("flex flex-col space-y-3", className)} {...props}>
      <Skeleton className="h-[125px] rounded-xl" />
      <div className="space-y-2">
        <Skeleton className="h-4 " />
        <Skeleton className="h-4 " />
      </div>
    </section>
  );
}

function SkeletonScroll({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div className="flex space-x-4 overflow-x-scroll no-scrollbar">
      {[...new Array(3)].map((c, i) => (
        <div key={i} className="">
          <SkeletonCard />
        </div>
      ))}
    </div>
  );
}

export { Skeleton, SkeletonCard, SkeletonScroll };
