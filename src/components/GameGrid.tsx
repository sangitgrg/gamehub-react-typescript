import { SimpleGrid, Text } from "@chakra-ui/react";
import useGames from "../hooks/useGames";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";
import GameCardContanier from "./GameCardContanier";
import { GameQuery } from "../App";

interface Props {
  gameQuery: GameQuery;
}

const GameGrid = ({ gameQuery }: Props) => {
  const { data, error, isLoading } = useGames(gameQuery);
  const skeletons = [1, 2, 3, 4, 5, 6];
  if (error) return <Text>{error}</Text>;
  return (
    <>
      <SimpleGrid
        columns={{ sm: 1, md: 2, lg: 3, xl: 4 }}
        padding="10px"
        spacing={6}
      >
        {isLoading &&
          skeletons.map((sk) => (
            <GameCardContanier key={sk}>
              <GameCardSkeleton></GameCardSkeleton>
            </GameCardContanier>
          ))}
        {data.map((game) => (
          <GameCardContanier key={game.id}>
            <GameCard game={game} />
          </GameCardContanier>
        ))}
      </SimpleGrid>
    </>
  );
};

export default GameGrid;
