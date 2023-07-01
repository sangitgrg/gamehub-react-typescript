import axios from "axios";
export default axios.create({
  baseURL: "https://api.rawg.io/api/",
  params: {
    key: "483fb68d876f4ddebdeb8a8a608e89be",
  },
});
