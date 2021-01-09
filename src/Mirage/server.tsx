import { createServer } from "miragejs";
import { Models } from "./Models/index";
import { Factories } from "./Factories/index";
import { login, signup } from "./Controllers/users";
interface ServerConfig {
  environment: "development" | "test";
}
export const makeServer = (config: ServerConfig) => {
  const server = createServer({
    environment: config.environment,
    timing: 20,
    namespace: "api",
    models: Models,
    factories: Factories,
    seeds(server) {
      const entry = server.createList("entry", 4);
      const diary = server.create("diary", { entry: entry });
      const user = server.create("user", { diary: [diary] });
    },

    routes() {
      this.post("/login", login);
      this.post("/signup", signup);

      this.get("/diary"); //get All
      this.get("/entry");
      this.get("/user");
      this.get("/diary/:id"); //gets One
    },
  });

  return server;
};
