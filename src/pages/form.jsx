import styles from '../styles/form.module.css'
import Link from 'next/link'
import Head from 'next/head'
import * as yup from 'yup'
import emailjs from 'emailjs-com'
import { useState } from 'react'

const Form = () => {

    const schema = yup.object().shape({
        name: yup.string().required('Nome não pode estar em branco'),
        email: yup.string().email('Endereço de email inválido').required('Email não pode estar em branco'),
        agency: yup.string(),
        tel: yup.number().min(11, 'O telefone precisa ter no mínimo 11 números').required('Telefone não pode estar em branco'),
        message: yup.string().min(3, 'A mensagem deve ter no mínimo 3 caracteres').max(300, 'A mensagem pode ter no máximo 300 caracteres').required('Mensagem não pode estar em branco')
    })

    const [loading, setLoading] = useState(false)

    const onSubmit = async (e) => {
        e.preventDefault();

        setLoading(true)

        let formData = {
            name: e.target[0].value,
            email: e.target[1].value,
            agency: e.target[2].value,
            tel: e.target[3].value,
            message: e.target[4].value,
        }

        const isValid = await schema.isValid(formData);

        if (isValid) {
            emailjs.sendForm('service_ibuddku', 'template_reanimate', e.target, 'user_qksKqi9BtojdtprKYCtue')

            .then((result) => {
                console.log(result);
                window.location.href = "/formcomplete";
            }, (error) => {
                console.log(error);
                setLoading(false)
            });

            
        } else {
            alert("Por favor garanta que os campos foram preenchidos corretamente e tente novamente.")
            setLoading(false)
        }
        }

    return (
        <div className={styles.formBG} >
            <Head>
                <title>Formulário | re.animate</title>
            </Head>
            <div className={styles.formContainer}>
                <Link href="/?uri=" as={"/"} passHref>
                    <span className={styles.formButtonClose} />
                </Link>
                {loading ? <div className={styles.formLoading}>Carregando...</div> : <div className={styles.formPage}>
                <div className={styles.formLeftSide}>
                    <div className={styles.formTitle}>Agende sua demo!</div>
                    <div className={styles.formText}>Nos conte um pouco sobre você e como podemos te ajudar.</div>
                </div>
                <div className={styles.formRightSide}>
                    <form className={styles.formFields} onSubmit={onSubmit}>
                        <input className={styles.formFieldName} type="text" name="name" placeholder="Nome" />
                        <input className={styles.formFieldEmail} type="text" name="email" placeholder="E-mail" />
                        <input className={styles.formFieldAgency} type="text" name="agency" placeholder="Agência/Produtora" />
                        <input className={styles.formFieldPhone} type="text" name="phone" placeholder="Telefone" />
                        <textarea className={styles.formFieldMessage} type="textarea" name="message" placeholder="Mensagem" />
                        <button className={styles.formButton}>Enviar <span className={styles.formButtonArrow} /></button>
                    </form>
                </div>
                </div>}
            </div>
        </div>
    )
}

export default Form;