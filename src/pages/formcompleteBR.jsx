import styles from '../styles/formcomplete.module.css'
import Link from 'next/link'
import Head from 'next/head'

const FormCompleteBR = () => {

    return (
        <div className={styles.formBG}>
            <Head>
                <title>Formulário enviado! | re.animate</title>
            </Head>
            <div className={styles.formContainer}>
                <Link href="/?uri=" as={"/"}>
                    <span className={styles.formButtonClose} />
                </Link>
                <div className={styles.formTitle}>Enviado com sucesso!</div>
                <div className={styles.formText}>Aguarde, em breve entraremos em contato.</div>
            </div>
        </div>
    )
}

export default FormCompleteBR;