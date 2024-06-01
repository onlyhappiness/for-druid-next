import usePostSignup from "@/services/queries/auth/usePostSignup";
import { zodResolver } from "@hookform/resolvers/zod";
import { isEmpty } from "lodash";
import { useForm } from "react-hook-form";
import { useLocation } from "react-router-dom";
import { z } from "zod";
import { Button } from "../ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { InputPassword } from "../ui/input";

const formSchema = z
  .object({
    password: z
      .string()
      .min(8, { message: "비밀번호를 8자 이상 입력해주세요." })
      .max(20, { message: "비밀번호를 20자 이하로 입력해주세요." }),
    confirmPassword: z
      .string()
      .min(8, { message: "비밀번호를 8자 이상 입력해주세요." })
      .max(20, { message: "비밀번호를 20자 이하로 입력해주세요." }),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "비밀번호를 다시 확인해주세요.",
    path: ["confirmPassword"],
  });

type Form = z.infer<typeof formSchema>;

const StepTwoForm = () => {
  const location = useLocation();
  const email = location?.state?.email;

  const form = useForm<Form>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      password: "",
      confirmPassword: "",
    },
  });

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = form;

  const { mutate: postSignup } = usePostSignup();

  const onSubmit = async (data) => {
    console.log("email:: ", email);
    console.log("password::", data.password);

    const req = {
      email: email,
      password: data.password,
    };
    // postSignup(req)
  };

  return (
    <Form {...form}>
      <section className="flex flex-col pt-7 px-5 flex-grow">
        <form
          id="steptwo-form"
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col gap-8"
        >
          <FormField
            control={control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel>비밀번호 입력</FormLabel>
                <FormControl>
                  <InputPassword
                    placeholder="비밀번호를 입력해주세요"
                    {...field}
                  />
                </FormControl>
                {/* <FormMessage /> */}
              </FormItem>
            )}
          />

          <FormField
            control={control}
            name="confirmPassword"
            render={({ field }) => (
              <FormItem>
                <FormLabel>비밀번호 확인</FormLabel>
                <FormControl>
                  <InputPassword
                    placeholder="비밀번호를 다시 입력해주세요"
                    {...field}
                  />
                </FormControl>
                {/* <FormMessage /> */}
              </FormItem>
            )}
          />
        </form>
        {!isEmpty(errors) && (
          <FormMessage className="pt-2">
            {errors.confirmPassword.message}
          </FormMessage>
        )}
      </section>

      <section className="p-8">
        <Button type="submit" form="steptwo-form">
          회원가입
        </Button>
      </section>
    </Form>
  );
};

export default StepTwoForm;
