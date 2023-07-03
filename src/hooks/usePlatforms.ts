import Platforms from "../data/platformlists";

interface Platform {
  id: number;
  name: string;
  slug: string;
}
const userPlatforms = () => ({
  data: Platforms,
  isLoading: false,
  error: null,
});

export default userPlatforms;
