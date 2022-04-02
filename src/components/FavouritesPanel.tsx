import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../globalState/store";
import { closeFavourites } from "../globalState/uiState";

import { FavouritesItem } from "./FavouritesItem";

export function FavouritesPanel() {
  const dispatch = useDispatch();
  const open = useSelector((state: RootState) => state.uiState.favouritesPanelOpen);
  const favourites = useSelector((state: RootState) => state.favourites.favourites);

  const panelClass = open ? "favourites-panel open" : "favourites-panel";
  const title = favourites.length ? `Favourites (${favourites.length})` : "Favourites";

  return (
    <div id="favourites-panel" className={panelClass}>
      <div className="favourites-header">
        <h2>{title}</h2>
        <button className="close js-close" onClick={() => dispatch(closeFavourites())} />
      </div>

      <div className="favourites-content">
        <ul className="favourites-list">
          {favourites.map((comic) => (
            <FavouritesItem key={comic.id} comic={comic} />
          ))}
        </ul>
      </div>
    </div>
  );
}
