import { belongsTo, hasMany, Model } from "miragejs";

export const Models = {
  entry: Model.extend({
    diary: belongsTo(),
  }),
  diary: Model.extend({
    entry: hasMany(),
    user: belongsTo(),
  }),
  user: Model.extend({
    diary: hasMany(),
  }),
};
