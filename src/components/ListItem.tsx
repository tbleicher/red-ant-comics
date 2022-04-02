import { ComicsListItem } from "../services/types";
import { ListItemAction } from "./ListItemAction";

interface ListItemProps {
  comic: ComicsListItem;
}

const PLACEHOLDER_IMAGE = "http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available/landscape_small.jpg";

export function ListItem({ comic }: ListItemProps) {
  const { path, extension } = comic.thumbnail;
  const imgSrc = path ? `${path}/landscape_small.${extension}` : PLACEHOLDER_IMAGE;

  return (
    <li className="comic-item">
      <div className="comic-card">
        <img src={imgSrc} />
        <h2>{comic.title || "title unavailable"}</h2>
        <ListItemAction comic={comic} />
      </div>
    </li>
  );
}
