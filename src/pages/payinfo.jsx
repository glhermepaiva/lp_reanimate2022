import styles from '../styles/payinfo.module.css'
import Head from 'next/head'
import { useState, useEffect, useRef } from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'

const PayInfo = () => {

    /***** HAMBURGER MENU  *****/

    const [menuOpen, setMenuOpen] = useState(false)

    const openMenu = () => {
        if (menuOpen == false){
        setMenuOpen(true)
        } else {
        setMenuOpen(false)
        } 
    }

    const closeMenu = () => {
        setMenuOpen(false)
    }

    /***** HELP WINDOW  *****/

    const [helpWindow, setHelpWindow] = useState(false)
    const [helpWindow2, setHelpWindow2] = useState(false)
    const helpWindowRef = useRef(null)
    const helpWindow2Ref = useRef(null)

    useEffect(() => {
        const handleOutsideClick = (event) => {
          if (helpWindowRef.current && !helpWindowRef.current.contains(event.target)) {
            setHelpWindow(false);
          }
        };
        document.addEventListener('click', handleOutsideClick);
        return () => {
          document.removeEventListener('click', handleOutsideClick);
        };
    }, []);

    useEffect(() => {
        const handleOutsideClick = (event) => {
          if (helpWindow2Ref.current && !helpWindow2Ref.current.contains(event.target)) {
            setHelpWindow2(false);
          }
        };
        document.addEventListener('click', handleOutsideClick);
        return () => {
          document.removeEventListener('click', handleOutsideClick);
        };
    }, []);

    const openHelpWindow = () => {
        if (helpWindow == false){
        setHelpWindow(true)
        } else {
        setHelpWindow(false)
        } 
    }

    const openHelpWindow2 = () => {
        if (helpWindow2 == false){
        setHelpWindow2(true)
        } else {
        setHelpWindow2(false)
        } 
    }

    /***** FAQ QUESTIONS *****/

    const [question1Closed, setQuestion1Closed] = useState(true)
    const [question2Closed, setQuestion2Closed] = useState(true)
    const [question3Closed, setQuestion3Closed] = useState(true)

    const toggleQuestion1 = () => {
    setQuestion1Closed(!question1Closed)
    }

    const toggleQuestion2 = () => {
    setQuestion2Closed(!question2Closed)
    }

    const toggleQuestion3 = () => {
    setQuestion3Closed(!question3Closed)
    }

    /***** PAY METHOD *****/

    const [creditCard, setCreditCard] = useState(true)
    const [boleto, setBoleto] = useState(false)
    const [pix, setPix] = useState(false)

    const selectPix = () => {
        setCreditCard(false)
        setBoleto(false)
        setPix(true)
    }

    const selectBoleto = () => {
        setCreditCard(false)
        setBoleto(true)
        setPix(false)
    }

    const selectCreditCard = () => {
        setCreditCard(true)
        setBoleto(false)
        setPix(false)
    }
   
    /***** BUTTON SHOW REEL *****/

    const [reelOpen, setReelOpen] = useState(false)

    const openReel = () => {
    setReelOpen(true)
    }

    const closeReel = () => {
    setReelOpen(false)
    setMenuOpen(false)
    }

    /***** CREATE ACCOUNT *****/

    const [createAccount, setCreateAccount] = useState(false)

    const openCreateAccount = () => {
        if (createAccount == false){
            setCreateAccount(true)
        } else {
            setCreateAccount(false)
        } 
    }

    const doubleFunction = () => {
        closeReel();
        openCreateAccount();
    }

    const router = useRouter();

    const refresh = () => {
        router.reload()
    }

    /***** OTHER *****/

    const [offsetY, setOffsetY] = useState(0);

    const handleScroll = () => setOffsetY(window.pageYOffset);

    useEffect(() => {

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);

    }, [])

    function useWindowSize() {
        const [windowSize, setWindowSize] = useState({
          width: undefined,
          height: undefined,
        });
      
        useEffect(() => {
          
            function handleResize() {
              setWindowSize({
                width: window.innerWidth,
                height: window.innerHeight,
              });
            }
          
            window.addEventListener("resize", handleResize);
           
            handleResize();
          
            return () => window.removeEventListener("resize", handleResize);

        }, []);

        return windowSize;
      }
    
    const size = useWindowSize();

    function reanimLink () {
        window.open('https://www.reanimate.com.br/', "_self");
    }

    function fbLink () {
        window.open('https://www.facebook.com/Point-Media-2496784783713500');
    }

    function instaLink () {
        window.open('https://www.instagram.com/pointmediaoficial/');
    }

    function linkedinLink () {
        window.open('https://www.linkedin.com/company/point-media-oficial/');
    }

    /***** RETURN *****/

    return (
        <div>
            <Head>
                <title>re.animate</title>
                <meta name='description' content='Transforme dias de trabalho em minutos com o re.animate.' />
            </Head>

            <div>
                <div className={`${styles.hoverMenu} ${menuOpen ? styles.open : ''}`}>
                    <div className={styles.menuClose} onClick={closeMenu}/>
                    <div className={styles.reanimateLogoMenu} onClick={closeMenu} />
                    <div className={styles.menuLinks}>
                        <div onClick={openReel}>Login</div>
                        <div onClick={reanimLink}>Acesse o Re.animate</div>
                    </div>
                </div>

                {reelOpen ?
                createAccount ?
                <div className={styles.galleryModal}>
                    <div className={styles.modalClose} onClick={doubleFunction} />
                    <div className={styles.modalLogin}>
                        {size.width < 720 ?
                        <div className={styles.modalLoginTitle2}>Crie sua<br/> conta gratuita</div>
                        :
                        <div className={styles.modalLoginTitle2}>Crie sua conta gratuita</div>
                        }
                        <div className={styles.modalLoginGoogleButton} onClick={() => alert('Logando...')}>
                            <div className={styles.googleLogo} />
                            <div className={styles.googleLogin}>Login com Google</div>
                        </div>
                        <div className={styles.modalLoginLineContainer}>
                            <div className={styles.modalLoginLine1}></div>
                            <div className={styles.modalLoginOuText}>OU</div>
                        </div>                    
                        <form className={styles.modalLoginForm}>
                            <div className={styles.modalLoginFormDataInput}>Nome da empresa</div>
                            <input className={styles.modalLoginFormInput} type="text" name="company" />
                            <div className={styles.modalLoginFormDataInput}>Nome</div>
                            <input className={styles.modalLoginFormInput} type="text" name="name" />
                            <div className={styles.modalLoginFormDataInput}>Sobrenome</div>
                            <input className={styles.modalLoginFormInput} type="text" name="surname" />
                            <div className={styles.modalLoginFormDataInput}>E-Mail</div>
                            <input className={styles.modalLoginFormInput} type="text" name="emailregister" />
                            <div className={styles.modalLoginFormDataInput}>Password</div>
                            <input className={styles.modalLoginFormInput} type="text" name="passwordregister" />
                            <br/>
                            <button className={styles.modalLoginFormRegisterButton}>Cadastrar</button>
                        </form>
                        <div className={styles.modalLoginLine2}></div>
                        <div className={styles.modalLoginText2}>Ao criar sua conta, você aceita nossos<br/><div className={styles.modalLoginTextLink} onClick={() => alert('Termos de serviço...')}>Termos de Serviço </div>
                        e <div className={styles.modalLoginTextLink} onClick={() => alert('Política de privacidade...')}>Política de Privacidade</div>.</div>
                    </div>
                </div> 
                :
                <div className={styles.galleryModal}>
                    <div className={styles.modalClose} onClick={closeReel} />
                    <div className={styles.modalLogin}>
                        <div className={styles.modalLoginTitle}>Faça login na sua conta</div>
                        <div className={styles.modalLoginGoogleButton} onClick={() => alert('Logando...')}>
                            <div className={styles.googleLogo} />
                            <div className={styles.googleLogin}>Login com Google</div>
                        </div>
                        <div className={styles.modalLoginLineContainer}>
                            <div className={styles.modalLoginLine1}></div>
                            <div className={styles.modalLoginOuText}>OU</div>
                        </div>
                        <form className={styles.modalLoginForm}>
                            <div className={styles.modalLoginFormEmail}>E-Mail</div>
                            <input className={styles.modalLoginFormEmailInput} type="text" name="email" />
                            <div className={styles.modalLoginFormPassword}>Password</div>
                            <input className={styles.modalLoginFormPasswordInput} type="text" name="password" />
                            <br/>
                            <div className={styles.modalLoginRememberContainer}>
                                <input className={styles.modalLoginFormRememberInput} type="checkbox" name="remember" />
                                <div className={styles.modalLoginFormRemember}>Remember Me</div>
                            </div>
                            <button className={styles.modalLoginFormLogInButton}>Log In</button>
                            <div className={styles.modalLoginFormForgotPassword} onClick={() => alert('Esqueceu sua senha...')}>Esqueceu sua senha?</div>
                        </form>
                        <div className={styles.modalLoginLine2}></div>
                        <div className={styles.modalLoginText}>Não tem uma conta? <div className={styles.modalLoginTextLink} onClick={openCreateAccount}>Crie seu login.</div></div>
                    </div>
                </div> 
                :
                null}
                
                <div>
                    <div className={styles.headerPlans}>
                        <Link href="/?uri=" as={"/"} passHref>
                            <div className={styles.reanimateLogoPlans} />
                        </Link>
                        {size.width < 1200 ?
                            <div className={styles.hamburgerPlans} onClick={openMenu} />
                        :
                            <button className={styles.accessReanimButton} onClick={reanimLink} >Acesse o re.animate <div className={styles.accessReanimButtonArrow} /></button>
                        }
                    </div>

                    <div className={styles.carouselPlans}>
                        <div className={styles.rocketPlans} />
                        <div className={styles.baloonPlans} />
                        <div className={styles.cloud1Plans} />
                        <div className={styles.cloud2Plans} />
                        <div className={styles.cloud3Plans} />
                        <div className={styles.planePlans} />
                        <div className={styles.lightPlans} />
                        <div className={styles.cloud4Plans} />
                        <div className={styles.cloud5Plans} />
                        <div className={styles.cloud6Plans} />

                    <div style={{display: size.width >= 1600 ? 'flex' : 'block', flexWrap: 'wrap', flexDirection: 'column', height: size.width >= 1600 ? '1500px' : 'auto', margin: size.width >= 1600 ? '50px 0 0 0' : '0 0 0 0'}}>
                        <div className={styles.paymentMethod}>
                            {size.width < 720 ?
                            <div className={styles.paymentMethodTitle}>Selecione seu<br/> método de pagamento</div>
                            :
                            <div className={styles.paymentMethodTitle}>Selecione seu método de pagamento</div>
                            }
                            <div className={styles.paymentMethodLine} />
                                <div className={styles.paymentMethodContainerCC}>
                                    <div className={styles.paymentMethodInputContainer}>
                                        <input type='checkbox' name="creditcard" checked={creditCard} onChange={() => selectCreditCard()} className={styles.paymentMethodInput} />
                                        <div className={styles.paymentMethodText}>Cartão de crédito</div>
                                    </div>
                                    <div className={styles.paymentMethodImageCC} />
                                    <input type='text' placeholder='Número do cartão' className={styles.paymentMethodInputField} />
                                    <div className={styles.paymentMethodInputContainer2}>
                                        <input type='text' placeholder='Data de validade' className={styles.paymentMethodInputField} />
                                        <div className={styles.paymentMethodIconInfo} onClick={openHelpWindow} ref={helpWindowRef} />
                                        {helpWindow ?
                                        <div className={styles.paymentMethodHelp}>O formato da data de expiração é <b>MM/AA</b> (por exemplo: 12/24).</div>
                                        :    
                                        null
                                        }
                                    </div>
                                    <div className={styles.paymentMethodInputContainer2}>
                                        <input type='text' placeholder='CVV' className={styles.paymentMethodInputField} />
                                        <div className={styles.paymentMethodIconInfo} onClick={openHelpWindow2} ref={helpWindow2Ref} />
                                        {helpWindow2 ?
                                        <div className={styles.paymentMethodHelp2}>O código de 3 dígitos no verso de seu cartão.</div>
                                        :    
                                        null
                                        }
                                    </div>
                                    <input type='text' placeholder='Nome' className={styles.paymentMethodInputField} />
                                    <input type='text' placeholder='Sobrenome' className={styles.paymentMethodInputFieldLast} />
                                </div>
                                <div className={styles.paymentMethodLineDivision} />
                                <div className={styles.paymentMethodInputContainerBoletoPix}>
                                    <input type='checkbox' name="boleto" checked={boleto} onChange={() => selectBoleto()} className={styles.paymentMethodInput} />
                                    <div className={styles.paymentMethodTextBoleto}>Boleto</div>
                                    <div className={styles.paymentMethodImageBoleto} />
                                </div>
                                <div className={styles.paymentMethodLineDivision} />
                                <div className={styles.paymentMethodInputContainerBoletoPix}>
                                    <input type='checkbox' name="pix" checked={pix} onChange={() => selectPix()} className={styles.paymentMethodInput} />
                                    <div className={styles.paymentMethodTextPix}>Pix</div>
                                    <div className={styles.paymentMethodImagePix} />
                                </div>
                        </div>

                        <div className={styles.paymentInfo}>
                            <div className={styles.paymentInfoTitle}>Detalhes da fatura</div>
                            <input type='text' name="address" placeholder='Endereço' className={styles.paymentInfoInputField} />
                            <input type='text' name="city" placeholder='Cidade' className={styles.paymentInfoInputField} />
                            <input type='text' name="zip" placeholder='Código postal (CEP)' className={styles.paymentInfoInputField} />
                            <input type='text' name="state" placeholder='Estado' className={styles.paymentInfoInputField} />
                            <input type='text' name="country" placeholder='País' className={styles.paymentInfoInputField} />
                            <input type='text' name="phone" placeholder='Telefone' className={styles.paymentInfoInputField} />
                            <input type='text' name="company" placeholder='Nome da empresa (opcional)' className={styles.paymentInfoInputField} />
                            <input type='text' name="document" placeholder='CPF/CNPJ' className={styles.paymentInfoInputField} />
                        </div>

                        <div className={styles.paymentSummary}>
                            <div className={styles.paymentSummaryTitle}>Resumo</div>
                            <div className={styles.paymentSummaryPlan}>Plano Premium</div>
                            <div className={styles.paymentSummaryPrice}>R$ 83,33 x 12 meses</div>
                            <div className={styles.paymentSummaryFinalPrice}>R$ 999,99</div>
                            <div>
                                <div className={styles.paymentSummaryDivisionLine} />
                                <div className={styles.paymentSummaryTotalContainer}>
                                    <div className={styles.paymentSummaryTotalText}>Total</div>
                                    <div className={styles.paymentSummaryTotalPrice}>R$ 999,99</div>
                                </div>
                                <div className={styles.paymentSummaryDivisionLine} />
                            </div>
                            {boleto ?
                            <Link href="/payboleto?uri=" as={"/payboleto"} passHref>
                                <div className={styles.paymentSummaryButton}>Finalizar compra</div>
                            </Link>
                            :
                            pix ?
                            <Link href="/paypix?uri=" as={"/paypix"} passHref>
                                <div className={styles.paymentSummaryButton}>Finalizar compra</div>
                            </Link>
                            :
                            <Link href="/paycc?uri=" as={"/paycc"} passHref>
                                <div className={styles.paymentSummaryButton}>Finalizar compra</div>
                            </Link>
                            }
                            
                            <div className={styles.paymentSummaryContainer}>
                                <div className={styles.paymentSummarySecurityIcon} />
                                <div className={styles.paymentSummarySecurityText}>Pagamento seguro e protegido</div>
                            </div>
                            <div className={styles.paymentSummaryContainer}>
                                <div className={styles.paymentSummaryFreeTestIcon} />
                                <div className={styles.paymentSummaryFreeTestText}>7 dias de teste gratuito</div>
                            </div>
                            <div className={styles.paymentSummaryText}>Ao comprar, você aceita os <div className={styles.paymentSummaryTextTerms} onClick={() => alert('Termos de serviço...')}>Termos de Serviço</div> e reconhece a leitura da <div className={styles.paymentSummaryTextPrivacy} onClick={() => alert('Política de privacidade...')}>Política de Privacidade</div>.
                                Você também concorda com a renovação automática do seu plano anual no valor de R$ 999,99 que pode ser desativada a qualquer momento pela sua conta. Os dados do seu cartão serão salvos para compras futuras e renovações de assinatura.
                            </div>
                        </div>
                    </div>    
                        
                    </div>

                    <div className={styles.faq}>
                        <div className={styles.faqInner}>
                        <div className={styles.faqTitle}>Perguntas frequentes</div>
                        <div className={styles.faqText}>Não encontrou o que está buscando? Visite o nosso FAQ ou 
                        <Link href="/form?uri=" as={"/form"} passHref>
                        <div className={styles.faqContact}> entre em contato</div>
                        </Link>.</div>
                        <div className={styles.faqContainer}>
                            <div className={styles.faqLine} />
                            {question1Closed ?
                            <div className={styles.faqQuestion}>
                                <div className={styles.faqQuestionTop} onClick={toggleQuestion1}>
                                    <div className={styles.faqQuestionTitle}>O que é um plano Premium?</div>
                                    <div className={styles.faqQuestionArrowDown} />
                                </div>
                            </div>
                            :
                            <div className={styles.faqQuestion}>
                                <div className={styles.faqQuestionTop} onClick={toggleQuestion1}>
                                    <div className={styles.faqQuestionTitle}>O que é um plano Premium?</div>
                                    <div className={styles.faqQuestionArrowUp} />
                                </div>
                                <div className={styles.faqQuestionText}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries.</div>
                            </div>
                            }
                            
                            <div className={styles.faqLine} />
                            {question2Closed ?
                            <div className={styles.faqQuestion}>
                                <div className={styles.faqQuestionTop} onClick={toggleQuestion2}>
                                    <div className={styles.faqQuestionTitle}>Posso experimentar um plano Premium gratuitamente?</div>
                                    <div className={styles.faqQuestionArrowDown} />
                                </div>
                            </div>
                            :
                            <div className={styles.faqQuestion}>
                                <div className={styles.faqQuestionTop} onClick={toggleQuestion2}>
                                    <div className={styles.faqQuestionTitle}>Posso experimentar um plano Premium gratuitamente?</div>
                                    <div className={styles.faqQuestionArrowUp} />
                                </div>
                                <div className={styles.faqQuestionText}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries.</div>
                            </div>
                            }
                            
                            <div className={styles.faqLine} />
                            {question3Closed ?
                            <div className={styles.faqQuestion}>
                                <div className={styles.faqQuestionTop} onClick={toggleQuestion3}>
                                    <div className={styles.faqQuestionTitle}>Quais métodos de pagamento online são aceitos?</div>
                                    <div className={styles.faqQuestionArrowDown} />
                                </div>
                            </div>
                            :
                            <div className={styles.faqQuestion}>
                                <div className={styles.faqQuestionTop} onClick={toggleQuestion3}>
                                    <div className={styles.faqQuestionTitle}>Quais métodos de pagamento online são aceitos?</div>
                                    <div className={styles.faqQuestionArrowUp} />
                                </div>
                                <div className={styles.faqQuestionText}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries.</div>
                            </div>
                            }
                        </div>
                        </div>
                    </div>

                    <div className={styles.footer}>
                        <div className={styles.footerText}>©2023 PointMedia</div>
                        <div className={styles.footerSocialMedia}>
                            <div className={styles.footerIconFb} onClick={fbLink} />
                            <div className={styles.footerIconInsta} onClick={instaLink} />
                            <div className={styles.footerIconLinkedin} onClick={linkedinLink} />
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
    )
}

export default PayInfo;