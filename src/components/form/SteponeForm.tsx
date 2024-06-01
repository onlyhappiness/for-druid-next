import { PATH } from "@/constants/path";
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
  FormLabel,
  FormMessage,
} from "../ui/form";
import { Input } from "../ui/input";

const formSchema = z.object({
  email: z.string().email(),
});

type Form = z.infer<typeof formSchema>;

const SteponeForm = () => {
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
    navigate(PATH.AUTH.STEP_TWO, { state: { email: data.email } });
  };

  return (
    <Form {...form}>
      <section className="flex flex-col h-full pt-7 px-5 flex-grow">
        <form id="stepone-form" onSubmit={handleSubmit(onSubmit)}>
          <FormField
            control={control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>이메일 입력</FormLabel>
                <FormControl>
                  <Input placeholder="이메일을 입력해주세요." {...field} />
                </FormControl>
              </FormItem>
            )}
          />

          {!isEmpty(errors) && (
            <FormMessage>이메일을 다시 입력해주세요.</FormMessage>
          )}
        </form>
      </section>

      <section className="p-8">
        <Button type="submit" form="stepone-form">
          다음
        </Button>
      </section>
    </Form>
  );
};

export default SteponeForm;
