import { useState } from "react";
import { useForm } from "react-hook-form";

export default function IndexPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ mode: "onChange" });

  const [submitted, setSubmitted] = useState("");

  const onValid = (data, event) => {
    event.preventDefault();
    console.log(data);
    setSubmitted("thank you");
  };

  return (
    <form onSubmit={handleSubmit(onValid)}>
      <div>
        <label htmlFor="name">Name </label>
        <input
          {...register("name", {
            required: "Please Write down your name",
          })}
          type="text"
          placeholder="name"
        />
        {errors.name?.message}
      </div>
      <div>
        <label htmlFor="email">Email </label>
        <input
          {...register("email", {
            required: "Please Write down your Email",
            validate: {
              onlyNaver: (value) =>
                value.includes("@naver.com") || "only @naver.com",
            },
          })}
          type="text"
          placeholder="only@naver.com"
        />
        {errors.email?.message}
      </div>
      <div>
        <label htmlFor="password">Password </label>
        <input
          {...register("password", {
            required: "Please Write down password",
            minLength: {
              message: "Password has to be more than 10 words",
              value: 10,
            },
          })}
          type="password"
          placeholder="minlength 10 characters"
        />
        {errors.password?.message}
      </div>
      <input type="submit" value="Log in" />
      {submitted}
    </form>
  );
}
