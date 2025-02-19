"use client"
import { message } from "antd";

// Use this inside a React component
export const useMessageHandler = () => {
  const [messageApi, contextHolder] = message.useMessage();

  const successMessage = (msg: string) => {
    messageApi.open({
      type: "success",
      content: msg,
    });
  };

  const errorMessage = (msg: string) => {
    messageApi.open({
      type: "error",
      content: msg,
    });
  };

  return { successMessage, errorMessage, contextHolder };
};
