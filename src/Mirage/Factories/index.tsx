import { Factory } from "miragejs";

const title = "Hello";
const data = "Hello From the other side";
export const Factories = {
  user: Factory.extend({
    username: "test",
    password: "123456",

    // diary: [],
  }),
  entry: Factory.extend({
    title: title,
    data: data,
  }),
  diary: Factory.extend({
    // entry: [],
  }),
};
