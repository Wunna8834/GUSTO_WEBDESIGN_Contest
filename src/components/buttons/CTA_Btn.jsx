import React from 'react'

export const CTA_Btn = ( {children, className} ) => {
  return (
    <button className={`rounded-md ${className}`}>
        {children}
    </button>
  )
}
