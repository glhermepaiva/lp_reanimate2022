import styles from '../styles/Index.module.css'
import ReactPlayer from 'react-player'
import { useEffect, useState, useRef } from 'react'
import Link from 'next/link'
import Head from 'next/head'
import { useRouter } from 'next/router'

import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/free-mode';

import { register } from "swiper/element/bundle";

register();

export default function LandingPage() {

    /***** PLANS  *****/

    const [plansOpen, setPlansOpen] = useState(false)

    const openPlans = () => {
        if (plansOpen == false){
        setPlansOpen(true)
        window.scrollTo(0, 0)
        } else {
        setPlansOpen(false)
        } 
    }

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

    /***** FAQ QUESTIONS *****/

    const [question1Closed, setQuestion1Closed] = useState(true)
    const [question2Closed, setQuestion2Closed] = useState(true)
    const [question3Closed, setQuestion3Closed] = useState(true)

    const openQuestion1 = () => {
    setQuestion1Closed(false)
    }

    const closeQuestion1 = () => {
    setQuestion1Closed(true)
    }

    const openQuestion2 = () => {
    setQuestion2Closed(false)
    }
    
    const closeQuestion2 = () => {
    setQuestion2Closed(true)
    }

    const openQuestion3 = () => {
    setQuestion3Closed(false)
    }
        
    const closeQuestion3 = () => {
    setQuestion3Closed(true)
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

    /***** PRICE SWITCH  *****/

    const [div1ZIndex, setDiv1ZIndex] = useState(1);
    const [div2ZIndex, setDiv2ZIndex] = useState(0);
      
    const swapZIndex = () => {
        setDiv1ZIndex(div1ZIndex === 0 ? 1 : 0);
        setDiv2ZIndex(div2ZIndex === 0 ? 1 : 0);
    };

    /***** PAGINATION *****/

    const paginationRef = useRef(null);

    useEffect(() => {
    const swiperContainer = paginationRef.current;
    const params = {
        pagination: {
        clickable: true
        },
        loop: true,
        injectStyles: [
        `
            .swiper-wrapper {
                width: 100vw;
                height: 600px;
                margin: 0px 0 20px 0;
                display: flex;
            }

            .swiper-pagination {
                margin: 0px 0 50px 0 !important;
            } 

            .swiper-pagination-bullet {
                width: 27px;
                height: 27px;
                margin: 0px 10px !important;
                background-color: #E8336A;
            }

            @media (min-width: 1200px) {
                
                .swiper-wrapper {
                    width: 100vw;
                    height: 250px;
                    margin: 20px 0 10px 0;
                }
        
                .swiper-pagination {
                    margin: 0px 0 50px 0 !important;
                } 
        
                .swiper-pagination-bullet {
                    width: 27px;
                    height: 27px;
                    margin: 0px 10px !important;
                    background-color: #E8336A;
                }

            }
        `,
        ],
    };

    Object.assign(swiperContainer, params);
    swiperContainer.initialize();
    }, []);

    /***** OTHER  *****/

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

    function renderObjectSize() {
        if (size.width < 720){
            return (
                <div className={styles.drawingGirl} >
                        <div className={styles.drawingGirlRocket} style={{transform: `translateY(${offsetY * -0.5}px) translateX(${offsetY * -0.2}px) scale(0.4)`}} />
                        <div className={styles.drawingGirlCloudTop} style={{transform: `translateX(${offsetY * 0.3}px) scale(0.4)`}} />
                        <div className={styles.drawingGirlCloudRight} style={{transform: `translateX(${offsetY * -0.2}px) scale(0.4)`}} />
                        <div className={styles.drawingGirlCloudLeft} style={{transform: `translateX(${offsetY * -0.2}px) scale(0.4)`}} />
                        <div className={styles.drawingGirlBalloon} style={{transform: `translateY(${offsetY * -0.1}px) scale(0.4)`}} />
                        <div className={styles.drawingGirlClock} style={{transform: `rotate(${offsetY / 2}deg) scale(0.4)`}} />
                        <div className={styles.drawingGirlTable} />
                </div>
            )
        }
    
        if (size.width >= 720 && size.width < 1200){
            return (
                <div className={styles.drawingGirl} >
                        <div className={styles.drawingGirlRocket} style={{transform: `translateY(${offsetY * -0.5}px) translateX(${offsetY * -0.2}px) scale(0.6)`}} />
                        <div className={styles.drawingGirlCloudTop} style={{transform: `translateX(${offsetY * 0.3}px) scale(0.6)`}} />
                        <div className={styles.drawingGirlCloudRight} style={{transform: `translateX(${offsetY * -0.2}px) scale(0.6)`}} />
                        <div className={styles.drawingGirlCloudLeft} style={{transform: `translateX(${offsetY * -0.2}px) scale(0.6)`}} />
                        <div className={styles.drawingGirlBalloon} style={{transform: `translateY(${offsetY * -0.3}px) scale(0.6)`}} />
                        <div className={styles.drawingGirlClock} style={{transform: `rotate(${offsetY / 2}deg) scale(0.6)`}} />
                        <div className={styles.drawingGirlTable} />
                </div>
            )
        }
    
        if (size.width >= 1200 && size.width < 1600){
            return (
                <div className={styles.drawingGirl} >
                        <div className={styles.drawingGirlRocket} style={{transform: `translateY(${offsetY * -0.5}px) translateX(${offsetY * -0.2}px) scale(0.7)`}} />
                        <div className={styles.drawingGirlCloudTop} style={{transform: `translateX(${offsetY * 0.3}px) scale(0.7)`}} />
                        <div className={styles.drawingGirlCloudRight} style={{transform: `translateX(${offsetY * -0.2}px) scale(0.7)`}} />
                        <div className={styles.drawingGirlCloudLeft} style={{transform: `translateX(${offsetY * -0.2}px) scale(0.7)`}} />
                        <div className={styles.drawingGirlBalloon} style={{transform: `translateY(${offsetY * -0.3}px) scale(0.7)`}} />
                        <div className={styles.drawingGirlClock} style={{transform: `rotate(${offsetY / 2}deg) scale(0.7)`}} />
                        <div className={styles.drawingGirlTable} />
                </div>
            )
        }
    
        if (size.width >= 1600 && size.width < 1900){
            return (
                <div className={styles.drawingGirl} >
                        <div className={styles.drawingGirlRocket} style={{transform: `translateY(${offsetY * -0.5}px) translateX(${offsetY * -0.2}px) scale(0.9)`}} />
                        <div className={styles.drawingGirlCloudTop} style={{transform: `translateX(${offsetY * 0.3}px) scale(0.9)`}} />
                        <div className={styles.drawingGirlCloudRight} style={{transform: `translateX(${offsetY * -0.2}px) scale(0.9)`}} />
                        <div className={styles.drawingGirlCloudLeft} style={{transform: `translateX(${offsetY * -0.2}px) scale(0.9)`}} />
                        <div className={styles.drawingGirlBalloon} style={{transform: `translateY(${offsetY * -0.3}px) scale(0.9)`}} />
                        <div className={styles.drawingGirlClock} style={{transform: `rotate(${offsetY / 2}deg) scale(0.9)`}} />
                        <div className={styles.drawingGirlTable} />
                </div>
            )
        }
    
        if (size.width >= 1900){
            return (
                <div className={styles.drawingGirl} >
                        <div className={styles.drawingGirlRocket} style={{transform: `translateY(${offsetY * -0.5}px) translateX(${offsetY * -0.2}px) scale(0.9)`}} />
                        <div className={styles.drawingGirlCloudTop} style={{transform: `translateX(${offsetY * 0.3}px) scale(1)`}} />
                        <div className={styles.drawingGirlCloudRight} style={{transform: `translateX(${offsetY * -0.2}px) scale(1)`}} />
                        <div className={styles.drawingGirlCloudLeft} style={{transform: `translateX(${offsetY * -0.2}px) scale(1)`}} />
                        <div className={styles.drawingGirlBalloon} style={{transform: `translateY(${offsetY * -0.3}px) scale(1)`}} />
                        <div className={styles.drawingGirlClock} style={{transform: `rotate(${offsetY / 2}deg) scale(1)`}} />
                        <div className={styles.drawingGirlTable} />
                </div>
            )
        }
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

    function reanimLink () {
        window.open('https://www.reanimate.com.br/', "_self");
    }

    return (
        <div>
            <Head>
                <title>re.animate</title>
                <meta name='description' content='Transforme dias de trabalho em minutos com o re.animate.' />
            </Head>

        <div>
            <div className={`${styles.hoverMenu} ${menuOpen ? styles.open : ''}`}>
                <div className={styles.hoverLogoClose}>
                    <div className={styles.reanimateLogoMenu} onClick={closeMenu} />
                    <div className={styles.menuClose} onClick={closeMenu}/>
                </div>
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
                        {size.width >= 720 ?
                        <div style={{display: 'flex', justifyContent: 'space-between'}}>
                            <div>
                                <div className={styles.modalLoginFormDataInput}>Nome</div>
                                <input className={styles.modalLoginFormInput} type="text" name="name" style={{width: size.width < 1200 ? '228px' : '278px'}} />
                            </div>
                            <div>
                                <div v className={styles.modalLoginFormDataInput}>Sobrenome</div>
                                <input className={styles.modalLoginFormInput} type="text" name="surname" style={{width: size.width < 1200 ? '228px' : '278px'}} />
                            </div>
                        </div>
                        :
                        <div>
                            <div className={styles.modalLoginFormDataInput}>Nome</div>
                            <input className={styles.modalLoginFormInput} type="text" name="name" />
                            <div className={styles.modalLoginFormDataInput}>Sobrenome</div>
                            <input className={styles.modalLoginFormInput} type="text" name="surname" />
                        </div>
                        }
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

            {plansOpen ?
            
            <div>
            <div className={styles.headerPlans}>
                <div className={styles.reanimateLogoPlans} onClick={refresh} />
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
                {size.width >= 1200 ?
                    <Swiper initialSlide={1} slidesPerView={3} centeredSlides={true} className={styles.carouselCards} style={{height: '800px', margin: '-200px 0 0 0'}}>
                    <SwiperSlide>
                    <div className={styles.carouselCard}>
                    <div className={styles.carouselContainerTitle2}>
                        <div className={styles.carouselCardIconReanimate} />
                            <div className={styles.carouselCardTitle}>Básico</div>
                        </div>
                        <div className={styles.carouselContainer}>
                            <div className={styles.carouselCardIconUser} />
                            <div className={styles.carouselCardText1}>6 acessos</div>
                        </div>
                        <div className={styles.carouselContainer}>
                            <div className={styles.carouselCardIconPapers} />
                            <div className={styles.carouselCardText1}>600 peças por mês</div>
                        </div>
                        <div className={styles.carouselContainer}>
                            <div className={styles.carouselCardIconGallery} />
                            <div className={styles.carouselCardText1}>Exportação</div>
                            <div className={styles.carouselCardIconInformation} />
                        </div>
                        <div className={styles.carouselContainerPayOptions}>
                            <div className={styles.carouselContainerWhite} style={{zIndex: div1ZIndex, transition: 'z-index 0.5s ease-in-out'}} onClick={swapZIndex}>
                                <div className={styles.carouselContainerWhiteText}>Pagamento Mensal</div>
                            </div>
                            <div className={styles.carouselContainerPink} style={{zIndex: div2ZIndex, transition: 'z-index 0.5s ease-in-out'}} onClick={swapZIndex}>
                                <div className={styles.carouselContainerPinkText}>Pagamento Anual com x% de desconto</div>
                            </div>
                        </div>
                        <div className={styles.carouselContainer}>
                            <div className={styles.carouselCardPriceBlack}>R$</div>
                            <div className={styles.carouselCardPricePink}>999</div>
                            <div className={styles.carouselCardPriceBlack}>99</div>
                        </div>
                        <Link href="/payinfo?uri=" as={"/payinfo"} passHref>
                            <div className={styles.carouselCardButton}>Escolher</div>
                        </Link>
                        <div>
                            <div className={styles.carouselCardSemiTitle}>Recursos e Funcionalidades:</div>
                            <div className={styles.carouselContainer2}>
                                <div className={styles.carouselCardIconCheckmark} />
                                <div className={styles.carouselCardText2}>Master Motion</div>
                            </div>
                            <div className={styles.carouselContainer2}>
                                <div className={styles.carouselCardIconCheckmark} />
                                <div className={styles.carouselCardText2}>Replicate</div>
                            </div>
                        </div>
                        <div>
                            <div className={styles.carouselCardSemiTitle}>Suporte ao Cliente:</div>
                            <div className={styles.carouselContainer2}>
                                <div className={styles.carouselCardIconCheckmark} />
                                <div className={styles.carouselCardText2}>Suporte padrão por e-mail</div>
                            </div>
                        </div>
                    </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className={styles.carouselTopChoice}>MAIS ESCOLHIDO</div>
                        <div className={styles.carouselCardTopChoice}>
                            <div className={styles.carouselContainerTitle}>
                                <div className={styles.carouselCardIconReanimate} />
                                <div className={styles.carouselCardTitle}>Premium</div>
                            </div>
                            <div className={styles.carouselContainer}>
                                <div className={styles.carouselCardIconUser} />
                                <div className={styles.carouselCardText1}>Acessos Ilimitados</div>
                            </div>
                            <div className={styles.carouselContainer}>
                                <div className={styles.carouselCardIconPapers} />
                                <div className={styles.carouselCardText1}>2.500 peças por mês</div>
                            </div>
                            <div className={styles.carouselContainer}>
                                <div className={styles.carouselCardIconGallery} />
                                <div className={styles.carouselCardText1}>Exportação</div>
                                <div className={styles.carouselCardIconInformation} />
                            </div>

                            <div className={styles.carouselContainerPayOptions}>
                                <div className={styles.carouselContainerWhite} style={{zIndex: div1ZIndex, transition: 'z-index 0.5s ease-in-out'}} onClick={swapZIndex}>
                                    <div className={styles.carouselContainerWhiteText}>Pagamento Mensal</div>
                                </div>
                                <div className={styles.carouselContainerPink} style={{zIndex: div2ZIndex, transition: 'z-index 0.5s ease-in-out'}} onClick={swapZIndex}>
                                    <div className={styles.carouselContainerPinkText}>Pagamento Anual com x% de desconto</div>
                                </div>
                            </div>

                            <div className={styles.carouselContainer}>
                                <div className={styles.carouselCardPriceBlack}>R$</div>
                                <div className={styles.carouselCardPricePink}>999</div>
                                <div className={styles.carouselCardPriceBlack}>99</div>
                            </div>
                            <Link href="/payinfo?uri=" as={"/payinfo"} passHref>
                                <div className={styles.carouselCardButton}>Escolher</div>
                            </Link>
                            <div>
                                <div className={styles.carouselCardSemiTitle}>Recursos e Funcionalidades:</div>
                                <div className={styles.carouselContainer2}>
                                    <div className={styles.carouselCardIconCheckmark} />
                                    <div className={styles.carouselCardText2}>Master Motion</div>
                                </div>
                                <div className={styles.carouselContainer2}>
                                    <div className={styles.carouselCardIconCheckmark} />
                                    <div className={styles.carouselCardText2}>Replicate</div>
                                </div>
                            </div>
                            <div>
                                <div className={styles.carouselCardSemiTitle}>Suporte ao Cliente:</div>
                                <div className={styles.carouselContainer2}>
                                    <div className={styles.carouselCardIconCheckmark} />
                                    <div className={styles.carouselCardText2}>Suporte premium por e-mail</div>
                                </div>
                                <div className={styles.carouselContainer2}>
                                    <div className={styles.carouselCardIconCheckmark} />
                                    <div className={styles.carouselCardText2}>Chatbot</div>
                                </div>
                                <div className={styles.carouselContainer2}>
                                    <div className={styles.carouselCardIconCheckmark} />
                                    <div className={styles.carouselCardText2}>Chat</div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                    <div className={styles.carouselCard}>
                    <div className={styles.carouselContainerTitle2}>
                        <div className={styles.carouselCardIconReanimate} />
                            <div className={styles.carouselCardTitle}>Avançado</div>
                        </div>
                        <div className={styles.carouselContainer}>
                            <div className={styles.carouselCardIconUser} />
                            <div className={styles.carouselCardText1}>10 acessos</div>
                        </div>
                        <div className={styles.carouselContainer}>
                            <div className={styles.carouselCardIconPapers} />
                            <div className={styles.carouselCardText1}>1.500 peças por mês</div>
                        </div>
                        <div className={styles.carouselContainer}>
                            <div className={styles.carouselCardIconGallery} />
                            <div className={styles.carouselCardText1}>Exportação</div>
                            <div className={styles.carouselCardIconInformation} />
                        </div>
                        <div className={styles.carouselContainerPayOptions}>
                            <div className={styles.carouselContainerWhite} style={{zIndex: div1ZIndex, transition: 'z-index 0.5s ease-in-out'}} onClick={swapZIndex}>
                                <div className={styles.carouselContainerWhiteText}>Pagamento Mensal</div>
                            </div>
                            <div className={styles.carouselContainerPink} style={{zIndex: div2ZIndex, transition: 'z-index 0.5s ease-in-out'}} onClick={swapZIndex}>
                                <div className={styles.carouselContainerPinkText}>Pagamento Anual com x% de desconto</div>
                            </div>
                        </div>
                        <div className={styles.carouselContainer}>
                            <div className={styles.carouselCardPriceBlack}>R$</div>
                            <div className={styles.carouselCardPricePink}>999</div>
                            <div className={styles.carouselCardPriceBlack}>99</div>
                        </div>
                        <Link href="/payinfo?uri=" as={"/payinfo"} passHref>
                            <div className={styles.carouselCardButton}>Escolher</div>
                        </Link>
                        <div>
                            <div className={styles.carouselCardSemiTitle}>Recursos e Funcionalidades:</div>
                            <div className={styles.carouselContainer2}>
                                <div className={styles.carouselCardIconCheckmark} />
                                <div className={styles.carouselCardText2}>Master Motion</div>
                            </div>
                            <div className={styles.carouselContainer2}>
                                <div className={styles.carouselCardIconCheckmark} />
                                <div className={styles.carouselCardText2}>Replicate</div>
                            </div>
                        </div>
                        <div>
                            <div className={styles.carouselCardSemiTitle}>Suporte ao Cliente:</div>
                            <div className={styles.carouselContainer2}>
                                <div className={styles.carouselCardIconCheckmark} />
                                <div className={styles.carouselCardText2}>Suporte prioritário por e-mail</div>
                            </div>
                            <div className={styles.carouselContainer2}>
                                <div className={styles.carouselCardIconCheckmark} />
                                <div className={styles.carouselCardText2}>Chatbot</div>
                            </div>
                        </div>
                    </div>
                    </SwiperSlide>
                </Swiper>
                : size.width >= 720 ?
                <Swiper initialSlide={1} slidesPerView={1.85} centeredSlides={true} className={styles.carouselCards} style={{height: '800px', margin: '-200px 0 0 0'}}>
                    <SwiperSlide>
                    <div className={styles.carouselCard}>
                    <div className={styles.carouselContainerTitle2}>
                        <div className={styles.carouselCardIconReanimate} />
                            <div className={styles.carouselCardTitle}>Básico</div>
                        </div>
                        <div className={styles.carouselContainer}>
                            <div className={styles.carouselCardIconUser} />
                            <div className={styles.carouselCardText1}>6 acessos</div>
                        </div>
                        <div className={styles.carouselContainer}>
                            <div className={styles.carouselCardIconPapers} />
                            <div className={styles.carouselCardText1}>600 peças por mês</div>
                        </div>
                        <div className={styles.carouselContainer}>
                            <div className={styles.carouselCardIconGallery} />
                            <div className={styles.carouselCardText1}>Exportação</div>
                            <div className={styles.carouselCardIconInformation} />
                        </div>
                        <div className={styles.carouselContainerPayOptions}>
                            <div className={styles.carouselContainerWhite} style={{zIndex: div1ZIndex, transition: 'z-index 0.5s ease-in-out'}} onClick={swapZIndex}>
                                <div className={styles.carouselContainerWhiteText}>Pagamento Mensal</div>
                            </div>
                            <div className={styles.carouselContainerPink} style={{zIndex: div2ZIndex, transition: 'z-index 0.5s ease-in-out'}} onClick={swapZIndex}>
                                <div className={styles.carouselContainerPinkText}>Pagamento Anual com x% de desconto</div>
                            </div>
                        </div>
                        <div className={styles.carouselContainer}>
                            <div className={styles.carouselCardPriceBlack}>R$</div>
                            <div className={styles.carouselCardPricePink}>999</div>
                            <div className={styles.carouselCardPriceBlack}>99</div>
                        </div>
                        <Link href="/payinfo?uri=" as={"/payinfo"} passHref>
                            <div className={styles.carouselCardButton}>Escolher</div>
                        </Link>
                        <div>
                            <div className={styles.carouselCardSemiTitle}>Recursos e Funcionalidades:</div>
                            <div className={styles.carouselContainer2}>
                                <div className={styles.carouselCardIconCheckmark} />
                                <div className={styles.carouselCardText2}>Master Motion</div>
                            </div>
                            <div className={styles.carouselContainer2}>
                                <div className={styles.carouselCardIconCheckmark} />
                                <div className={styles.carouselCardText2}>Replicate</div>
                            </div>
                        </div>
                        <div>
                            <div className={styles.carouselCardSemiTitle}>Suporte ao Cliente:</div>
                            <div className={styles.carouselContainer2}>
                                <div className={styles.carouselCardIconCheckmark} />
                                <div className={styles.carouselCardText2}>Suporte padrão por e-mail</div>
                            </div>
                        </div>
                    </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className={styles.carouselTopChoice}>MAIS ESCOLHIDO</div>
                        <div className={styles.carouselCardTopChoice}>
                            <div className={styles.carouselContainerTitle}>
                                <div className={styles.carouselCardIconReanimate} />
                                <div className={styles.carouselCardTitle}>Premium</div>
                            </div>
                            <div className={styles.carouselContainer}>
                                <div className={styles.carouselCardIconUser} />
                                <div className={styles.carouselCardText1}>Acessos Ilimitados</div>
                            </div>
                            <div className={styles.carouselContainer}>
                                <div className={styles.carouselCardIconPapers} />
                                <div className={styles.carouselCardText1}>2.500 peças por mês</div>
                            </div>
                            <div className={styles.carouselContainer}>
                                <div className={styles.carouselCardIconGallery} />
                                <div className={styles.carouselCardText1}>Exportação</div>
                                <div className={styles.carouselCardIconInformation} />
                            </div>

                            <div className={styles.carouselContainerPayOptions}>
                                <div className={styles.carouselContainerWhite} style={{zIndex: div1ZIndex, transition: 'z-index 0.5s ease-in-out'}} onClick={swapZIndex}>
                                    <div className={styles.carouselContainerWhiteText}>Pagamento Mensal</div>
                                </div>
                                <div className={styles.carouselContainerPink} style={{zIndex: div2ZIndex, transition: 'z-index 0.5s ease-in-out'}} onClick={swapZIndex}>
                                    <div className={styles.carouselContainerPinkText}>Pagamento Anual com x% de desconto</div>
                                </div>
                            </div>

                            <div className={styles.carouselContainer}>
                                <div className={styles.carouselCardPriceBlack}>R$</div>
                                <div className={styles.carouselCardPricePink}>999</div>
                                <div className={styles.carouselCardPriceBlack}>99</div>
                            </div>
                            <Link href="/payinfo?uri=" as={"/payinfo"} passHref>
                                <div className={styles.carouselCardButton}>Escolher</div>
                            </Link>
                            <div>
                                <div className={styles.carouselCardSemiTitle}>Recursos e Funcionalidades:</div>
                                <div className={styles.carouselContainer2}>
                                    <div className={styles.carouselCardIconCheckmark} />
                                    <div className={styles.carouselCardText2}>Master Motion</div>
                                </div>
                                <div className={styles.carouselContainer2}>
                                    <div className={styles.carouselCardIconCheckmark} />
                                    <div className={styles.carouselCardText2}>Replicate</div>
                                </div>
                            </div>
                            <div>
                                <div className={styles.carouselCardSemiTitle}>Suporte ao Cliente:</div>
                                <div className={styles.carouselContainer2}>
                                    <div className={styles.carouselCardIconCheckmark} />
                                    <div className={styles.carouselCardText2}>Suporte premium por e-mail</div>
                                </div>
                                <div className={styles.carouselContainer2}>
                                    <div className={styles.carouselCardIconCheckmark} />
                                    <div className={styles.carouselCardText2}>Chatbot</div>
                                </div>
                                <div className={styles.carouselContainer2}>
                                    <div className={styles.carouselCardIconCheckmark} />
                                    <div className={styles.carouselCardText2}>Chat</div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                    <div className={styles.carouselCard}>
                    <div className={styles.carouselContainerTitle2}>
                        <div className={styles.carouselCardIconReanimate} />
                            <div className={styles.carouselCardTitle}>Avançado</div>
                        </div>
                        <div className={styles.carouselContainer}>
                            <div className={styles.carouselCardIconUser} />
                            <div className={styles.carouselCardText1}>10 acessos</div>
                        </div>
                        <div className={styles.carouselContainer}>
                            <div className={styles.carouselCardIconPapers} />
                            <div className={styles.carouselCardText1}>1.500 peças por mês</div>
                        </div>
                        <div className={styles.carouselContainer}>
                            <div className={styles.carouselCardIconGallery} />
                            <div className={styles.carouselCardText1}>Exportação</div>
                            <div className={styles.carouselCardIconInformation} />
                        </div>
                        <div className={styles.carouselContainerPayOptions}>
                            <div className={styles.carouselContainerWhite} style={{zIndex: div1ZIndex, transition: 'z-index 0.5s ease-in-out'}} onClick={swapZIndex}>
                                <div className={styles.carouselContainerWhiteText}>Pagamento Mensal</div>
                            </div>
                            <div className={styles.carouselContainerPink} style={{zIndex: div2ZIndex, transition: 'z-index 0.5s ease-in-out'}} onClick={swapZIndex}>
                                <div className={styles.carouselContainerPinkText}>Pagamento Anual com x% de desconto</div>
                            </div>
                        </div>
                        <div className={styles.carouselContainer}>
                            <div className={styles.carouselCardPriceBlack}>R$</div>
                            <div className={styles.carouselCardPricePink}>999</div>
                            <div className={styles.carouselCardPriceBlack}>99</div>
                        </div>
                        <Link href="/payinfo?uri=" as={"/payinfo"} passHref>
                            <div className={styles.carouselCardButton}>Escolher</div>
                        </Link>
                        <div>
                            <div className={styles.carouselCardSemiTitle}>Recursos e Funcionalidades:</div>
                            <div className={styles.carouselContainer2}>
                                <div className={styles.carouselCardIconCheckmark} />
                                <div className={styles.carouselCardText2}>Master Motion</div>
                            </div>
                            <div className={styles.carouselContainer2}>
                                <div className={styles.carouselCardIconCheckmark} />
                                <div className={styles.carouselCardText2}>Replicate</div>
                            </div>
                        </div>
                        <div>
                            <div className={styles.carouselCardSemiTitle}>Suporte ao Cliente:</div>
                            <div className={styles.carouselContainer2}>
                                <div className={styles.carouselCardIconCheckmark} />
                                <div className={styles.carouselCardText2}>Suporte prioritário por e-mail</div>
                            </div>
                            <div className={styles.carouselContainer2}>
                                <div className={styles.carouselCardIconCheckmark} />
                                <div className={styles.carouselCardText2}>Chatbot</div>
                            </div>
                        </div>
                    </div>
                    </SwiperSlide>
                </Swiper>
                :
                <Swiper pagination={true} modules={[Pagination]} initialSlide={1} loop={true} className={styles.carouselCards}>
                    <SwiperSlide>
                    <div className={styles.carouselCard}>
                    <div className={styles.carouselContainerTitle2}>
                        <div className={styles.carouselCardIconReanimate} />
                            <div className={styles.carouselCardTitle}>Básico</div>
                        </div>
                        <div className={styles.carouselContainer}>
                            <div className={styles.carouselCardIconUser} />
                            <div className={styles.carouselCardText1}>6 acessos</div>
                        </div>
                        <div className={styles.carouselContainer}>
                            <div className={styles.carouselCardIconPapers} />
                            <div className={styles.carouselCardText1}>600 peças por mês</div>
                        </div>
                        <div className={styles.carouselContainer}>
                            <div className={styles.carouselCardIconGallery} />
                            <div className={styles.carouselCardText1}>Exportação</div>
                            <div className={styles.carouselCardIconInformation} />
                        </div>
                        <div className={styles.carouselContainerPayOptions}>
                            <div className={styles.carouselContainerWhite} style={{zIndex: div1ZIndex, transition: 'z-index 0.5s ease-in-out'}} onClick={swapZIndex}>
                                <div className={styles.carouselContainerWhiteText}>Pagamento Mensal</div>
                            </div>
                            <div className={styles.carouselContainerPink} style={{zIndex: div2ZIndex, transition: 'z-index 0.5s ease-in-out'}} onClick={swapZIndex}>
                                <div className={styles.carouselContainerPinkText}>Pagamento Anual com x% de desconto</div>
                            </div>
                        </div>
                        <div className={styles.carouselContainer}>
                            <div className={styles.carouselCardPriceBlack}>R$</div>
                            <div className={styles.carouselCardPricePink}>999</div>
                            <div className={styles.carouselCardPriceBlack}>99</div>
                        </div>
                        <Link href="/payinfo?uri=" as={"/payinfo"} passHref>
                            <div className={styles.carouselCardButton}>Escolher</div>
                        </Link>
                        <div>
                            <div className={styles.carouselCardSemiTitle}>Recursos e Funcionalidades:</div>
                            <div className={styles.carouselContainer2}>
                                <div className={styles.carouselCardIconCheckmark} />
                                <div className={styles.carouselCardText2}>Master Motion</div>
                            </div>
                            <div className={styles.carouselContainer2}>
                                <div className={styles.carouselCardIconCheckmark} />
                                <div className={styles.carouselCardText2}>Replicate</div>
                            </div>
                        </div>
                        <div>
                            <div className={styles.carouselCardSemiTitle}>Suporte ao Cliente:</div>
                            <div className={styles.carouselContainer2}>
                                <div className={styles.carouselCardIconCheckmark} />
                                <div className={styles.carouselCardText2}>Suporte padrão por e-mail</div>
                            </div>
                        </div>
                    </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className={styles.carouselTopChoice}>MAIS ESCOLHIDO</div>
                        <div className={styles.carouselCardTopChoice}>
                            <div className={styles.carouselContainerTitle}>
                                <div className={styles.carouselCardIconReanimate} />
                                <div className={styles.carouselCardTitle}>Premium</div>
                            </div>
                            <div className={styles.carouselContainer}>
                                <div className={styles.carouselCardIconUser} />
                                <div className={styles.carouselCardText1}>Acessos Ilimitados</div>
                            </div>
                            <div className={styles.carouselContainer}>
                                <div className={styles.carouselCardIconPapers} />
                                <div className={styles.carouselCardText1}>2.500 peças por mês</div>
                            </div>
                            <div className={styles.carouselContainer}>
                                <div className={styles.carouselCardIconGallery} />
                                <div className={styles.carouselCardText1}>Exportação</div>
                                <div className={styles.carouselCardIconInformation} />
                            </div>

                            <div className={styles.carouselContainerPayOptions}>
                                <div className={styles.carouselContainerWhite} style={{zIndex: div1ZIndex, transition: 'z-index 0.5s ease-in-out'}} onClick={swapZIndex}>
                                    <div className={styles.carouselContainerWhiteText}>Pagamento Mensal</div>
                                </div>
                                <div className={styles.carouselContainerPink} style={{zIndex: div2ZIndex, transition: 'z-index 0.5s ease-in-out'}} onClick={swapZIndex}>
                                    <div className={styles.carouselContainerPinkText}>Pagamento Anual com x% de desconto</div>
                                </div>
                            </div>

                            <div className={styles.carouselContainer}>
                                <div className={styles.carouselCardPriceBlack}>R$</div>
                                <div className={styles.carouselCardPricePink}>999</div>
                                <div className={styles.carouselCardPriceBlack}>99</div>
                            </div>
                            <Link href="/payinfo?uri=" as={"/payinfo"} passHref>
                                <div className={styles.carouselCardButton}>Escolher</div>
                            </Link>
                            <div>
                                <div className={styles.carouselCardSemiTitle}>Recursos e Funcionalidades:</div>
                                <div className={styles.carouselContainer2}>
                                    <div className={styles.carouselCardIconCheckmark} />
                                    <div className={styles.carouselCardText2}>Master Motion</div>
                                </div>
                                <div className={styles.carouselContainer2}>
                                    <div className={styles.carouselCardIconCheckmark} />
                                    <div className={styles.carouselCardText2}>Replicate</div>
                                </div>
                            </div>
                            <div>
                                <div className={styles.carouselCardSemiTitle}>Suporte ao Cliente:</div>
                                <div className={styles.carouselContainer2}>
                                    <div className={styles.carouselCardIconCheckmark} />
                                    <div className={styles.carouselCardText2}>Suporte premium por e-mail</div>
                                </div>
                                <div className={styles.carouselContainer2}>
                                    <div className={styles.carouselCardIconCheckmark} />
                                    <div className={styles.carouselCardText2}>Chatbot</div>
                                </div>
                                <div className={styles.carouselContainer2}>
                                    <div className={styles.carouselCardIconCheckmark} />
                                    <div className={styles.carouselCardText2}>Chat</div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                    <div className={styles.carouselCard}>
                    <div className={styles.carouselContainerTitle2}>
                        <div className={styles.carouselCardIconReanimate} />
                            <div className={styles.carouselCardTitle}>Avançado</div>
                        </div>
                        <div className={styles.carouselContainer}>
                            <div className={styles.carouselCardIconUser} />
                            <div className={styles.carouselCardText1}>10 acessos</div>
                        </div>
                        <div className={styles.carouselContainer}>
                            <div className={styles.carouselCardIconPapers} />
                            <div className={styles.carouselCardText1}>1.500 peças por mês</div>
                        </div>
                        <div className={styles.carouselContainer}>
                            <div className={styles.carouselCardIconGallery} />
                            <div className={styles.carouselCardText1}>Exportação</div>
                            <div className={styles.carouselCardIconInformation} />
                        </div>
                        <div className={styles.carouselContainerPayOptions}>
                            <div className={styles.carouselContainerWhite} style={{zIndex: div1ZIndex, transition: 'z-index 0.5s ease-in-out'}} onClick={swapZIndex}>
                                <div className={styles.carouselContainerWhiteText}>Pagamento Mensal</div>
                            </div>
                            <div className={styles.carouselContainerPink} style={{zIndex: div2ZIndex, transition: 'z-index 0.5s ease-in-out'}} onClick={swapZIndex}>
                                <div className={styles.carouselContainerPinkText}>Pagamento Anual com x% de desconto</div>
                            </div>
                        </div>
                        <div className={styles.carouselContainer}>
                            <div className={styles.carouselCardPriceBlack}>R$</div>
                            <div className={styles.carouselCardPricePink}>999</div>
                            <div className={styles.carouselCardPriceBlack}>99</div>
                        </div>
                        <Link href="/payinfo?uri=" as={"/payinfo"} passHref>
                            <div className={styles.carouselCardButton}>Escolher</div>
                        </Link>
                        <div>
                            <div className={styles.carouselCardSemiTitle}>Recursos e Funcionalidades:</div>
                            <div className={styles.carouselContainer2}>
                                <div className={styles.carouselCardIconCheckmark} />
                                <div className={styles.carouselCardText2}>Master Motion</div>
                            </div>
                            <div className={styles.carouselContainer2}>
                                <div className={styles.carouselCardIconCheckmark} />
                                <div className={styles.carouselCardText2}>Replicate</div>
                            </div>
                        </div>
                        <div>
                            <div className={styles.carouselCardSemiTitle}>Suporte ao Cliente:</div>
                            <div className={styles.carouselContainer2}>
                                <div className={styles.carouselCardIconCheckmark} />
                                <div className={styles.carouselCardText2}>Suporte prioritário por e-mail</div>
                            </div>
                            <div className={styles.carouselContainer2}>
                                <div className={styles.carouselCardIconCheckmark} />
                                <div className={styles.carouselCardText2}>Chatbot</div>
                            </div>
                        </div>
                    </div>
                    </SwiperSlide>
                </Swiper>
                }
                
            </div>
            <div className={styles.businessPlanContainer}>
                {size.width < 720 ?
                    <div className={styles.businessPlanContainerTitle}>Planos<br/> para negócios</div>
                :
                    <div className={styles.businessPlanContainerTitle}>Planos para negócios</div>
                }
                <div className={styles.businessPlanContainerText}>Plano empresarial personalizado para grandes empresas com necessidades específicas, oferecendo suporte dedicado e personalização avançada.</div>
                <Link href="/form?uri=" as={"/form"} passHref>
                    <div className={styles.businessPlanContainerLink}>Ver planos para negócios →</div>
                </Link>
            </div>
            <div className={styles.paymentOptions}>
                <div className={styles.paymentOptionsTitleContainer}>
                    <div className={styles.paymentOptionsTitle}>MÉTODOS DE PAGAMENTO ACEITOS</div>
                    <div className={styles.paymentOptionsCC} />
                </div>
                <div className={styles.paymentOptionsContainer}>
                    <div className={styles.paymentOptionsLine1} />
                    <div>
                        <div className={styles.paymentOptionsApprovalIcon} />
                        <div className={styles.paymentOptionsTestText}>TESTE GRATUITO</div>
                        <div className={styles.paymentOptionsExtra1} style={{display: size.width < 1200 ? 'none' : 'block'}}>Período de teste gratuito para permitir que os usuários experimentem o serviço.</div>
                    </div>
                    <div className={styles.paymentOptionsLine2} />
                    <div>
                        <div className={styles.paymentOptionsSecurityIcon} />
                        <div className={styles.paymentOptionsPaymentText}>PAGAMENTO SEGURO SSL</div>
                        <div className={styles.paymentOptionsExtra2} style={{display: size.width < 1200 ? 'none' : 'block'}}>Sua informação é protegida pela criptografia SSL 256-bit.</div>
                    </div>
                </div>
            </div>
            <div className={styles.faq}>
                <div className={styles.faqTitle}>Perguntas frequentes</div>
                <div className={styles.faqText}>Não encontrou o que está buscando? Visite o nosso FAQ ou 
                    <Link href="/form?uri=" as={"/form"} passHref>
                    <div className={styles.faqContact}> entre em contato</div>
                    </Link>
                .</div>
                <div className={styles.faqContainer}>
                    <div className={styles.faqLine} />
                    {question1Closed ?
                    <div className={styles.faqQuestion}>
                        <div className={styles.faqQuestionTop} onClick={openQuestion1}>
                            <div className={styles.faqQuestionTitle}>O que é um plano Premium?</div>
                            <div className={styles.faqQuestionArrowDown} />
                        </div>
                    </div>
                    :
                    <div className={styles.faqQuestion}>
                        <div className={styles.faqQuestionTop} onClick={closeQuestion1}>
                            <div className={styles.faqQuestionTitle}>O que é um plano Premium?</div>
                            <div className={styles.faqQuestionArrowUp} />
                        </div>
                        <div className={styles.faqQuestionText}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries.</div>
                    </div>
                    }
                    
                    <div className={styles.faqLine} />
                    {question2Closed ?
                    <div className={styles.faqQuestion}>
                        <div className={styles.faqQuestionTop} onClick={openQuestion2}>
                            <div className={styles.faqQuestionTitle}>Posso experimentar um plano Premium gratuitamente?</div>
                            <div className={styles.faqQuestionArrowDown} />
                        </div>
                    </div>
                    :
                    <div className={styles.faqQuestion}>
                        <div className={styles.faqQuestionTop} onClick={closeQuestion2}>
                            <div className={styles.faqQuestionTitle}>Posso experimentar um plano Premium gratuitamente?</div>
                            <div className={styles.faqQuestionArrowUp} />
                        </div>
                        <div className={styles.faqQuestionText}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries.</div>
                    </div>
                    }
                    
                    <div className={styles.faqLine} />
                    {question3Closed ?
                    <div className={styles.faqQuestion}>
                        <div className={styles.faqQuestionTop} onClick={openQuestion3}>
                            <div className={styles.faqQuestionTitle}>Quais métodos de pagamento online são aceitos?</div>
                            <div className={styles.faqQuestionArrowDown} />
                        </div>
                    </div>
                    :
                    <div className={styles.faqQuestion}>
                        <div className={styles.faqQuestionTop} onClick={closeQuestion3}>
                            <div className={styles.faqQuestionTitle}>Quais métodos de pagamento online são aceitos?</div>
                            <div className={styles.faqQuestionArrowUp} />
                        </div>
                        <div className={styles.faqQuestionText}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries.</div>
                    </div>
                    }
                    <div className={styles.faqLine} />
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

            :

            <div>
            <div className={styles.header}>
                <div className={styles.headerLogoHamb}>
                    <div className={styles.reanimateLogo} onClick={refresh} />
                    {size.width < 1200 ?
                    <div className={styles.hamburger} onClick={openMenu} />
                    :
                    <div className={styles.headerButtons}>
                        <button className={styles.loginButton} onClick={openReel}>Login</button>
                        <button className={styles.accessReanimButton} onClick={reanimLink}>Acesse o re.animate <div className={styles.accessReanimButtonArrow} /></button>
                    </div>
                    }
                </div>
                <div className={styles.headerImages}>
                    <div className={styles.drawingGirl} >
                        {renderObjectSize()}
                    </div>
                </div>
                    <div className={styles.headerTitle}>Transforme dias de trabalho em minutos com o <span className={styles.headerTitleReanimate}>re.animate.</span></div>
                    <div className={styles.headerText}>A plataforma de automação que vai revolucionar sua produção de banners digitais.</div>
                    <button className={styles.headerButton} onClick={openPlans}>Contrate agora <div className={styles.headerButtonArrow} /></button>
            </div>
            <div className={styles.advantages}>
                <div className={styles.qualityBox}>
                    <div className={styles.symbolCheck} />
                    <div className={styles.checkTitle}>Mais qualidade</div>
                    <div className={styles.checkText}>Replique a peça master em diversos formatos, tanto animados quanto estáticos.</div>
                </div>
                <div className={styles.agilityBox}>
                    <div className={styles.symbolClock} />
                    <div className={styles.clockTitle}>Mais agilidade</div>
                    <div className={styles.clockText}> Tenha uma campanha inteira <br/>nas mãos em poucos cliques.</div>
                </div>
                <div className={styles.escalabilityBox}>
                    <div className={styles.symbolBoxes} />
                    <div className={styles.boxesTitle}>Mais escalabilidade</div>
                    <div className={styles.boxesText}>Crie milhares de peças a partir de uma só.</div>
                </div>
            </div>
            <div className={styles.presentation}>
                <div className={styles.presentationTitle}>Revolucione a sua operação!</div>
                <div className={styles.presentationText1}>O <b>re.animate</b> é dividido em três módulos:</div>
                <div className={styles.presentationLogos}>
                    <div className={styles.logoMM} />
                    <div className={styles.logoRA} />
                    <div className={styles.logoDA} />
                </div>
                <div className={styles.presentationText2}>Três programas que vão trazer automação a sua linha de produção de banners.</div>
            </div>
            <div className={styles.mastermotionbox}>
                <div className={styles.mmboxLogoText}>
                    <div className={styles.mmboxLogo} />
                    <div className={styles.mmboxText}>Nunca foi tão fácil criar banners animados. A partir do KV (psd), você pode animar as peças master em HTML5 sem a necessidade de saber o código CSS ou JavaScript.</div>
                </div>
                <div className={styles.mmboxVideoButton}>
                    <div className={styles.mmboxVideo}><ReactPlayer url="https://www.youtube.com/watch?v=SM87-7F03wQ"/></div>
                    <button className={styles.mmboxButton} onClick={openPlans}>Contrate agora<div className={styles.mmboxButtonArrow} /></button>
                </div>
            </div>
            <div className={styles.blankSpace}></div>
            <div className={styles.replicateadsbox}>
                <div className={styles.raboxLogoText}>
                    <div className={styles.raboxLogo} />
                    <div className={styles.raboxText}>O formato perfeito para sua necessidade. Desdobre a peça master, animada pelo primeiro módulo, em diversos formatos e especificações de mídia: Vertical, horizontal, quadrado e mobile.</div>
                </div>
                <div className={styles.raboxVideoButton}>
                    <div className={styles.raboxVideo}><ReactPlayer url="https://www.youtube.com/watch?v=F6nh2AEccgI"/></div>
                    <button className={styles.raboxButton} onClick={openPlans}>Contrate agora<div className={styles.raboxButtonArrow} /></button>
                </div>
            </div>
            <div className={styles.blankSpace}></div>
            <div className={styles.dynamicadsbox}>
                <div className={styles.daboxLogoText}>
                    <div className={styles.daboxLogo} />
                    <div className={styles.daboxText}>Ter muitos produtos e ofertas para divulgar não é mais dor de cabeça. Crie diversas variações de conteúdos dinâmicos.</div>
                </div>
                <div className={styles.daboxVideoButton}>
                    <div className={styles.daboxVideo}><ReactPlayer url="https://www.youtube.com/watch?v=Db2IkF4MmX8"/></div>
                    <button className={styles.daboxButton} onClick={openPlans}>Contrate agora<div className={styles.daboxButtonArrow} /></button>
                </div>
            </div>
            <div className={styles.blankSpace}></div>
            <div className={styles.about}>
                <div className={styles.aboutBG} />
                <div className={styles.aboutTitle}>O <span className={styles.aboutTitleReanimate}>re.animate</span> é uma solução Point Media.</div>
                <div className={styles.aboutArrowRight} />
                <div className={styles.aboutText}>Fundada em 2017, a Point Media é especializada em ajudar empresas a vencerem os desafios da transformação digital. Atuamos no processo operacional de mídia-online, produção digital e soluções de Martech para que a comunicação dos nossos clientes possa ser cada vez mais assertiva dentro de um mercado em constante evolução. <br/><br/>Conheça também nossas soluções para DCO, Media Control e ADOPs.</div>
                <div className={styles.aboutArrowLeft} />
            </div>
            <div className={styles.carousel}>
                <div className={styles.carouselTitle}>Nossos clientes:</div>
                {size.width >= 1200 ?
                <swiper-container ref={paginationRef} init="false">
                    <SwiperSlide>
                        <div style={{display: 'flex'}}>
                            <div className={styles.client1} />
                            <div className={styles.client2} />
                            <div className={styles.client3} />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                    <div style={{display: 'flex'}}>
                        <div className={styles.client4} />
                        <div className={styles.client5} />
                        <div className={styles.client6} />
                    </div>
                    </SwiperSlide>
                    <SwiperSlide>
                    <div style={{display: 'flex'}}>
                        <div className={styles.client7} />
                        <div className={styles.client8} />
                        <div className={styles.client9} />
                    </div>
                    </SwiperSlide>
                </swiper-container>
                :
                <swiper-container ref={paginationRef} init="false">
                    <SwiperSlide>
                        <div className={styles.client1} />
                        <div className={styles.client2} />
                        <div className={styles.client3} />
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className={styles.client4} />
                        <div className={styles.client5} />
                        <div className={styles.client6} />
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className={styles.client7} />
                        <div className={styles.client8} />
                        <div className={styles.client9} />
                    </SwiperSlide>
                </swiper-container>
                }
            </div>
            <div className={styles.footer}>
                <div className={styles.footerText}>©2023 PointMedia</div>
                <div className={styles.footerSocialMedia}>
                    <div className={styles.footerIconFb} onClick={fbLink} />
                    <div className={styles.footerIconInsta} onClick={instaLink} />
                    <div className={styles.footerIconLinkedin} onClick={linkedinLink} />
                </div>
                <button className={styles.footerButton} onClick={openPlans}>Começe agora <span className={styles.footerButtonArrow} /></button>
            </div>
        </div>
            }     
        </div>
    </div>
    )
}