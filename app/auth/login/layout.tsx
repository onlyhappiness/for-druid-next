"use client";

import Container from "@/components/Container";
import { Card } from "@/components/ui/card";

const SignUpLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Container className="w-full h-screen">{children}</Container>
    </>
  );
};

export default SignUpLayout;
