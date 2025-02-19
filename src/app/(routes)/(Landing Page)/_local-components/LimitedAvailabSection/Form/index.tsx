"use client";
import { Button, Typography } from "antd";
import React from "react";
import { useForm } from "react-hook-form";
import axios, { AxiosError } from "axios";
import { useMessageHandler } from "@/app/_global components/AntdMessage";

const { Text } = Typography;
type Inputs = {
  firstName: string;
  lastName: string;
  email: string;
  telegram: string;
};
function Form() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<Inputs>();
  const { errorMessage, successMessage, contextHolder } = useMessageHandler();
  const onSubmit = async (data: Inputs) => {
    try {
      await axios.post(
        "https://dummy-api.eagleairesearch.com/submit", // Ensure correct endpoint
        JSON.stringify(data),
        {
          headers: { "Content-Type": "application/json" },
        }
      );
      successMessage("Form submitted successfully!");
    } catch (error) {
      // Proper error handling
      if (error instanceof AxiosError) {
        errorMessage(error.message || "Something went wrong.");
      } else {
        errorMessage("An unexpected error occurred.");
      }
    } finally {
      reset(); // Ensure reset runs in all cases
    }
  };
  return (
    <div>
      {contextHolder}
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-5">
        <div className="w-full flex flex-col gap-2">
          <input
            type="text"
            placeholder="First Name"
            className="w-[100%] h-[40px] md:h-[66px] p-4 rounded-full bg-cardBg"
            {...register("firstName", {
              required: "Please enter your first name",
            })}
          />
          {errors.firstName?.message && (
            <Text type="danger">{errors.firstName.message}</Text>
          )}
        </div>
        <div className="w-full flex flex-col gap-2">
          <input
            type="text"
            placeholder="Last Name"
            className="w-[100%] h-[40px] md:h-[66px] p-4 rounded-full bg-cardBg"
            {...register("lastName", {
              required: "Please enter your last name",
            })}
          />
          {errors.lastName?.message && (
            <Text type="danger">{errors.lastName.message}</Text>
          )}
        </div>
        <div className="w-full flex flex-col gap-2">
          <input
            type="email"
            placeholder="Email"
            className="w-[100%] h-[40px] md:h-[66px] p-4 rounded-full bg-cardBg"
            {...register("email", { required: "Please enter your email" })}
          />
          {errors.email?.message && (
            <Text type="danger">{errors.email.message}</Text>
          )}
        </div>
        <div className="w-full flex flex-col gap-2">
          <input
            type="text"
            placeholder="Telegram UserName"
            className="w-[100%] h-[40px] md:h-[66px] p-4 rounded-full bg-cardBg"
            {...register("telegram", {
              required: "Please enter your telegram user name",
            })}
          />
          {errors.telegram?.message && (
            <Text type="danger">{errors.telegram.message}</Text>
          )}
        </div>
        <Button
          htmlType="submit"
          loading={isSubmitting}
          className="self-end rounded-full text-[16px] border-0 font-[400] leading-[21px] text-white focus:!text-white hover:!text-white w-[257px] h-[45px] bg-gradient-to-br from-[#1870F6] to-[#32FEFE] focus:!bg-[#1870F6] hover:!bg-[#1870F6]"
        >
          Register your interest now
        </Button>
      </form>
    </div>
  );
}

export default Form;
