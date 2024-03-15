interface useInputValidationProps {
  identifier: string;
  setInvalidData: React.Dispatch<React.SetStateAction<{
    Username: boolean;
    Email: boolean;
    Password: boolean;
    RepeatPassword: boolean;
    BirthDate: boolean;
}>>
  setErrorMessages: React.Dispatch<
    React.SetStateAction<{
      Username: string;
      Email: string;
      Password: string;
      RepeatPassword: string;
      BirthDate: string;
      Gender: string;
    }>
  >;
}

export function useInputValidation({
  identifier,
  setInvalidData,
  setErrorMessages,
}: useInputValidationProps) {



  const handleUsernameValidation = (username: string) => {
    if (username.trim().length < 3) {
      setErrorMessages((prev) => ({
        ...prev,
        Username: "Username should contain more than 3 symbols",
      }));
      setInvalidData((prev) => ({
        ...prev,
        Username: true
      }))
      return;
    }
    setErrorMessages((prev) => ({
      ...prev,
      Username: "",
    }));
    setInvalidData((prev) => ({
        ...prev, 
        Username: false
    }))
  };

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
        Email: true
      }))
      return;
    }
    setErrorMessages((prev) => ({
      ...prev,
      Email: "",
    }));
    setInvalidData((prev) => ({
        ...prev,
        Email: false
    }))
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
        Password: true
      }))
      return;
    }
    setErrorMessages((prev) => ({
      ...prev,
      Password: "",
    }));
    setInvalidData((prev) => ({
        ...prev,
        Password: false
    }))
  };

  const validationFunction =
    identifier === "Username"
      ? handleUsernameValidation
      : identifier === "Email"
      ? handleEmailValidation
      : identifier === "Password"
      ? handlePasswordValidation
      : null;

  return {
    validationFunction,
  };
}
