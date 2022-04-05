import styles from '../styles/formcomplete.module.css'
import Link from 'next/link'
import Head from 'next/head'

const FormCompleteEN = () => {

    return (
        <div className={styles.formBG}>
            <Head>
                <title>Successfully sent! | re.animate</title>
            </Head>
            <div className={styles.formContainer}>
                <Link href="/?uri=" as={"/"}>
                    <span className={styles.formButtonClose} />
                </Link>
                <div className={styles.formTitle}>Successfully sent.</div>
                <div className={styles.formText}>Please wait, we will be in touch soon.</div>
            </div>
        </div>
    )
}

export default FormCompleteEN;