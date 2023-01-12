import { FC, ReactNode } from "react";
import { Footer } from "../Footer";
import { Header } from "../Header";
import { Main } from "../Main";

type Props = {
    children: ReactNode
    title: string
    className?: string
}

const Layout: FC<Props> = ({ children, title, className }) => {

    return(
        <>
            <div>Estoy en Layout</div>
            <Header />
            <Main title={title} clasName={className}>
                {children}
            </Main>
        </>
    )
}

export { Layout }