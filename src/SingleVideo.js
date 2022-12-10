import React from "react";
import { Link } from "react-router-dom";
function SingleVideo({ thumb__img, profile__img, title, chaneel__name, views, timestamps, videos__duration}) {
   
    return (
           <div className="col__4">
               <Link to="/watch/:id">
           <div className="thumbnail__img relative">
               <img src="https://hips.hearstapps.com/hmg-prod/images/wednesday-jenna-ortega-2-1654540590.jpg?crop=1.00xw:0.978xh;0,0&resize=480:*" alt=""
                className="thumb__img pointer" 
                style={{"width":"100%"}}
               />
               <span className="videos__duration absolute">
                   {videos__duration}
               </span>
           </div>
           <div className="description__option d__flex">
               <div className="profile__img">
               <img src="https://hips.hearstapps.com/hmg-prod/images/wednesday-jenna-ortega-2-1654540590.jpg?crop=1.00xw:0.978xh;0,0&resize=480:*" alt="" className="channel__image pointer"/>
               
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
