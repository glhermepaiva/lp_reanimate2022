import styles from '../styles/Index.module.css'
import ReactPlayer from 'react-player'
import { useEffect, useState } from 'react'
import Link from 'next/link'
import Head from 'next/head'
import EmblaCarousel from '../components/EmblaCarousel'

export default function LandingPage() {

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

    const SLIDE_COUNT = 9;
    const slides = Array.from(Array(SLIDE_COUNT).keys());

    const [englishActive, setEnglishActive] = useState(false);

    function changePTBR () {
       setEnglishActive(false)
    }

    function changeENG () {
        setEnglishActive(true)
     }

    return (
        <div>
            <Head>
                <title>re.animate</title>
                <meta name='description' content='Transforme dias de trabalho em minutos com o re.animate.' />
            </Head>

            <div className={styles.langButtonToPTBR} onClick={changePTBR} />
            <div className={styles.langButtonToENG} onClick={changeENG} />
            
            {englishActive ? 

            <div>
            <div className={styles.header}>
            <div className={styles.headerImages}>
                <div className={styles.reanimateLogo} />
                <button className={styles.accessReanimButton} onClick={reanimLink} >Go to re.animate <div className={styles.accessReanimButtonArrow} /></button>
                <div className={styles.drawingGirl} >
                    {renderObjectSize()}
                </div>
            </div>
                <div className={styles.headerTitle}>Turn days of work into minutes with <span className={styles.headerTitleReanimate}>re.animate.</span></div>
                <div className={styles.headerText}>The automation platform that will revolutionize your digital banner production.</div>
                <Link href="/formen?uri=" as={"/formen"} >
                    <button className={styles.headerButton}>TRY IT NOW!<div className={styles.headerButtonArrow} /></button>
                </Link>   
                <div className={styles.promoVideo}><ReactPlayer url="https://www.youtube.com/watch?v=tH4jyWTEnfs"/></div>
        </div>
        <div className={styles.advantages}>
            <div className={styles.qualityBox}>
                <div className={styles.symbolCheck} />
                <div className={styles.checkTitle}>More Quality</div>
                <div className={styles.checkText}>Replicate your design template in various formats, both animated and static.</div>
            </div>
            <div className={styles.agilityBox}>
                <div className={styles.symbolClock} />
                <div className={styles.clockTitle}>More Agility</div>
                <div className={styles.clockText}> Have an entire advertising campaign in your hands in just a few clicks.</div>
            </div>
            <div className={styles.escalabilityBox}>
                <div className={styles.symbolBoxes} />
                <div className={styles.boxesTitle}>More scalability</div>
                <div className={styles.boxesText}>Create thousands of digital banners from one.</div>
            </div>
        </div>
        <div className={styles.presentation}>
            <div className={styles.presentationTitle}>Revolutionize your operation!</div>
            <div className={styles.presentationText1}><b>re.animate</b> is divided into three features:</div>
            <div className={styles.presentationLogos}>
                <div className={styles.logoMM} />
                <div className={styles.logoRA} />
                <div className={styles.logoDA} />
            </div>
            <div className={styles.presentationText2}>Three programs that will bring automation to your banner production line.</div>
        </div>
        <div className={styles.mastermotionbox}>
            <div className={styles.mmboxLogoText}>
                <div className={styles.mmboxLogo} />
                <div className={styles.mmboxText}>It&apos;s never been so easy to create animated banners. Utilizing your Key Visual, you can create HTML5 animated banners without the need to know CSS or JavaScript.</div>
            </div>
            <div className={styles.mmboxVideoButton}>
                <div className={styles.mmboxVideo}><ReactPlayer url="https://www.youtube.com/watch?v=SM87-7F03wQ"/></div>
                <Link href="/formen?uri=" as={"/formen"}>
                    <button className={styles.mmboxButton}>TRY IT NOW!<div className={styles.mmboxButtonArrow} /></button>
                </Link>
            </div>
        </div>
        <div className={styles.blankSpace}></div>
        <div className={styles.replicateadsbox}>
            <div className={styles.raboxLogoText}>
                <div className={styles.raboxLogo} />
                <div className={styles.raboxText}>The perfect format for your needs. Unfold your design template, animated by the first module, in different formats and media specifications: vertical, horizontal, square and mobile.</div>
            </div>
            <div className={styles.raboxVideoButton}>
                <div className={styles.raboxVideo}><ReactPlayer url="https://www.youtube.com/watch?v=F6nh2AEccgI"/></div>
                <Link href="/formen?uri=" as={"/formen"}>
                    <button className={styles.raboxButton}>TRY IT NOW!<div className={styles.raboxButtonArrow} /></button>
                </Link>
            </div>
        </div>
        <div className={styles.blankSpace}></div>
        <div className={styles.dynamicadsbox}>
            <div className={styles.daboxLogoText}>
                <div className={styles.daboxLogo} />
                <div className={styles.daboxText}>Having lots of products and offers to promote is no longer a headache. Easily create multiple variations of dynamic content.</div>
            </div>
            <div className={styles.daboxVideoButton}>
                <div className={styles.daboxVideo}><ReactPlayer url="https://www.youtube.com/watch?v=Db2IkF4MmX8"/></div>
                <Link href="/formen?uri=" as={"/formen"}>
                    <button className={styles.daboxButton}>TRY IT NOW!<div className={styles.daboxButtonArrow} /></button>
                </Link>
            </div>
        </div>
        <div className={styles.blankSpace}></div>
        <div className={styles.about}>
            <div className={styles.aboutBG} />
            <div className={styles.aboutTitle}><span className={styles.aboutTitleReanimate}>re.animate</span> is a Point Media solution.</div>
            <div className={styles.aboutArrowRight} />
            <div className={styles.aboutText}>Founded in 2017, Point Media specializes in helping companies overcome the challenges of digital transformation. We operate in processes such as online media, digital production and Martech solutions so that our customers&apos; communication can be increasingly assertive within a constantly evolving market. <br/><br/>Learn also about our solutions for DCO, Media Control and ADOPs.</div>
            <div className={styles.aboutArrowLeft} />
        </div>
        <div className={styles.carousel}>
            <div className={styles.carouselTitle}>Our clients:</div>
            <EmblaCarousel slides={slides} />
        </div>
        <div className={styles.footer}>
            <div className={styles.footerText}>©2022 PointMedia</div>
            <div className={styles.footerSocialMedia}>
                <div className={styles.footerIconFb} onClick={fbLink} />
                <div className={styles.footerIconInsta} onClick={instaLink} />
                <div className={styles.footerIconLinkedin} onClick={linkedinLink} />
            </div>
            <Link href="/formen?uri=" as={"/formen"}>
                <button className={styles.footerButton}>TRY IT NOW! <span className={styles.footerButtonArrow} /></button>
            </Link>
        </div>
        </div>

        : 

        <div>
        <div className={styles.header}>
                <div className={styles.headerImages}>
                    <div className={styles.reanimateLogo} />
                    <button className={styles.accessReanimButton} onClick={reanimLink} >Acesse o re.animate <div className={styles.accessReanimButtonArrow} /></button>
                    <div className={styles.drawingGirl} >
                        {renderObjectSize()}
                    </div>
                </div>
                    <div className={styles.headerTitle}>Transforme dias de trabalho em minutos com o <span className={styles.headerTitleReanimate}>re.animate.</span></div>
                    <div className={styles.headerText}>A plataforma de automação que vai revolucionar sua produção de banners digitais.</div>
                    <Link href="/formbr?uri=" as={"/formbr"} >
                        <button className={styles.headerButton}>Contrate agora <div className={styles.headerButtonArrow} /></button>
                    </Link>
                    <div className={styles.promoVideo}><ReactPlayer url="https://www.youtube.com/watch?v=tH4jyWTEnfs"/></div>
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
                    <Link href="/formbr?uri=" as={"/formbr"}>
                        <button className={styles.mmboxButton}>Contrate agora<div className={styles.mmboxButtonArrow} /></button>
                    </Link>
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
                    <Link href="/formbr?uri=" as={"/formbr"}>
                        <button className={styles.raboxButton}>Contrate agora<div className={styles.raboxButtonArrow} /></button>
                    </Link>
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
                    <Link href="/formbr?uri=" as={"/formbr"}>
                        <button className={styles.daboxButton}>Contrate agora<div className={styles.daboxButtonArrow} /></button>
                    </Link>
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
                <EmblaCarousel slides={slides} />
            </div>
            <div className={styles.footer}>
                <div className={styles.footerText}>©2022 PointMedia</div>
                <div className={styles.footerSocialMedia}>
                    <div className={styles.footerIconFb} onClick={fbLink} />
                    <div className={styles.footerIconInsta} onClick={instaLink} />
                    <div className={styles.footerIconLinkedin} onClick={linkedinLink} />
                </div>
                <Link href="/formbr?uri=" as={"/formbr"}>
                    <button className={styles.footerButton}>Contrate agora <span className={styles.footerButtonArrow} /></button>
                </Link>
            </div>
            </div>

        }
            
        </div>
    )
}