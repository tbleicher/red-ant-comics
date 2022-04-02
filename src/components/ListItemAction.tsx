import { useDispatch, useSelector } from "react-redux";
import { addToFavourites, removeFromFavourites } from "../globalState/favourites";
import { RootState } from "../globalState/store";
import { ComicsListItem } from "../services/types";

interface ListItemActionProps {
  comic: ComicsListItem;
}

export function ListItemAction({ comic }: ListItemActionProps) {
  const dispatch = useDispatch();
  const isFavourite = useSelector(
    (state: RootState) => !!state.favourites.favourites.find((_comic) => _comic.id === comic.id)
  );

  if (isFavourite) {
    return (
      <button className="button js-add" onClick={() => dispatch(removeFromFavourites(comic.id))}>
        Remove from favourites
      </button>
    );
  }

  return (
    <button className="button js-add" onClick={() => dispatch(addToFavourites(comic))}>
      Add to favourites
    </button>
  );
}
