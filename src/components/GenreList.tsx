import useGenres from "../hooks/useGenre";

const GenreList = () => {
  const { data } = useGenres();
  return (
    <ul>
      {data.map((g) => (
        <li key={g.id}>{g.name}</li>
      ))}
    </ul>
  );
};

export default GenreList;
