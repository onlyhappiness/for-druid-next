"use client";

import { SkeletonCard } from "@/components/ui/skeleton";
import { useAuthGuard } from "@/hooks/useGuard";

const Favorite = () => {
  useAuthGuard();

  return (
    <div className="p-3">
      {[...new Array(5)].map((i) => {
        return <SkeletonCard key={i} className="mb-2" />;
      })}
    </div>
  );
};

export default Favorite;
