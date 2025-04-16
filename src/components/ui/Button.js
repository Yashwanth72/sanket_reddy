import React from "react"

const Button = ({ children, className = "", variant = "default", size = "default", asChild = false, ...props }) => {
  let buttonClass = "btn"

  // Add variant class
  if (variant === "default" || variant === "primary") {
    buttonClass += " btn-primary"
  } else if (variant === "outline") {
    buttonClass += " btn-outline"
  } else if (variant === "black") {
    buttonClass += " btn-black"
  }

  // Add size class
  if (size === "lg") {
    buttonClass += " btn-lg"
  }

  // Add custom classes
  if (className) {
    buttonClass += " " + className
  }

  if (asChild) {
    return React.cloneElement(React.Children.only(children), {
      className: `${buttonClass} ${children.props.className || ""}`,
      ...props,
    })
  }

  return (
    <button className={buttonClass} {...props}>
      {children}
    </button>
  )
}

export default Button
