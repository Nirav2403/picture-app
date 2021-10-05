import React, { useState } from 'react';
import { useEffect } from 'react';
import { useContext } from 'react';
import { v4 as uuidv4 } from "uuid";
import { AlbumContext } from '../App';
import AlbumBackground from "../icons/album-background.jpg";
import AlbumContent from './AlbumContent';

const CreateAlbum = () => {
    const createAlbum = useContext(AlbumContext)
    const [image, setImage] = useState({
        albumName: "",
        albumImage: "",
        albumId: null,
        images:[]
    })

    useEffect(()=>{
        console.log(image);
    },[image])

    const handleImageName = (e) => {
        const { value } = e.target;
        setImage({ ...image, albumName: value })
    }

    const handleImageUpload = (e) => {
        const imageFile = URL.createObjectURL(e.target.files[0])
        console.log("imageupload name", image);
        setImage({ ...image, albumImage: imageFile })
        console.log("imageFile",imageFile);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("higiui",image);
        createAlbum.dispatch({type:"CREATE_ALBUM", payload:{ ...image, albumId: uuidv4() }})
        setImage({
            albumName: "",
            albumImage: "",
            albumId: null
        })
    }


    return (
        <>
            <div className="album-container">
                <div className="album-section">
                    <img className="album-background-image" src={AlbumBackground} alt="Not Found" />
                    <div className="image-over-container">
                        <div className="album-input-container">
                            <form className="album-input-form" onSubmit={handleSubmit}>
                                <label className="album-label-field" htmlFor="label-name">Album Name</label>
                                <input className="album-input-field" type="text"  id="label-name" value={image.albumName} onChange={handleImageName} />
                                <label className="album-upload-label-field" htmlFor="image-upload"><i className="far fa-folder"></i> Upload Image</label>
                                <input className="album-input-field" type="file"  id="image-upload" onChange={handleImageUpload} />
                                <button className="create-album-btn" type="submit">Create Album</button>
                            </form>
                        </div>
                        <AlbumContent/>
                    </div>
                </div>
            </div>
        </>
    )
}

export default (CreateAlbum);