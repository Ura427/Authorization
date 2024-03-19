interface useLoginInputValidationProps {
  identifier: string;
  setInvalidData: React.Dispatch<
    React.SetStateAction<{
      Email: boolean;
      Password: boolean;
    }>
  >;
  setErrorMessages: React.Dispatch<
    React.SetStateAction<{
      Email: string;
      Password: string;
    }>
  >;
}

export function useLoginInputValidation({
  identifier,
  setInvalidData,
  setErrorMessages,
}: useLoginInputValidationProps) {
 
  const handleEmailValidation = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const validEmail = emailRegex.test(email);
    if (!validEmail) {
      setErrorMessages((prev) => ({
        ...prev,
        Email: "Invalid email",
      }));
      setInvalidData((prev) => ({
        ...prev,
        Email: true,
      }));
      return;
    }
    setErrorMessages((prev) => ({
      ...prev,
      Email: "",
    }));
    setInvalidData((prev) => ({
      ...prev,
      Email: false,
    }));
  };

  const handlePasswordValidation = (password: string) => {
    if (password.trim().length < 8) {
      console.log("invalid password");
      setErrorMessages((prev) => ({
        ...prev,
        Password: "Password should contain more than 8 symbols",
      }));
      setInvalidData((prev) => ({
        ...prev,
        Password: true,
      }));
      return;
    }
    setErrorMessages((prev) => ({
      ...prev,
      Password: "",
    }));
    setInvalidData((prev) => ({
      ...prev,
      Password: false,
    }));
  };

  const validationFunction =
    identifier === "Email"
      ? handleEmailValidation
      : identifier === "Password"
      ? handlePasswordValidation
      : null;

  return {
    validationFunction,
  };
}
