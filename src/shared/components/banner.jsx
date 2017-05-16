import React from 'react'



const Banner = () =>
    <div className="Banner section">
        <h2 className="text-huge text-primary"> What we do at CodeGen is : <span className='text-huge element'></span></h2>
        <div className="banner-content">
          <p className="text-medium text-primary ">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Ut enim ad minim veniam quis nostrud exercitation ullamco. </p>
          <h1 data-shadow='{CodeGen}'>{'{CodeGen}'}</h1>
        </div>
    </div>


if (typeof window !== 'undefined') {
    $(() => {
            const options = {
                strings: ["Coding ", "Magic"],
                typeSpeed: 500,
                }
                $('.element').typed(options)
})
}

export default Banner
