import React from 'react'
import "../styles/Banner.css"

function Banner() {

    return (
        <div className="banner">
            <div className="banner__title">
                <div className="banner__title_head">
                    Agro<font>Recommender</font>
                </div>
                <div className="banner__title_tail">
                    <div className="typing">Welcome to the Crop and Fertilizer Recommender, an innovative web and machine learning-based application designed to revolutionize agriculture by providing personalized recommendations to farmers.</div>
                    <div className="banner__buttons">
                        <a href="https://krishijagran.com/agriculture-world" className="banner__button cropButton" target="#">Latest Agriculture News</a>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Banner