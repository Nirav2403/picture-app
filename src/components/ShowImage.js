import React, { useContext } from 'react'
import { AlbumContext } from '../App';

const ShowImage = (props) => {
    const { album, dispatch } = useContext(AlbumContext);
    
    console.log(props);
    const photos = album.find((item)=>item.albumId===props.match.params.albumId)
    console.log(photos);
    const index = props.match.params.index
    return (
        <>
            <div className="image-show-container">
                <img className="image-show-card" src={photos.images[index]} alt="Not Found" />
            </div>
        </>
    )
}

export default ShowImage;