import React, { forwardRef } from 'react'
import clsx from 'clsx'

const sizeMap = {
  title64: 'text-[34px] sm:text-6xl font-bold',
  title48: 'text-3xl sm:text-5xl font-bold',
  title24: 'text-xl sm:text-2xl font-medium',
  title20: 'text-lg sm:text-xl font-semibold',
  title18: 'text-base sm:text-lg font-medium',
  title16: 'text-base sm:text-lg font-normal',
  title14: 'text-sm sm:text-base font-normal',
  title12: 'text-xs sm:text-sm font-normal',
}

const Title = forwardRef(({ children, level, className = '', ...rest }, ref) => {
  return (
    <h2 ref={ref} className={clsx(sizeMap[level], className)} {...rest}>
      {children}
    </h2>
  )
})

Title.displayName = 'Title'
export default Title