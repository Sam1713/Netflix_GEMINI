export const checkValidData=(name,email,password)=>{
       const isNameValid=/(^[a-zA-Z][a-zA-Z\s]{0,20}[a-zA-Z]$)/.test(name)
       const isEmailValid=/^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/.test(email)
       const isPasswordVaild=/^((?=\S*?[A-Z])(?=\S*?[a-z])(?=\S*?[0-9]).{6,})\S$/.test(password)
       
       if(!isNameValid) return "Username is not valid"
       if(!isEmailValid) return "Email Id is not Valid"
       if(!isPasswordVaild) return "Password is not Valid"

       return null;
}