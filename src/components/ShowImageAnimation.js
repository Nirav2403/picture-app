
import React, { useContext, useEffect } from 'react'
import { useState } from 'react';
import { AlbumContext } from '../App';

export const ShowImageAnimation = (props) => {
    const { album, dispatch } = useContext(AlbumContext);
    if(album.length===0){
        props.history.push("/");
    }
    const [imgIndex, setIndex] = useState("")
    let images = album[0].images;
    let leftValue = 30;
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

    // const imageRotate = async() => {
    //     while(true){
    //     document.getElementById("animation").style.backgroundImage = `url(${images[0]})`;
    //     document.getElementById("image-silder").style.left = `${leftValue-10}rem`;
    //     leftValue=leftValue-10;
    //     await waitToChange(5000);
    //     const newArray = images.shift();
    //     images.push(newArray);
    //     console.log("===========>",images);
    //     }
    // }

    // const sequenceImage = () => {
    //         return (
    //             <div className={`sequence-image `} >
    //                 <img src={images} alt="" className={`live-image ${images === 0 ? "active" : ""}`} />
    //                 {/* <img src={image} alt="" className={`live-image ${imgIndex === index ? "active" : ""}`} /> */}
    //                 <div className={`timing-line ${index === 0 ? "show-timeline" : ""}`}>
    //                 {/* <div className={`timing-line ${imgIndex===index ? "show-timeline" : ""}`}> */}
    //                     <div className={`timing-scroll`}></div>
    //                 </div>
    //             </div>
    //         )
    // }
    const sequenceImage = () => {
        return images.map((image, index) => {
            return (
                <div className={`sequence-image `} >
                    {/* <img src={image} alt="" className={`live-image ${index === 0 ? "active" : ""}`} /> */}
                    <img src={image} alt="" className={`live-image ${imgIndex === index ? "active" : ""}`} />
                    {/* <div className={`timing-line ${index === 0 ? "show-timeline" : ""}`}> */}
                    <div className={`timing-line ${imgIndex===index ? "show-timeline" : ""}`}>
                        <div className={`timing-scroll`}></div>
                    </div>
                </div>
            )
        })
    }

        const imageMove = () => {

        }

    useEffect(() => {
        imageLoop();
        // imageRotate(images);
    },[])

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
