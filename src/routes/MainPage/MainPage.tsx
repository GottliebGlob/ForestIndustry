import React, {useRef} from "react";

import {MainContainer, TextCont, DesContainer, FullHeightContainer} from "../../components/styled";

import NavigationBar from "../../components/NavigationBar";
import About from "../../components/About";
import Game from "../../components/Game";
import Faq from "../../components/Faq";
import Roadmap from "../../components/Roadmap";

import isMobile from "../../components/isMobile"

import logo from "../../img/logo.png"

import background from "../../img/back.png"
import {FaDiscord, FaTwitter} from "react-icons/fa";
import {useTheme} from "@material-ui/core";
import Rarity from "../../components/Rarity";
import Team from "../../components/Team";



export const MainPage = () => {
    const mobileMarker = isMobile()
    const theme = useTheme()

    const aboutRef = useRef<any>(null)
    const rarityRef = useRef<any>(null)
    const gameRef = useRef<any>(null)
    const tokenRef = useRef<any>(null)
    const faqRef = useRef<any>(null)
    const roadmapRef = useRef<any>(null)



    return (
        <main>
                <FullHeightContainer style={{
                    backgroundColor: theme.palette.primary.main
                }}>
                {
                    mobileMarker ?
                        <DesContainer maxWidth="md" style={{
                            marginBottom: '1rem'
                        }}>
                            <TextCont elevation={1}
                                      style={{
                                          padding: '0.5rem'
                                      }}
                            >
                                <div style={{
                                    display: 'flex',
                                    width: '100%',
                                    flexDirection: 'row',
                                    justifyContent: 'space-evenly',

                                }}>
                                    <FaDiscord style={{fontSize: 50, color: '#fff'}}
                                               onClick={()=> window.open("https://discord.gg/sVcy4xpGAu", "_blank")} />
                                    <FaTwitter style={{fontSize: 50, color: '#fff', }}
                                               onClick={()=> window.open("https://twitter.com/heroes_of_veil", "_blank")}
                                    />
                                </div> </TextCont> </DesContainer> :   <NavigationBar
                            aboutRef={aboutRef}
                            rarityRef={rarityRef}
                            gameRef={gameRef}
                            tokenRef={tokenRef}
                            faqRef={faqRef}
                            roadmapRef={roadmapRef}
                        />
                }

                    <img src={logo} alt="loading..."
                         style={{width: window.innerWidth > 530 ? "40%" : "90%", textAlign: 'center'}}/>

                    <About aboutRef={aboutRef} rarityRef={rarityRef}/>
                </FullHeightContainer>

            <FullHeightContainer style={{
                backgroundImage: `url(${background})`,
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover'
            }}>
              <Rarity rarityRef={rarityRef}  />

            </FullHeightContainer>

            <FullHeightContainer style={{
                backgroundColor: theme.palette.primary.main
            }}>
                <Game gameRef={gameRef}/>
            </FullHeightContainer>

            <FullHeightContainer style={{
                backgroundColor: theme.palette.primary.light
            }}>
            <Faq faqRef={faqRef}/>
            </FullHeightContainer>

            <FullHeightContainer style={{
                backgroundImage: `url(${background})`,
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover'
            }}>
            <Roadmap roadmapRef={roadmapRef}/>
            </FullHeightContainer>

            <FullHeightContainer style={{
                backgroundColor: theme.palette.primary.dark
            }}>
               <Team />
            </FullHeightContainer>

        </main>
    );
};


