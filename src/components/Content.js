import React from 'react'
import egg from '../images/egg.jpg'
import egg2 from '../images/egg-2.jpg'

export const Content = () => {
  return (
    <>
      <div className="menu-card">
          <img src={egg} alt="egg" className="h-full rounded mb-20 shadow" />
          <div className="center-content">
              <h2 className="text-2xl mb-2 ">Egg Muffins</h2>
              <p className="mb-2">Cripsy, delicious, and nutritious</p>
              <span>$16</span>
          </div>
      </div>
      <div className="menu-card">
          <img src={egg2} alt="egg" className="h-full rounded mb-20 shadow" />
          <div className="center-content">
              <h2 className="text-2xl mb-2 ">Egg Salad</h2>
              <p className="mb-2">Cripsy, delicious, and nutritious</p>
              <span>$18</span>
          </div>
      </div>
    </>
  )
}

