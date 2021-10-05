import React, { useContext } from 'react';
import { AlbumContext } from '../App';
import { BrowserRouter as Router, Link } from 'react-router-dom';

const AlbumContent = () => {
    const { album, dispatch } = useContext(AlbumContext);
    const albumList = (albums) => {
        return albums.map((album) => {
            return (
                <Link to={`/${album.albumName}/${album.albumId}`}>
                    <div className="album-card-section" key={album.albumId}>
                        <img className="album-card-image" src={album.albumImage} alt="Not Found" />
                        <div className="album-card-title"><h5>{album.albumName}</h5></div>
                    </div>
                </Link>
            )
        })
    }

    return (
        <>
            <div className="album-image-container">
                {albumList(album)}
            </div>
        </>
    )
}

export default React.memo(AlbumContent);