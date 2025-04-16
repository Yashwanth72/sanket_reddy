import React from "react"

const Textarea = React.forwardRef(({ className = "", ...props }, ref) => {
  return <textarea className={`form-textarea ${className}`} ref={ref} {...props} />
})

Textarea.displayName = "Textarea"

export default Textarea
