
import React, { useContext, useEffect } from 'react'
import { useState } from 'react';
import { AlbumContext } from '../App';

export const ShowImageAnimation = (props) => {
    const { album, dispatch } = useContext(AlbumContext);
    console.log(props);
    if(album.length===0){
        props.history.push("/");
    }
    const [imgIndex, setIndex] = useState("")
    const images = album[0].images;
    let leftValue = 30;
    console.log(images);
    const waitToChange = (time) => {
        return new Promise(resolve => setInterval(() => resolve(""), time))
    }

    const imageLoop = async () => {
        for (let index = 0; index < images.length; index++) {
            document.getElementById("animation").style.backgroundImage = `url(${images[index]})`;
            document.getElementById("image-silder").style.left = `${leftValue-10}rem`;
            leftValue=leftValue-10;
            setIndex(index)
            await waitToChange(5000);
            if (index === images.length - 1) {
                index = -1
            }
        }
    }

    const sequenceImage = () => {
        return images.map((image, index) => {
            return (
                <div className={`sequence-image ${imgIndex === index ? "active" : ""}`} ><img src={image} alt="" className="live-image" /></div>
            )
        })
    }

    useEffect(() => {
        imageLoop();
    }, [])

    return (
        <div className="image-animation-container">
            <div className="animation-display" id="animation">
                <div className="sequence-container">
                    <div className={`animation-silder`} id="image-silder">
                        {sequenceImage()}
                    </div>
                </div>
            </div>
        </div>
    )
}
