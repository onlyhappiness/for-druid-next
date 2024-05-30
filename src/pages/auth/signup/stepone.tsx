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
import { PATH } from "@/constants/path";
import { zodResolver } from "@hookform/resolvers/zod";
import { isEmpty } from "lodash";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { z } from "zod";

const formSchema = z.object({
  email: z.string().email(),
});

type Form = z.infer<typeof formSchema>;

const StepOne = () => {
  const navigate = useNavigate();

  const form = useForm<Form>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
    },
  });

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = form;

  const onSubmit = async (data) => {
    console.log("data:: ", data);
  };

  return (
    <div className="flex flex-col main-layout-page">
      <Header type="default" back title="회원가입" />

      <section className="flex flex-col h-full pt-7 px-5 flex-grow">
        <Form {...form}>
          <form id="signup-step-one" onSubmit={handleSubmit(onSubmit)}>
            <FormField
              control={control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input placeholder="이메일을 입력해주세요." {...field} />
                  </FormControl>
                </FormItem>
              )}
            />
          </form>

          {!isEmpty(errors) && (
            <FormMessage className="pt-2">
              이메일을 다시 입력해주세요.
            </FormMessage>
          )}
        </Form>
      </section>

      <section className="p-8">
        <Button
          type="submit"
          form="signup-step-one"
          onClick={() => {
            navigate(PATH.AUTH.STEP_TWO);
          }}
        >
          다음
        </Button>
      </section>
    </div>
  );
};

export default StepOne;
