import { toast } from "react-toastify";

export const notify = (text, type) => {
  if (type === "success") {
    toast.success(text,{
        position: "top-right",
        theme: "light",
      }
    );
  } else if(type === "info" ){
    toast.info(text, {
      position: "top-right",
      theme: "light",
    });
  } else if (type === "error") {
    toast.error(text, {
      position: "top-right",
      theme: "light"
    })
  }
};