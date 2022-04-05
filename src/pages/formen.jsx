import styles from '../styles/form.module.css'
import Link from 'next/link'
import Head from 'next/head'
import * as yup from 'yup'
import emailjs from 'emailjs-com'
import { useState } from 'react'

const FormEN = () => {

    const schema = yup.object().shape({
        name: yup.string().required(`Name field can't be empty`),
        email: yup.string().email('Invalid email address').required(`Email field can't be empty`),
        agency: yup.string(),
        tel: yup.number().min(11, 'Phone must have at least 11 numbers').required(`Phone field can't be empty`),
        message: yup.string().min(3, 'Message field must have at least 3 characters').max(300, 'Message field should have 300 characters maximum').required(`Message field can't be empty`)
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
            emailjs.sendForm('service_ibuddku', 'template_eydmlmt', e.target, 'user_qksKqi9BtojdtprKYCtue')

            .then((result) => {
                console.log(result);
                window.location.href = "/formcompleteen";
            }, (error) => {
                console.log(error);
                setLoading(false)
            });

            
        } else {
            alert("Please make sure all fields were correctly filled and try again.")
            setLoading(false)
        }
        }

    return (
        <div className={styles.formBG} >
            <Head>
                <title>Form | re.animate</title>
            </Head>
            <div className={styles.formContainer}>
                <Link href="/?uri=" as={"/"}>
                    <span className={styles.formButtonClose} />
                </Link>
                {loading ? <div className={styles.formLoading}>Loading...</div> : <div className={styles.formPage}>
                <div className={styles.formLeftSide}>
                    <div className={styles.formTitle}>Book your demo!</div>
                    <div className={styles.formText}>Tell us about yourself and how we can help you.</div>
                </div>
                <div className={styles.formRightSide}>
                    <form className={styles.formFields} onSubmit={onSubmit}>
                        <input className={styles.formFieldName} type="text" name="name" placeholder="Name" />
                        <input className={styles.formFieldEmail} type="text" name="email" placeholder="E-mail" />
                        <input className={styles.formFieldAgency} type="text" name="agency" placeholder="Company name" />
                        <input className={styles.formFieldPhone} type="text" name="phone" placeholder="Phone number" />
                        <textarea className={styles.formFieldMessage} type="textarea" name="message" placeholder="Your message" />
                        <button className={styles.formButton}>SEND MESSAGE<span className={styles.formButtonArrow} /></button>
                    </form>
                </div>
                </div>}
            </div>
        </div>
    )
}

export default FormEN;