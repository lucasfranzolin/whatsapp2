import React from "react"

interface IProps {
  className?: string
}

export const Footer = ({ className }: IProps) => {
  return (
    <p className={`self-end text-right text-white text-xs ${className}`}>
      Autor:{" "}
      <a
        href="https://github.com/lucasfranzolin"
        className="text-wpp-dark-green"
      >
        Lucas Franzolin
      </a>
      .
    </p>
  )
}
