import FavoritesList from "../components/FavoritesList";
import { Link } from "react-router-dom";

function FavoritesPage() {
  return (
    <div className="container mx-auto">
      <Link to="/" className="text-blue-600 hover:underline p-4 inline-block">
        Back to Search
      </Link>
      <FavoritesList />
    </div>
  );
}

export default FavoritesPage;
