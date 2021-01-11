import { createServer } from "miragejs";
import { Models } from "./Models/index";
import { Factories } from "./Factories/index";
import { login, signup } from "./Controllers/users";
import { create } from "domain";
import {
  getEntries,
  getDiaries,
  addEntry,
  updateEntry,
  updateDiary,
  deleteDiary,
  deleteEntry,
} from "./Controllers/diary";
interface ServerConfig {
  environment: "development" | "test";
}
export const makeServer = (config: ServerConfig) => {
  const server = createServer({
    environment: config.environment,

    models: Models,
    factories: Factories,
    seeds(server) {
      const entry = server.createList("entry", 4);
      const diary = server.create("diary", { entry: entry });
      server.create("user", { diary: [diary] });
    },

    routes() {
      this.urlPrefix = "https://api.diaries.com";
      this.post("/login", login);
      this.post("/signup", signup);

      this.get("/diaries/entries/:id", getEntries);
      this.get("/diaries/:id", getDiaries);

      this.post("/diaries/", create);
      this.post("/diaries/entry/:id", addEntry);

      this.put("/diaries/entry/:id", updateEntry);
      this.put("/diaries/:id", updateDiary);

      this.del("/diaries/entry/:id", deleteEntry);
      this.del("/diaries/:id", deleteDiary);
    },
  });

  return server;
};
