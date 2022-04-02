import { useDispatch } from "react-redux";
import { removeFromFavourites } from "../globalState/favourites";
import { ComicsListItem } from "../services/types";

interface FavouritesItemProps {
  comic: ComicsListItem;
}

export function FavouritesItem({ comic }: FavouritesItemProps) {
  const dispatch = useDispatch();

  return (
    <li>
      {comic.title}
      <button className="remove js-remove" onClick={() => dispatch(removeFromFavourites(comic.id))}></button>
    </li>
  );
}
