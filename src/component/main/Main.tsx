import React from 'react';
import style from './Main.module.scss';
import video from "../../assets/videos/balls.mp4";

const Main = () => {
    return (
        <div>
            <video className={style.video} autoPlay loop playsInline>
                <source src={video} type="video/mp4" />
            </video>
        </div>
    );
};

export default Main;