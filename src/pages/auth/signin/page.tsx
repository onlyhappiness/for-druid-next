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
import { SIZE } from "@/constants/number";
import { zodResolver } from "@hookform/resolvers/zod";
import { isEmpty } from "lodash";
import { ChevronLeftIcon } from "lucide-react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { z } from "zod";

const formSchema = z.object({
  email: z.string().email(),
  password: z.string().min(8).max(20),
});

type Form = z.infer<typeof formSchema>;

const Signin = () => {
  const navigate = useNavigate();

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
    <div>
      <Header
        type="DEFAULT"
        leftIcon={
          <ChevronLeftIcon
            size={SIZE.icon}
            onClick={() => {
              navigate(-1);
            }}
          />
        }
        title="로그인"
      />

      <section className="pt-7 px-5">
        <Form {...form}>
          <form
            id="login-form"
            className="flex flex-col gap-2"
            onSubmit={handleSubmit(onSubmit)}
          >
            <FormField
              control={control}
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
              control={control}
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
      </section>
    </div>
  );
};

export default Signin;
