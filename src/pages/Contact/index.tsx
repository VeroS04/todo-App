import { FC } from "react"
import {ContactForm } from "../../components/forms"
import { Layout } from "../../components/layout"

const Contact: FC = () => {
    return(
        <>
            <Layout title="Contacto" className="Contact page">
                <ContactForm />
                <div>
                    Div de prueba
                </div>
            </Layout>
        </>
    )
}

export { Contact }