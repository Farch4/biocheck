import "./Home.css";

import {LikeContainer} from "../../components/LikeContainer/LikeContainer";
import {PhotoItem} from "../../components/PhotoItem/PhotoItem";
import { Link } from "react-router-dom";

import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useResetComponentMessage } from "../../hooks/useResetComponentMessage";

import { getPhotos, like } from "../../slices/photoSlice";
import { useAppDispatch } from "../../hooks/useAppDispatch";

export const Home = () => {
  const dispatch = useAppDispatch();

  const resetMessage = useResetComponentMessage(dispatch);

  const { user } = useSelector((state: any) => state.auth);
  const { photos, loading } = useSelector((state: any) => state.photo);

  useEffect(() => {
    dispatch(getPhotos());
  }, [dispatch]);

  const handleLike = (photo: any = null) => {
    dispatch(like(photo._id));

    resetMessage();
  };

  if (loading) {
    return <p>Carregando...</p>;
  }

  return (
    <div id="home">
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
      {photos && photos.length === 0 && (
        <h2 className="no-photos">
          Ainda não há espécies publicadas,{" "}
          <Link to={`/users/${user._id}`}>clique aqui</Link> para começar.
        </h2>
      )}
    </div>
  );
};