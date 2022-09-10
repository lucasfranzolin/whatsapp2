export type Props = {
    className?: string;
};

export const Footer: React.FC<Props> = ({ className }) => {
    return (
        <p className={`self-end text-right text-white text-xs ${className}`}>
            Autor:{' '}
            <a
                href="https://github.com/lucasfranzolin"
                className="text-wpp-dark-green"
            >
                Lucas Franzolin
            </a>
            .
        </p>
    );
};
