"use client";

import Login from "@/app/(auth)/login/page";
import useMyInfoQuery from "@/hooks/auth/queries/useMyInfo";
import Link from "next/link";
import { useRouter } from "next/navigation";

const FavoritePage = () => {
  const router = useRouter();
  const { data, error } = useMyInfoQuery();

  if (error) {
    router.push("/login");
  }

  return <div>Favorite</div>;
};

export default FavoritePage;
