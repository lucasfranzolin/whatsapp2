export type Props = React.ButtonHTMLAttributes<HTMLButtonElement>;

export const Button: React.FC<Props> = (props) => {
    const { children } = props;
    return (
        <button
            className="py-2 px-4 bg-wpp-dark-green text-white font-semibold rounded-lg shadow-md hover:bg-wpp-dark-green-light focus:outline-none disabled:opacity-50 disabled:cursor-not-allowed"
            {...props}
        >
            {children}
        </button>
    );
};
