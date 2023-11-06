"use client";

import Container from "@/components/Container";

const SignUpLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Container className="w-full h-screen">{children}</Container>
    </>
  );
};

export default SignUpLayout;
