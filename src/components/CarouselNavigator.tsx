"use client"

import React from 'react';

type CarouselNavigatorProps = {
  total: number,
  current: number
}

type ArrayEle = {
  number: number,
  active: boolean
}

const CarouselNavigator: React.FC<CarouselNavigatorProps> = ({ total, current }) => {
  const [arr, setArr] = React.useState<Array<ArrayEle>>([]);

  React.useEffect(() => {
    const tempArr = [];
    for (let i = 0; i < total; i++) {
      tempArr.push({
        number: i,
        active: i === current,
      });
    }
    setArr(tempArr);
  }, [total, current]);

  const InActiveTab = () => {
    return (
      <div className='carousel-navigator-inactive'>
        <div></div>
      </div>
    )
  }
  const ActiveTab = () => {
    return (
      <div className='carousel-navigator-active'>
        <div></div>
      </div>
    )
  }

  return (
    <div className="carousel-navigator-container">
      {
        arr.map((ele: ArrayEle) => (
          <>
            {
              ele.active ? <ActiveTab /> : <InActiveTab />
            }
          </>
        ))
      }
    </div>
  )
}

export default CarouselNavigator;