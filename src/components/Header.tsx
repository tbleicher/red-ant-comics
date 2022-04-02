import { useDispatch } from "react-redux";
import { openFavourites } from "../globalState/uiState";

export function Header() {
  const dispatch = useDispatch();

  return (
    <header className="site-header">
      <h1 className="site-heading">Red Ant Comics</h1>
      <button className="favourites-toggle js-favourites-toggle" onClick={() => dispatch(openFavourites())} />
    </header>
  );
}
