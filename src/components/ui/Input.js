import React from "react"

const Input = React.forwardRef(({ className = "", ...props }, ref) => {
  return <input className={`form-input ${className}`} ref={ref} {...props} />
})

Input.displayName = "Input"

export default Input
