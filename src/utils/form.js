export const validate = (type, value) => {
  if (type === "email") {
    if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(value)) {
      return "Email address is invalid";
    }
  }

  if ((type === "password") & (value.length < 6)) {
    return "Password is too short";
  }

  return "";
};
