import { FC, ReactNode } from "react"

type Props = {
    children: ReactNode;
    variant: 'primary' | 'secondary' | 'default' | 'dark';
    icon?: "alarm" | "x-circle";
    handleClick: () => void;
}

const Button: FC<Props> = ({children, variant, icon, handleClick}) => {

    return(
        <button className={`btn btn-${variant}`} onClick={handleClick}>
            {icon && <i className={`bi bi-${icon} me-2`}></i>}
            {children}
        </button>
    )
}

export { Button }