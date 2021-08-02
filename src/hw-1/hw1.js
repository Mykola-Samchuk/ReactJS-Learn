import React from "react";


function Post({author,content,image,date}){
    
    return(
    <div className = "component">
        <div className = "all-content">
            <div className = "head">
                <div className = "avatar">
                    <img className="photo" src = {author.photo} />
                </div>

                <ul className = "name-content">
                    <li>
                        <a href="#">{author.name}</a>
                    </li>
                    <li>
                        <a href="#">{author.nickname}</a>
                    </li>
                    <li>
                        <a href="#">{date}</a>
                    </li>
                </ul>
            </div>

            <div className = "img-content">
                <div className = "post">
                    <p>
                        <a href="#">{content}</a>
                    </p>
                </div>

                <div className = "img">
                    <a>
                        <img className="img-post" src = {image}/>
                    </a>
                </div>
            </div>

        </div>
       
    </div>
    )
}


export default Post