"use client";

import useMyInfoQuery from "@/hooks/auth/queries/useMyInfo";
import { redirect, useRouter } from "next/navigation";

function Page() {
  const token = sessionStorage.getItem("token");

  const { data, error } = useMyInfoQuery();

  if (!token) redirect("/login");

  if (data) {
    redirect("/home");
  } else {
    redirect("/login");
  }
}

export default Page;
