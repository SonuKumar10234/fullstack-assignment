import React from 'react'

const Footer = () => {
  return (
    <footer className="bg-[#000] px-4 mx-1 rounded-b-2xl">

      <div className='text-white pb-[60px] lg:pb-[20px]'>
        <div className='w-[90%] max-md:!w-full flex flex-wrap max-w-screen-xl mx-auto relative max-md:pb-40 pb-36 lg:pb-16'>
          <div className='w-[calc(50%_-_80px)] md:w-[15%] mr-[80px] md:mr-[40px] align-top mt-8'>
            <h2 className="mb-3 text-2xl font-semibold text-white">Abstract</h2>
            <a href="https://app.abstract.com/start-branches-trial" className='text-lg text-white font-medium block hover:underline'>Start Trial</a>
            <a href="https://app.abstract.com/start-branches-trial" className='text-lg text-white font-medium block hover:underline'>Pricing</a>
            <a href="https://app.abstract.com/start-branches-trial" className='text-lg text-white font-medium block hover:underline'>Download</a>
          </div>
          <div className='w-[calc(50%_-_80px)] md:w-[15%] mr-[80px] md:mr-[40px] align-top mt-8'>
            <h2 className="mb-3 text-2xl font-semibold text-white">Resources</h2>
            <a href="https://app.abstract.com/start-branches-trial" className='text-lg text-white font-medium block hover:underline'>Blog</a>
            <a href="https://app.abstract.com/start-branches-trial" className='text-lg text-white font-medium block hover:underline'>Help Center</a>
            <a href="https://app.abstract.com/start-branches-trial" className='text-lg text-white font-medium block hover:underline'>Release Notes</a>
            <a href="https://app.abstract.com/start-branches-trial" className='text-lg text-white font-medium block hover:underline'>Status</a>
          </div>
          <div className='w-[calc(50%_-_80px)] md:w-[15%] mr-[80px] md:mr-[40px] align-top mt-8'>
            <h2 className="mb-3 text-2xl font-semibold text-white">Community</h2>
            <a href="https://app.abstract.com/start-branches-trial" className='text-lg text-white font-medium block hover:underline'>Twitter</a>
            <a href="https://app.abstract.com/start-branches-trial" className='text-lg text-white font-medium block hover:underline'>LinkedIn</a>
            <a href="https://app.abstract.com/start-branches-trial" className='text-lg text-white font-medium block hover:underline'>Facebook</a>
            <a href="https://app.abstract.com/start-branches-trial" className='text-lg text-white font-medium block hover:underline'>Dribble</a>
            <a href="https://app.abstract.com/start-branches-trial" className='text-lg text-white font-medium block hover:underline'>Podcast</a>
          </div>
          <div className='w-[calc(50%_-_80px)] md:w-[15%] mr-[80px] md:mr-[40px] align-top mt-8'>
            <h2 className="mb-3 text-2xl font-semibold text-white">Company</h2>
            <a href="https://app.abstract.com/start-branches-trial" className='text-lg text-white font-medium block hover:underline'>About Us</a>
            <a href="https://app.abstract.com/start-branches-trial" className='text-lg text-white font-medium block hover:underline'>Careers</a>
            <a href="https://app.abstract.com/start-branches-trial" className='text-lg text-white font-medium block hover:underline mb-8'>Legal</a>

            <h2 className='className="mb-3 text-lg font-semibold text-white"'>Contact Us</h2>
            <a href="mailto:info@abstract.com">info@abstract.com</a>
          </div>
          <div className="footer-column-copyright absolute sm:right-0 max-sm:left-0 bottom-0 text-white text-lg">
            <svg
              className="w-[138px] mb-4"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 200 51"
              preserveAspectRatio="xMinYMid slice"
            >
              <g className="abstract-logo-mark-footer" fill="#fff">
                <path d="M25.41 0C5.08 0 0 5.08 0 25.41s5.08 25.41 25.41 25.41 25.41-5.08 25.41-25.41S45.74 0 25.41 0zm-4.17 39.31A9.73 9.73 0 1 1 31 29.58a9.75 9.75 0 0 1-9.76 9.73zm17.67-.4h-4.77V16.67H11.91v-4.76h27z" />
                <circle cx="21.24" cy="29.58" r="4.96" />
              </g>
            </svg>
            <p>© Copyright 2024</p>
            <p>Abstract Studio Design, Inc.</p>
            <p>All rights reserved</p>
          </div>
        </div>
      </div>

    </footer>

  )
}

export default Footer;