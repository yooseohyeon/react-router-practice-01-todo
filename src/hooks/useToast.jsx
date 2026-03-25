import React, { useState } from "react";

export const useToast = () => {
  const [toast, setToast] = useState({
    message: "",
    type: "success",
    duration: 3000,
    visible: false,
  });

  const showToast = (message, type = "success", duration = 3000) => {
    setToast({
      message,
      type,
      duration,
      visible: true,
    });

    setTimeout(() => {
      setToast((prev) => ({ ...prev, visible: false }));
    }, duration);
  };

  return { toast, showToast };
};
