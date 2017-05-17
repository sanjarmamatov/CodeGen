import React from 'react'
import Particles from 'react-particles-js'

const ParticleParams = {
                particles: {
                    number: {
                        value:100,
                    },
                    "color": {
                        "value": "#1abc9c"
                    },
                    "size": {
                        "value": 3,
                        "random": false,
                        "anim": {
                            "enable": false,
                            "speed": 80,
                            "size_min": 0.1,
                            "sync": false
                            }
                        },
                    line_linked: {
                        shadow: {
                            enable: true,
                            color: "#3CA9D1",
                            blur: 1,
                            }
                        },
                        "opacity": {
                            "value": 1,
                            "random": false,
                            "anim": {
                                "enable": false,
                                "speed": 1,
                                "opacity_min": 0.1,
                                "sync": false
                            }
                            },
                    }
                }

const Hero = () =>
    <div className="Hero section background-white">
        <Particles height={700} params={ParticleParams} />
        <div className="hero-content container text-center">
            <h2 className='text-huge  text-with-subtitle'>{'{CodeGeneration}'}</h2>
            <h3 className='text-big text-grey'>Company moto here</h3>
            <p><a className="button button-outlined block-mobile" href="#" role="button">Apply for a test session</a></p>
        </div>
    </div>


export default Hero
