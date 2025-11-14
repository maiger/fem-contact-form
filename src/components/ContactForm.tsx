import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, type SubmitHandler } from "react-hook-form";
import { z } from "zod";
import toast from "react-hot-toast";

const schema = z.object({
  firstName: z.string().min(1, { message: "This field is required" }),
  lastName: z.string().min(1, { message: "This field is required" }),
  email: z.email({ message: "Please enter a valid email address" }),
  queryType: z.string({ message: "Please select a query type" }),
  message: z.string().min(1, { message: "This field is required" }),
  consent: z.literal(true, {
    message: "To submit this form, please consent to being contacted",
  }),
});

type FormFields = z.infer<typeof schema>;

// type FormFields = {
//   firstName: string;
//   lastName: string;
//   email: string;
//   queryType: string;
//   message: string;
//   consent: boolean;
// };

function ContactForm() {
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors, isSubmitting },
  } = useForm<FormFields>({
    resolver: zodResolver(schema),
  });

  const onSubmit: SubmitHandler<FormFields> = async (data) => {
    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      // throw new Error();
      console.log(data);
      toast.success(
        <div>
          <div>
            <h3>Message sent!</h3>
          </div>
          <p className="toast-message">
            Thanks for completing the form. We'll be in touch soon!
          </p>
        </div>
      );
    } catch (error) {
      // Backend error
      console.log(error);
      setError("root", {
        message: "Submission failed. Please try again.",
      });
    }
  };

  return (
    <form
      className="w-140 bg-neutral-white m-10 p-6 rounded-md"
      onSubmit={handleSubmit(onSubmit)}
    >
      <h2 className="mb-6">Contact Us</h2>
      <div className="flex flex-col sm:flex-row justify-between gap-3 mb-4">
        <div className="flex flex-col w-full">
          <label>
            First Name <span className="required">*</span>
          </label>
          <input
            className={errors.firstName ? "input-error" : ""}
            {...register("firstName")}
            type="text"
          />
          {errors.firstName && (
            <p className="error">{errors.firstName.message}</p>
          )}
        </div>
        <div className="flex flex-col w-full">
          <label>
            Last Name <span className="required">*</span>
          </label>
          <input
            className={errors.lastName ? "input-error" : ""}
            {...register("lastName")}
            type="text"
          />
          {errors.lastName && (
            <p className="error">{errors.lastName.message}</p>
          )}
        </div>
      </div>

      <div className="flex flex-col mb-4">
        <label>
          Email Address <span className="required">*</span>
        </label>
        <input
          className={errors.email ? "input-error" : ""}
          {...register("email")}
          type="email"
        />
        {errors.email && <p className="error">{errors.email.message}</p>}
      </div>

      <div className="flex flex-col mb-4">
        <p className="mb-2">
          Query Type <span className="required">*</span>
        </p>
        <div className="flex flex-col sm:flex-row justify-between gap-3">
          <div className="query-type-box flex w-full p-2 ">
            <input
              {...register("queryType")}
              id="general"
              value={"general"}
              type="radio"
              name="queryType"
            />
            <label className="ml-2" htmlFor="general">
              General Enquiry
            </label>
          </div>
          <div className="query-type-box flex w-full p-2">
            <input
              {...register("queryType")}
              id="support"
              value={"support"}
              type="radio"
              name="queryType"
            />
            <label className="ml-2" htmlFor="support">
              Support Request
            </label>
          </div>
        </div>
        {errors.queryType && (
          <p className="error">{errors.queryType.message}</p>
        )}
      </div>

      <div className="flex flex-col mb-4">
        <label>
          Message <span className="required">*</span>
        </label>
        <textarea
          className={errors.message ? "input-error" : ""}
          {...register("message")}
          rows={2}
        />
        {errors.message && <p className="error">{errors.message.message}</p>}
      </div>

      <div className="flex flex-col mb-4">
        <div>
          <input
            className="cursor-pointer"
            id="consent"
            {...register("consent")}
            type="checkbox"
          />
          <label htmlFor="consent" className="ml-4 cursor-pointer">
            I consent to being contacted by the team{" "}
            <span className="required">*</span>
          </label>
        </div>
        {errors.consent && <p className="error">{errors.consent.message}</p>}
      </div>

      <button disabled={isSubmitting} type="submit">
        {isSubmitting ? "Sending..." : "Submit"}
      </button>

      <div className="text-sm text-gray-400">
        Challenge by{" "}
        <a href="https://www.frontendmentor.io?ref=challenge">
          Frontend Mentor
        </a>
        . Coded by <a href="www.github.com/maiger">Maiger</a>.
      </div>
    </form>
  );
}

export default ContactForm;
