
export const CreateError=(status, message)=>{
   const err = new Error();
   err.status= status;
   err.message= message;

   return(
    {
    status: err.status,
    message: err.message,
    stack: err.stack
    }
   )
}