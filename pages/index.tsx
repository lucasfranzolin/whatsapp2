import { useForm, Controller } from "react-hook-form"
import InputMask from "react-input-mask"

type FormInputs = {
  phone: string
  msg: string
}

export default function Home() {
  const { register, handleSubmit, control, errors } = useForm<FormInputs>()
  const onSubmit = (data: FormInputs) => {
    const phoneNoMask = data.phone.replace(/[\(\)_ -]+/g, "")
    window.open(
      `https://api.whatsapp.com/send?phone=+55${phoneNoMask}&text=${encodeURI(
        data.msg,
      )}`,
    )
  }

  return (
    <div className="w-full h-full flex flex-col items-center justify-center bg-wpp-app-bg overflow-hidden">
      <form
        className="p-6 max-w-md sm:md:min-h-1/2 min-h-2/3 rounded-xl shadow-md flex flex-col items-center space-y-4 bg-wpp-bg border-wpp-border-panel"
        onSubmit={handleSubmit(onSubmit)}
      >
        <p className="text-white text-xl">Whatsapp 2</p>
        <div className="flex flex-col">
          <label htmlFor="phone" className="self-start text-left text-white">
            Telefone <span className="text-red-400">*</span>
          </label>
          <Controller
            name="phone"
            control={control}
            rules={{
              required: true,
              validate: (value) => !value.includes("_"),
            }}
            render={({ onChange, onBlur, value, ref }) => (
              <InputMask
                onBlur={onBlur}
                onChange={onChange}
                checked={value}
                inputRef={ref}
                type="phone"
                defaultValue=""
                placeholder="(DD) 12345-6789"
                mask="(99) 99999-9999"
                className="flex-1 appearance-none border border-transparent w-full py-2 px-4 bg-wpp-border text-white placeholder-gray-600 shadow-md rounded-lg text-base focus:outline-none focus:ring-2 focus:ring-wpp-dark-green focus:border-transparent"
              />
            )}
          />
          {errors.phone && (
            <p className="self-start text-left text-xs text-red-400 mt-1">
              Telefone inválido.
            </p>
          )}
        </div>
        <textarea
          className="flex-1 appearance-none border border-transparent w-full h-full py-2 px-4 bg-wpp-border text-white placeholder-gray-600 shadow-md rounded-lg text-base focus:outline-none focus:ring-2 focus:ring-wpp-dark-green focus:border-transparent"
          placeholder="Deixe sua mensagem"
          name="msg"
          ref={register}
        />
        <button
          type="submit"
          className="w-full py-2 px-4 bg-wpp-dark-green text-white font-semibold rounded-lg shadow-md hover:bg-wpp-dark-green-light focus:outline-none"
        >
          Enviar
        </button>
      </form>
    </div>
  )
}
