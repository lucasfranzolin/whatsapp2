import Button from '@components/Button';
import MessageArea from '@components/MessageArea';
import Head from 'next/head';
import { useCallback, useRef, useState } from 'react';
import { useForm } from 'react-hook-form';
import * as xlsx from 'xlsx';

type FormInputs = {
    msg: string;
};

type Row = {
    nome: string;
    telefone: string;
};

const ProPage: React.FC = () => {
    const { handleSubmit, control } = useForm<FormInputs>();
    const hiddenInput = useRef(null);
    const [rows, setRows] = useState<Array<Row>>([]);
    const [active, setActive] = useState(0);

    const onSubmit = useCallback(
        (data: FormInputs) => {
            const { nome, telefone } = rows[active];
            window.open(
                `https://api.whatsapp.com/send?phone=+55${telefone}&text=${encodeURI(
                    data.msg.replaceAll('%nome', nome)
                )}`
            );
        },
        [active, rows]
    );

    const handleClickRow = (rowIndex: number) => () => setActive(rowIndex);

    const handleImport = () => hiddenInput.current.click();

    const handleClean = () => setRows([]);

    const handleChange = (e) => {
        e.preventDefault();
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = (e) => {
                const workbook = xlsx.read(e.target.result, { type: 'array' });
                const sheetName = workbook.SheetNames[0];
                const worksheet = workbook.Sheets[sheetName];
                const json = xlsx.utils.sheet_to_json(worksheet);
                setRows(json as Array<Row>);
            };
            reader.readAsArrayBuffer(file);
        }
    };

    return (
        <>
            <Head>
                <title>PRO</title>
            </Head>
            <div className="w-full h-full flex flex-col items-center justify-center overflow-hidden">
                <div className="p-8 flex flex-col md:flex-row gap-8 max-w-screen-xl w-full h-full">
                    <div className="flex flex-col justify-start gap-8">
                        <div className="flex gap-8">
                            <input
                                type="file"
                                accept=".csv, application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, application/vnd.ms-excel"
                                ref={hiddenInput}
                                onChange={handleChange}
                                className="hidden"
                            />
                            <Button onClick={handleImport}>
                                Importar arquivo
                            </Button>
                            {rows.length > 0 && (
                                <Button onClick={handleClean}>Limpar</Button>
                            )}
                        </div>
                        {rows.length > 0 && (
                            <div className="overflow-y-auto overflow-x-hidden rounded-xl bg-wpp-bg border-wpp-border-panel">
                                <table className="table-auto w-full">
                                    <thead className="text-white uppercase text-left sticky top-0 bg-wpp-bg">
                                        <tr>
                                            <th className="p-4">Nome</th>
                                            <th className="p-4">Telefone</th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-gray-700">
                                        {rows.map((row, index) => (
                                            <tr
                                                key={`row-${row.telefone}-${index}`}
                                                className={
                                                    active === index
                                                        ? 'text-wpp-dark-green font-bold bg-wpp-bg-active'
                                                        : 'text-white cursor-pointer hover:bg-wpp-bg-hover'
                                                }
                                                onClick={handleClickRow(index)}
                                            >
                                                <td className="max-w-sm truncate px-4 p-2">
                                                    {row.nome}
                                                </td>
                                                <td className="px-4 p-2">
                                                    {row.telefone}
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        )}
                    </div>
                    <form
                        className="p-8 flex-1 rounded-xl bg-wpp-bg border-wpp-border-panel flex flex-col items-stretch space-y-4"
                        onSubmit={handleSubmit(onSubmit)}
                    >
                        <div className="h-full">
                            <MessageArea control={control} />
                        </div>
                        <Button type="submit">Enviar mensagem</Button>
                    </form>
                </div>
            </div>
        </>
    );
};

export default ProPage;
