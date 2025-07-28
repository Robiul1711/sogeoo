import React, { forwardRef } from 'react'
import clsx from 'clsx'

const sizeMap = {
  title64: 'text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-bold',
  title48: 'text-2xl sm:text-4xl lg:text-5xl font-bold',
  title32: 'text-xl sm:text-2xl lg:text-3xl font-semibold',
  title24: 'text-lg sm:text-xl lg:text-2xl font-medium',
  title20: 'text-base sm:text-lg lg:text-xl font-normal',
  title18: 'text-sm sm:text-base lg:text-lg font-medium',
  title16: 'text-sm sm:text-base lg:text-lg font-normal',
  title14: 'text-xs sm:text-sm lg:text-base font-normal',
  title12: 'text-xs sm:text-sm font-normal',
};


const Title = forwardRef(({ children, level, className = '', ...rest }, ref) => {
  return (
    <h2 ref={ref} className={clsx(sizeMap[level], className)} {...rest}>
      {children}
    </h2>
  )
})

Title.displayName = 'Title'
export default Title