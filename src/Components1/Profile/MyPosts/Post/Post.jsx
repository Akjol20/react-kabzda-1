import React, {}  from "react";
import s from './Post.module.css';


const Post= (props) => {
        return (
        <div className={s.item}> 
        <img src='https://img2.freepng.ru/20180630/asj/kisspng-computer-icons-download-avatar-5b3848b5343f86.741661901530415285214.jpg'/>
            {props.message}
            <div>
              <span>Like</span> {props.likescount}
            </div> 
            </div>
       )
}  
    export default Post;