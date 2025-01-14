import "./Search.css";

import { useQuery } from "../../hooks/useQuery";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useResetComponentMessage } from "../../hooks/useResetComponentMessage";

import {LikeContainer} from "../../components/LikeContainer/LikeContainer";
import {PhotoItem} from "../../components/PhotoItem/PhotoItem";
import { Link } from "react-router-dom";

import { searchPhotos, like } from "../../slices/photoSlice";
import { useAppDispatch } from "../../hooks/useAppDispatch";

export const Search = () => {
  const query = useQuery();
  const search = query.get("q");

  const dispatch = useAppDispatch();

  const resetMessage = useResetComponentMessage(dispatch);

  const { user } = useSelector((state: any) => state.auth);
  const { photos, loading } = useSelector((state: any) => state.photo);

  useEffect(() => {
    dispatch(searchPhotos(search));
  }, [dispatch, search]);

  const handleLike = (photo: any = null) => {
    dispatch(like(photo._id));

    resetMessage();
  };

  if (loading) {
    return <p>Carregando...</p>;
  }

  return (
    <div id="search">
      <h2>Você está buscando por: {search}</h2>
      {photos &&
        photos.map((photo: any) => (
          <div key={photo._id}>
            <PhotoItem photo={photo} />
            <LikeContainer photo={photo} user={user} handleLike={handleLike} />
            <Link className="btn" to={`/photos/${photo._id}`}>
              Ver mais
            </Link>
          </div>
        ))}
    </div>
  );
};