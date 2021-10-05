import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AlbumContext } from '../App';
import gallaryBackground from '../icons/LW001.jpg'

const ShowAlbum = (props) => {
    const { album, dispatch } = useContext(AlbumContext);
    if(album.length===0){
        props.history.push("/");
    }
    const id = props.match.params.albumId
    const abm = album.find((item) => item.albumId === props.match.params.albumId)
    console.log("abm", abm);
    const handleImage = (e) => {
        const imageFile = Array.from(e.target.files).map((image) => URL.createObjectURL(image));
        console.log("++++++++++++++++++++++", imageFile);
        dispatch({ type: "CREATE_IMAGE", payload: { id: props.match.params.albumId, image: imageFile } });
    }
    const updateImage = (abm) => {
        return abm.images.map((image,index) => {
            return (
                <Link to={`/${abm.albumName}/${abm.albumId}/${index}`}>
                    <div className="image-card">
                        <img className="gallery-image" src={image} alt="Not Found" />
                    </div>
                </Link>
            )
        });
    }

    return (
        <>
            <div className="image-gallary-container">
                <div className="image-gallary-display">
                    <img className="gallary-image" src={gallaryBackground} alt="Not Found" />
                    <div className="image-over-container">
                        <label className="image-upload-label-field" htmlFor="image-upload"><i className="far fa-image"></i> Upload Image</label>
                        <input className="album-input-field" multiple type="file" id="image-upload" onChange={handleImage} />
                        <div className="image-container">
                            {updateImage(abm)}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ShowAlbum;