import styles from '../styles/payinfo.module.css'
import Head from 'next/head'
import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'

const PayBoleto = () => {

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
                        <div className={styles.modalLoginGoogleButton}>
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
                        <div className={styles.modalLoginText2}>Ao criar sua conta, você aceita nossos<br/><div className={styles.modalLoginTextLink}>Termos de Serviço </div>
                        e <div className={styles.modalLoginTextLink}>Política de Privacidade</div>.</div>
                    </div>
                </div> 
                :
                <div className={styles.galleryModal}>
                    <div className={styles.modalClose} onClick={closeReel} />
                    <div className={styles.modalLogin}>
                        <div className={styles.modalLoginTitle}>Faça login na sua conta</div>
                        <div className={styles.modalLoginGoogleButton}>
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
                            <div className={styles.modalLoginFormForgotPassword}>Esqueceu sua senha?</div>
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
                        {size.width <= 1366 ?
                            <div className={styles.hamburgerPlans} onClick={openMenu} />
                        :
                            <button className={styles.accessReanimButton} onClick={reanimLink} >Acesse o re.animate <div className={styles.accessReanimButtonArrow} /></button>
                        }
                    </div>

                    <div className={styles.carouselPlansFinal}>
                        <div className={styles.rocketPlansFinal} />
                        <div className={styles.baloonPlansFinal} />
                        <div className={styles.cloud1PlansFinal} />
                        <div className={styles.cloud2PlansFinal} />
                        <div className={styles.cloud3PlansFinal} />
                        <div className={styles.planePlansFinal} />
                        <div className={styles.lightPlansFinal} />
                        <div className={styles.cloud4PlansFinal} />
                        <div className={styles.cloud5PlansFinal} />
                        <div className={styles.cloud6PlansFinal} />

                        <div className={styles.paymentMethodFinal}>
                            <div className={styles.paymentMethodFinalCheckmark} />
                            <div className={styles.paymentMethodFinalTitle}>Pague seu boleto</div>
                            <div className={styles.paymentMethodFinalText1}>Conclua o seu pagamento de R$ 999,99 para obter seu plano Premium</div>
                            <div className={styles.paymentMethodFinalBox1}>
                            ·   Conclua o seu pagamento com boleto até XX de Janeiro de 2024<br/>
                            ·   Após o pagamento, seu plano Premium será ativado em 1 dia útil. Você receberá um email de confirmação.
                            </div>
                            <div className={styles.paymentMethodFinalText2}>Copie o código do boleto para pagar online pelo seu banco.</div>
                            <div className={styles.paymentMethodFinalBox2}>
                                {size.width < 720 ?
                                <div className={styles.paymentMethodFinalBox2Text}>104991365817000...</div>
                                :
                                <div className={styles.paymentMethodFinalBox2Text}>10499136581700010014305004189649795680000099900</div>
                                }
                                <div className={styles.paymentMethodFinalIconCopy} />
                            </div>
                            <div className={styles.paymentMethodFinalText3}>Você também pode imprimir o boleto e pagar pessoalmente no seu banco, caixas eletrônicos e algumas lojas.</div>
                            <div className={styles.paymentMethodFinalContainer1}>
                                <div className={styles.paymentMethodFinalIconPrinter} />
                                <div className={styles.paymentMethodFinalTextPrint}>Imprimir boleto</div>
                            </div>
                        </div>
                        <div className={styles.paymentMethodFinalContainer2}>
                            <div className={styles.paymentMethodFinalContainerArrow} />
                            <Link href="/?uri=" as={"/"} passHref>
                                <div className={styles.paymentMethodFinalContainerText}>Voltar para o site</div>
                            </Link>
                            
                        </div>
                    </div>

                    <div className={styles.footer}>
                        <div className={styles.footerText}>©2023 PointMedia</div>
                        <div className={styles.footerSocialMedia}>
                            <div className={styles.footerIconFb} onClick={fbLink} />
                            <div className={styles.footerIconInsta} onClick={instaLink} />
                            <div className={styles.footerIconLinkedin} onClick={linkedinLink} />
                        </div>
                        <Link href="/form?uri=" as={"/form"} passHref>
                            <button className={styles.footerButton}>Começe agora <span className={styles.footerButtonArrow} /></button>
                        </Link>
                    </div>
                    
                </div>
            </div>
        </div>
    )
}

export default PayBoleto;