import { useForm, Controller } from "react-hook-form"

import Button from "@components/Button"
import PhoneMaskedInput from "@components/PhoneMaskedInput"
import MessageArea from "@components/MessageArea"
import Footer from "@components/Footer"

interface FormInputs {
  phone: string
  msg: string
}

export default function Home() {
  const { register, handleSubmit, control, errors } = useForm<FormInputs>()
  const onSubmit = (data: FormInputs) => {
    console.log("form data", JSON.stringify(data))
    const phoneNoMask = data.phone.replace(/[\(\)_ -]+/g, "")
    window.open(
      `https://api.whatsapp.com/send?phone=+55${phoneNoMask}&text=${encodeURI(
        data.msg,
      )}`,
    )
  }

  return (
    <div className="w-full h-full flex flex-col items-center justify-center bg-wpp-app-bg overflow-hidden">
      <div className="max-w-md sm:md:min-h-1/2 min-h-2/3">
        <form
          className="p-6 h-full rounded-xl shadow-md flex flex-col items-center space-y-4 bg-wpp-bg border-wpp-border-panel"
          onSubmit={handleSubmit(onSubmit)}
        >
          <p className="text-white text-xl">Whatsapp 2</p>
          <PhoneMaskedInput
            control={control}
            error={errors.phone ? true : false}
          />
          <MessageArea control={control} />
          <Button type="submit">Enviar mensagem</Button>
        </form>
        <Footer className="mt-1" />
      </div>
    </div>
  )
}
