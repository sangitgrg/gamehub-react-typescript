import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";
import userPlatforms from "../hooks/usePlatforms";
import { Platform } from "../hooks/useGames";

interface Props {
  selectedPlatform: Platform | null;
  onPlatformSelected: (platform: Platform) => void;
}

const PlatformSelector = ({ selectedPlatform, onPlatformSelected }: Props) => {
  const { data, error } = userPlatforms();
  if (error) return null;
  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        {selectedPlatform?.name || "Platform"}
      </MenuButton>
      <MenuList>
        {data.map((platform) => (
          <MenuItem
            key={platform.id}
            onClick={() => onPlatformSelected(platform)}
          >
            {platform.name}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default PlatformSelector;
