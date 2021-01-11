import { Response, Request } from "miragejs";
import { handleErrors } from "./../Common/error";
import { v4 } from "uuid";
import { User } from "../Interfaces/User.interface";

interface AuthenticationResponse {
  token: string;
  user: User;
}

const login = (
  schema: any,
  req: Request
): Response | AuthenticationResponse => {
  const { username, password } = JSON.parse(req.requestBody);
  const user = schema.users.findBy({ username });
  if (!user) {
    return handleErrors(null, "No such user exists");
  }
  if (user.password !== password) {
    return handleErrors(null, "Invalid password");
  }
  return {
    token: v4(),
    user: { ...user.attrs, password: undefined },
  };
};
const signup = (
  schema: any,
  req: Request
): Response | AuthenticationResponse => {
  const { username, password } = JSON.parse(req.requestBody);
  const user = schema.users.findBy({ username });
  if (user) {
    return handleErrors(null, "User Already Exists");
  }
  const newUser = schema.users.create({ username, password });
  return {
    token: v4(),
    user: { ...newUser.attrs, password: undefined },
  };
};

export { login, signup };
