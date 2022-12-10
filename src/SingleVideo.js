import React from "react";
import { Link } from "react-router-dom";
function SingleVideo({ thumb__img, profile__img, title, chaneel__name, views, timestamps, videos__duration}) {
   
    return (
           <div className="col__4">
               <Link to="/watch/:id">
           <div className="thumbnail__img relative">
               <img src={thumb__img} alt=""
                className="thumb__img pointer" 
                style={{"width":"100%"}}
               />
               <span className="videos__duration absolute">
                   {videos__duration}
               </span>
           </div>
           <div className="description__option d__flex">
               <div className="profile__img">
               <img src={profile__img} 
                className="channel__image pointer"
               />
               </div>
               <div className="title d__flex align__items__center justify__content__center">
                   <span className="title">
                       {title}
                   </span>
               </div>
           </div>
           <div className="time__options d__flex">
               <span className="channelname">
                   {chaneel__name}
               </span>
                <div className="time__description">
               <span className="views">
                   {views}
               </span>
               <span className="timestamp">
                   {timestamps}
               </span>
               </div>
           </div>
           </Link>
           </div>
    )
}

export default SingleVideo
