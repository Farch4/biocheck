import "./PhotoItem.css";

import { uploads } from "../../utils/config";

import { Link } from "react-router-dom";

export const PhotoItem = (
    {photo}:{photo:{image: any, title: string, userName: string, userId: string}}) => {
  return (
    <div className="photo-item">
      {photo.image && (
        <img src={`${uploads}/photos/${photo.image}`} alt={photo.title} />
      )}
      <h2>{photo.title}</h2>
      <p className="photo-author">
        Publicada por:{" "}
        <Link to={`/users/${photo.userId}`}>{photo.userName}</Link>
      </p>
    </div>
  );
};