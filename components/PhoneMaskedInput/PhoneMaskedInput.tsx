import React from "react"
import { Controller, Control } from "react-hook-form"
import InputMask from "react-input-mask"

export interface IProps {
  control: Control
  error: boolean
}

export const PhoneMaskedInput = ({ control, error }: IProps) => {
  return (
    <div className="flex flex-col">
      <label htmlFor="phone" className="self-start text-left text-white">
        Telefone <span className="text-red-400">*</span>
      </label>
      <Controller
        as={InputMask}
        control={control}
        rules={{
          required: true,
          validate: (value) => !value.includes("_"),
        }}
        name="phone"
        type="phone"
        defaultValue=""
        placeholder="(DD) 12345-6789"
        mask="(99) 99999-9999"
        className="flex-1 appearance-none border border-transparent w-full py-2 px-4 bg-wpp-border text-white placeholder-gray-600 shadow-md rounded-lg text-base focus:outline-none focus:ring-2 focus:ring-wpp-dark-green focus:border-transparent"
      />
      {error && (
        <p className="self-start text-left text-xs text-red-400 mt-1">
          Telefone inválido.
        </p>
      )}
    </div>
  )
}
