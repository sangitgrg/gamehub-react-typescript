import useData from "./useData";

interface Platform {
  id: number;
  name: string;
  slug: string;
}
const userPlatforms = () => useData<Platform>("/platforms/lists/parents");

export default userPlatforms;
