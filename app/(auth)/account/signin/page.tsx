"use client";

import Header from "@/components/Header";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { size } from "@/constants";
import { zodResolver } from "@hookform/resolvers/zod";
import { isEmpty } from "lodash";
import { ChevronLeftIcon } from "lucide-react";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { z } from "zod";

const formSchema = z.object({
  email: z.string().email().min(5),
  password: z.string().min(8).max(20),
});

type Form = z.infer<typeof formSchema>;

const Signin = () => {
  // const supabase = createClient();

  const { back } = useRouter();

  const form = useForm<Form>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const {
    control,
    handleSubmit,
    formState: { isSubmitting, errors },
  } = form;

  const onSubmit = async (data: Form) => {
    console.log("data: ", data);
  };

  return (
    <div className="">
      <Header
        leftIcon={<ChevronLeftIcon size={size.ICON} onClick={back} />}
        title="로그인"
      />

      <main className="px-5 pt-7">
        <Form {...form}>
          <form
            id="login-form"
            className="flex flex-col gap-2"
            onSubmit={handleSubmit(onSubmit)}
          >
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input placeholder="이메일 입력" {...field} />
                  </FormControl>
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input
                      placeholder="비밀번호 입력"
                      {...field}
                      type="password"
                    />
                  </FormControl>
                </FormItem>
              )}
            />

            {!isEmpty(errors) && (
              <FormMessage>
                이메일 또는 비밀번호를 다시 확인해주세요.
              </FormMessage>
            )}
          </form>

          <Button type="submit" form="login-form" className="mt-4">
            로그인
          </Button>
        </Form>

        <div className="border-y border-gray-100 my-4 py-4">
          <Button variant={"outline"}>회원가입</Button>
        </div>

        <div className="flex justify-center ">
          <span className="text-sm">SNS 계정으로 시작하기</span>
        </div>
      </main>
    </div>
  );
};

export default Signin;
