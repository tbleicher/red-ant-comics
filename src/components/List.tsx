import { useListComicsQuery } from "../services/comicsApi";
import { ListItem } from "./ListItem";
import { LoadingPanel } from "./LoadingPanel";

export function List() {
  const { data, error, isLoading } = useListComicsQuery({});

  if (error) {
    return <div>Could not load comics list.</div>;
  }

  const comics = data?.data?.results || [];

  return (
    <>
      <ul id="comics-list" className="comics-list">
        {comics.map((comic) => (
          <ListItem key={comic.id} comic={comic} />
        ))}
      </ul>
      <LoadingPanel isLoading={isLoading} />
    </>
  );
}
