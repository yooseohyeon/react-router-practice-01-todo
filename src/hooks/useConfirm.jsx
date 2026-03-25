import React, { useState } from "react";

export const useConfirm = () => {
  const [confirm, setConfirm] = useState({
    message: "",
    visible: false,
    resolve: null,
  });

  const showConfirm = (message) => {
    return new Promise((resolve) => {
      setConfirm({
        message,
        visible: true,
        resolve,
      });
    });
  };

  const handleConfirm = () => {
    confirm.resolve(true);
    setConfirm((prev) => ({ ...prev, visible: false }));
  };

  const handleCancel = () => {
    confirm.resolve(false);
    setConfirm((prev) => ({ ...prev, visible: false }));
  };

  return { confirm, showConfirm, handleConfirm, handleCancel };
};
