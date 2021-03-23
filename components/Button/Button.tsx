import React from "react"

export type IProps = React.ButtonHTMLAttributes<HTMLButtonElement>

export const Button = (props: IProps) => {
  const { children } = props
  return (
    <button
      className="w-full py-2 px-4 bg-wpp-dark-green text-white font-semibold rounded-lg shadow-md hover:bg-wpp-dark-green-light focus:outline-none disabled:opacity-50 disabled:cursor-not-allowed"
      {...props}
    >
      {children}
    </button>
  )
}
