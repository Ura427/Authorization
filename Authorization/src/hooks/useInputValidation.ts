export function useInputValidation (identifier: string) {
    const handleUsernameValidation = (username:string) =>{
        if(username.trim().length < 3){
            console.log("Invalid username")
        }
    }

    const handleEmailValidation = (email: string) =>{
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        console.log(emailRegex.test(email));
    }


    const handlePasswordValidation = (password:string) =>{
        if(password.trim().length < 8){
            console.log("invalid password")
        }

    }



       // Dynamically select the appropriate validation function based on the identifier
       const validationFunction =
       identifier === "Username"
           ? handleUsernameValidation
           : identifier === "Email"
           ? handleEmailValidation
           : identifier === "Password"
           ? handlePasswordValidation
           : null;

   return {
       validationFunction
   };
}