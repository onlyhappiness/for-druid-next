import { PATH } from "@/constants/path";
import usePostLogin from "@/services/queries/auth/usePostLogin";
import { zodResolver } from "@hookform/resolvers/zod";
import { isEmpty } from "lodash";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { z } from "zod";
import { Button } from "../ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "../ui/form";
import { Input } from "../ui/input";

const formSchema = z.object({
  email: z.string().email(),
  password: z.string().min(8).max(20),
});

type Form = z.infer<typeof formSchema>;

const SigninForm = () => {
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

  const { mutate: postLogin, error: loginError, mutateAsync } = usePostLogin();

  const onSubmit = async (data: Form) => {
    mutateAsync(data).then(() => {
      navigate(PATH.HOME);
    });
  };

  return (
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
                <Input placeholder="비밀번호 입력" {...field} type="password" />
              </FormControl>
            </FormItem>
          )}
        />

        {!isEmpty(errors) && (
          <FormMessage>이메일 또는 비밀번호를 다시 확인해주세요.</FormMessage>
        )}

        {loginError && (
          <FormMessage>이메일 또는 비밀번호를 다시 확인해주세요.</FormMessage>
        )}
      </form>

      <Button type="submit" form="login-form" className="mt-4">
        로그인
      </Button>
    </Form>
  );
};

export default SigninForm;
