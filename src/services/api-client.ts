import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "9b1ceae785274802b3fba2c950190e63",
  },
});
