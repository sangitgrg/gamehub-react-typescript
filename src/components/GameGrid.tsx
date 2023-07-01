import { SimpleGrid, Text } from "@chakra-ui/react";
import useGames from "../hooks/useGames";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";
import GameCardContanier from "./GameCardContanier";

const GameGrid = () => {
  const { data, error, isLoading } = useGames();
  const skeletons = [1, 2, 3, 4, 5, 6];
  return (
    <>
      {error && <Text>{error}</Text>}
      <SimpleGrid
        columns={{ sm: 1, md: 2, lg: 3, xl: 5 }}
        padding="10px"
        spacing={3}
      >
        {isLoading &&
          skeletons.map((sk) => (
            <GameCardContanier>
              <GameCardSkeleton key={sk}></GameCardSkeleton>
            </GameCardContanier>
          ))}
        {data.map((game) => (
          <GameCardContanier>
            <GameCard key={game.id} game={game} />
          </GameCardContanier>
        ))}
      </SimpleGrid>
    </>
  );
};

export default GameGrid;
