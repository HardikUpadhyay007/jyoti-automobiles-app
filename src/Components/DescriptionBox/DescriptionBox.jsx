import React from "react";
import "./DescriptionBox.css";
const DescriptionBox = () => {
    return (
        <div className="descriptionbox">
            <div className="descriptionbox-navigator">
                <div className="descriptionbox-nav-box">Description</div>
                <div className="descriptionbox-nav-box fade">Reviews (122)</div>
            </div>
            <div className="descriptionbox-description">
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Omnis accusantium placeat suscipit ut, at corporis eum
                    repellat voluptas commodi eveniet? Accusamus, non? Aliquam
                    perspiciatis reiciendis temporibus numquam ducimus, optio
                    unde!
                </p>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Est
                    voluptates officiis animi veritatis mollitia neque magnam
                    nesciunt repellendus, molestias, error cum numquam accusamus
                    quam perspiciatis voluptatibus? Deserunt architecto ipsam
                    vel.
                </p>
            </div>
        </div>
    );
};

export default DescriptionBox;
