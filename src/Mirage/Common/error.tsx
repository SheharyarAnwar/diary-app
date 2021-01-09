import { Response } from "miragejs";

export const handleErrors = (error: any, message = "An error ocurred") => {
  return new Response(400, undefined, {
    message,
    isError: true,
  });
};
