"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import useLoginMutation from "@/hooks/auth/mutations/useLoginMutation";

import { useState } from "react";
import LoginErrorModal from "./LoginErrorModal";

interface UserAuthFormProps extends React.HTMLAttributes<HTMLDivElement> {}

const SignUpPage = ({ className, ...props }: UserAuthFormProps) => {
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");

  const [modalOpen, setModalOpen] = useState(false);

  const { mutate: loginMutate } = useLoginMutation();

  const onSubmit = async () => {
    const body = {
      phone,
      password,
    };

    console.log("body:: ", body);

    loginMutate(body);
    // setModalOpen(true);
  };

  return (
    <>
      <Card className="w-[500px]">
        <CardHeader className="space-y-1">
          <CardTitle className="text-2xl">Create an account</CardTitle>
          <CardDescription>
            Enter your email below to create your account
          </CardDescription>
        </CardHeader>

        <CardContent className="grid gap-4">
          {/* <div className="grid grid-cols-2 gap-6">
              <Button variant="outline">Github</Button>
              <Button variant="outline">Google</Button>
            </div>

            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <span className="w-full border-t" />
              </div>
              <div className="relative flex justify-center text-xs uppercase">
                <span className="bg-background px-2 text-muted-foreground">
                  Or continue with
                </span>
              </div>
            </div> */}

          <div className="grid gap-2">
            <Label htmlFor="phone">Phone</Label>
            <Input
              id="phone"
              type="text"
              placeholder="Your Phone"
              value={phone}
              onChange={(e) => {
                setPhone(e.target.value);
              }}
            />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="password">Password</Label>
            <Input
              id="password"
              type="password"
              placeholder="Your Password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
          </div>
        </CardContent>

        <CardFooter>
          <Button className="w-full mt-3" onClick={onSubmit}>
            Create account
          </Button>
        </CardFooter>
      </Card>

      <LoginErrorModal modalOpen={modalOpen} setModalOpen={setModalOpen} />
    </>
  );
};

export default SignUpPage;
