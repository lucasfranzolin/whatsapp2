import Button from '@components/Button';
import Footer from '@components/Footer';
import MessageArea from '@components/MessageArea';
import PhoneMaskedInput from '@components/PhoneMaskedInput';
import Head from 'next/head';
import { useForm } from 'react-hook-form';

type FormInputs = {
    phone: string;
    msg: string;
};

const HomePage: React.FC = () => {
    const { handleSubmit, control, errors } = useForm<FormInputs>();
    const onSubmit = (data: FormInputs) => {
        console.log('form data', JSON.stringify(data));
        const phoneNoMask = data.phone.replace(/[\(\)_ -]+/g, '');
        window.open(
            `https://api.whatsapp.com/send?phone=+55${phoneNoMask}&text=${encodeURI(
                data.msg
            )}`
        );
    };

    return (
        <>
            <Head>
                <title>Direct Zap</title>
            </Head>
            <div className="w-full h-full flex flex-col items-center justify-center overflow-hidden">
                <div className="max-w-md sm:md:min-h-1/2 min-h-2/3">
                    <form
                        className="p-6 h-full rounded-xl shadow-md flex flex-col items-center space-y-4 bg-wpp-bg border-wpp-border-panel"
                        onSubmit={handleSubmit(onSubmit)}
                    >
                        <p className="text-white text-2xl font-bold py-3">
                            Direct Zap
                        </p>
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
        </>
    );
};

export default HomePage;
