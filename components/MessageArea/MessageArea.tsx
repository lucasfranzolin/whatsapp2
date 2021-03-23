import React from "react"
import { Controller, Control } from "react-hook-form"

export interface IProps {
  control: Control
}

export const MessageArea = ({ control }: IProps) => {
  return (
    <Controller
      as="textarea"
      name="msg"
      className="flex-1 appearance-none border border-transparent w-full h-full py-2 px-4 bg-wpp-border text-white placeholder-gray-600 shadow-md rounded-lg text-base focus:outline-none focus:ring-2 focus:ring-wpp-dark-green focus:border-transparent"
      placeholder="Deixe sua mensagem"
      defaultValue=""
      control={control}
    />
  )
}
