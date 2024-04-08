import React from 'react'
import SOLAR from "../assets/images/Solar.jpg"
import GPS from "../assets/images/GPS.jpg"
import { Carousel } from 'antd'
import { useSpring,animated } from 'react-spring'



const CategoryCrowsel = () => {

    const fadeIn = useSpring({
        opacity: 1,
        from: { opacity: 0 },
        config: { duration: 1000 },
      });
    const data = [
    {
        name:SOLAR,
        label:"Solar Battries"
    },
    {
        name:GPS,
        label:"GPS Batteries"
    }
]
    return (

        <div style={{ marginBottom: "1rem" }}>
            <Carousel autoplay autoplaySpeed={2000}>
                {data.map((value) => {
                    return (
                        <animated.div style={fadeIn}>
                        <div className='cowsel-bg' style={{ position: "relative", height:"70vh", display:"flex", gap:"10px", backgroundImage:`url(${value.name})` }}>
                            <span style={{ color: "white", margin: "auto", fontWeight: "600", fontSize: "4rem" }}>{value.label}</span>
                        </div>
                        </animated.div>
                    )
                })}
                </Carousel>
        </div>
    )
}

export default CategoryCrowsel