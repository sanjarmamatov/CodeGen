import React from 'react'

const WhatWeDo = () =>
    <div className="WhatWeDo section">
        <h2 className="text-huge text-primary"> What we do at CodeGen is : <span className='text-huge element'></span></h2>
        <div className="banner-content">
          <p className="text-medium text-primary ">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Ut enim ad minim veniam quis nostrud exercitation ullamco. </p>
          <h1 data-shadow='{CodeGen}'>{'{CodeGen}'}</h1>
        </div>
    </div>


const BigMessage = () =>
    <div className="CompanyMessage section background-dark">
        <div className="message-content container text-center">
            <h3 className='text-huge  text-primary text-with-subtitle'>Mad sale here!</h3>
            <h4 className='text-big text-dark'>Company moto here</h4>
        </div>
    </div>

const Banner = () =>
    <div className="Banner">
        <WhatWeDo />
        <BigMessage />
    </div>




if (typeof window !== 'undefined') {
    $(() => {
            const options = {
                strings: ["Coding ", "Magic"],
                typeSpeed: 500,
                loop: true,
                }
                $('.element').typed(options)
})
}

export default Banner
