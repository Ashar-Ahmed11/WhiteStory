import React from 'react'
import Slider from './slider.jsx'
import Samples from './samples'
import Thumbnails from './thumbnails'
import Prices from './prices'
import Faq from './faq'
import VideoEditing from './videoEditing.jsx'
import Reviews from './reviews.jsx'
const Home = () => {
    return (
        <>
            <div style={{ position: "relative", backgroundColor: "black" }}>
                <div style={{ zIndex: 500 }} className="shade"></div>
                <div className='justify-content-center align-items-center d-flex' style={{ position: "absolute", height: "100%", width: "100%", zIndex: 600, pointerEvents: "none" }}>
                    <div className='d-flex flex-column justify-content-center align-items-center'>
                        <h1 className="text-light text-center display-3 fw-bold">We Make the</h1>
                        <h1 className="text-light text-center  display-3 fw-bold">Best.</h1>
                        <h1 className="text-light text-center  display-5 ">Make history with us</h1>
                        <button className="btn btn-outline-light text-light rounded-4 my-2"><h3 className='m-0 p-2'>Contact Us</h3></button>
                    </div>
                </div>
                <Slider direction={"left"} />
                <Slider />
                <Slider direction={"left"} />

            </div>
            <div className="bg-black">
                <Samples />
                <Reviews />
                <Thumbnails />
                <VideoEditing/>
                <Prices />
                <Faq />
             
            </div>
        </>
    )
}

export default Home