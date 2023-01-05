import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Home.module.css";

const Home: FunctionComponent = () => {
  const navigate = useNavigate();

  const onViewAllClick = useCallback(() => {
    // Please sync "Projects" to the project
  }, []);

  const onFrameContainer112Click = useCallback(() => {
    navigate("/home");
  }, [navigate]);

  const onHeaderLinkContainerClick = useCallback(() => {
    navigate("/home");
  }, [navigate]);

  return (
    <div className={styles.home}>
      <div className={styles.background}>
        <div className={styles.frameParent}>
          <div className={styles.ellipseParent}>
            <img className={styles.frameChild} alt="" src="../ellipse-23.svg" />
            <img className={styles.frameChild} alt="" src="../ellipse-21.svg" />
            <img className={styles.frameChild} alt="" src="../ellipse-22.svg" />
            <img className={styles.frameChild} alt="" src="../ellipse-20.svg" />
            <img className={styles.frameChild} alt="" />
          </div>
          <div className={styles.ellipseParent}>
            <img className={styles.frameChild} alt="" src="../ellipse-25.svg" />
            <img className={styles.frameChild} alt="" src="../ellipse-26.svg" />
            <img className={styles.frameChild} alt="" src="../ellipse-24.svg" />
            <img className={styles.frameChild} alt="" src="../ellipse-19.svg" />
            <img className={styles.frameChild} alt="" />
          </div>
          <div className={styles.ellipseParent}>
            <img className={styles.frameChild} alt="" src="../ellipse-29.svg" />
            <img className={styles.frameChild} alt="" src="../ellipse-30.svg" />
            <img className={styles.frameChild} alt="" src="../ellipse-28.svg" />
            <img
              className={styles.frameChild}
              alt=""
              src="../ellipse-191.svg"
            />
            <img className={styles.frameChild} alt="" />
          </div>
          <div className={styles.ellipseParent}>
            <img className={styles.frameChild} alt="" src="../ellipse-33.svg" />
            <img className={styles.frameChild} alt="" src="../ellipse-34.svg" />
            <img className={styles.frameChild} alt="" src="../ellipse-32.svg" />
            <img
              className={styles.frameChild}
              alt=""
              src="../ellipse-192.svg"
            />
            <img className={styles.frameChild} alt="" />
          </div>
          <div className={styles.ellipseParent}>
            <img className={styles.frameChild} alt="" src="../ellipse-23.svg" />
            <img className={styles.frameChild} alt="" src="../ellipse-21.svg" />
            <img className={styles.frameChild} alt="" src="../ellipse-22.svg" />
            <img className={styles.frameChild} alt="" src="../ellipse-20.svg" />
            <img className={styles.frameChild} alt="" />
          </div>
        </div>
        <div className={styles.frameGroup}>
          <div className={styles.ellipseParent}>
            <img className={styles.frameChild} alt="" />
            <img className={styles.frameChild} alt="" />
            <img
              className={styles.frameChild}
              alt=""
              src="../ellipse-221.svg"
            />
            <img className={styles.frameChild} alt="" src="../ellipse-20.svg" />
            <img className={styles.frameChild} alt="" src="../ellipse-23.svg" />
          </div>
          <div className={styles.ellipseParent}>
            <img className={styles.frameChild} alt="" />
            <img className={styles.frameChild} alt="" />
            <img
              className={styles.frameChild}
              alt=""
              src="../ellipse-241.svg"
            />
            <img className={styles.frameChild} alt="" src="../ellipse-19.svg" />
            <img className={styles.frameChild} alt="" src="../ellipse-25.svg" />
          </div>
          <div className={styles.ellipseParent}>
            <img className={styles.frameChild} alt="" />
            <img className={styles.frameChild} alt="" />
            <img
              className={styles.frameChild}
              alt=""
              src="../ellipse-281.svg"
            />
            <img
              className={styles.frameChild}
              alt=""
              src="../ellipse-191.svg"
            />
            <img className={styles.frameChild} alt="" src="../ellipse-29.svg" />
          </div>
          <div className={styles.ellipseParent}>
            <img className={styles.frameChild} alt="" />
            <img className={styles.frameChild} alt="" />
            <img
              className={styles.frameChild}
              alt=""
              src="../ellipse-322.svg"
            />
            <img
              className={styles.frameChild}
              alt=""
              src="../ellipse-192.svg"
            />
            <img className={styles.frameChild} alt="" src="../ellipse-33.svg" />
          </div>
          <div className={styles.ellipseParent}>
            <img className={styles.frameChild} alt="" />
            <img className={styles.frameChild} alt="" />
            <img
              className={styles.frameChild}
              alt=""
              src="../ellipse-221.svg"
            />
            <img className={styles.frameChild} alt="" src="../ellipse-20.svg" />
            <img className={styles.frameChild} alt="" src="../ellipse-23.svg" />
          </div>
        </div>
        <div className={styles.frameContainer}>
          <div className={styles.ellipseParent}>
            <img className={styles.frameChild} alt="" />
            <img className={styles.frameChild} alt="" />
            <img className={styles.frameChild} alt="" />
            <img className={styles.frameChild} alt="" src="../ellipse-23.svg" />
            <img className={styles.frameChild} alt="" src="../ellipse-23.svg" />
          </div>
          <div className={styles.ellipseParent}>
            <img className={styles.frameChild} alt="" />
            <img className={styles.frameChild} alt="" />
            <img className={styles.frameChild} alt="" />
            <img className={styles.frameChild} alt="" src="../ellipse-23.svg" />
            <img className={styles.frameChild} alt="" src="../ellipse-23.svg" />
          </div>
          <div className={styles.ellipseParent}>
            <img className={styles.frameChild} alt="" />
            <img className={styles.frameChild} alt="" />
            <img className={styles.frameChild} alt="" />
            <img className={styles.frameChild} alt="" src="../ellipse-23.svg" />
            <img className={styles.frameChild} alt="" src="../ellipse-23.svg" />
          </div>
          <div className={styles.ellipseParent}>
            <img className={styles.frameChild} alt="" />
            <img className={styles.frameChild} alt="" />
            <img className={styles.frameChild} alt="" />
            <img className={styles.frameChild} alt="" src="../ellipse-23.svg" />
            <img className={styles.frameChild} alt="" src="../ellipse-23.svg" />
          </div>
          <div className={styles.ellipseParent}>
            <img className={styles.frameChild} alt="" />
            <img className={styles.frameChild} alt="" />
            <img className={styles.frameChild} alt="" />
            <img className={styles.frameChild} alt="" src="../ellipse-23.svg" />
            <img className={styles.frameChild} alt="" src="../ellipse-23.svg" />
          </div>
        </div>
        <div className={styles.backgroundChild} />
        <div className={styles.backgroundItem} />
        <div className={styles.backgroundInner} />
      </div>
      <div className={styles.footer}>
        <div className={styles.footerChild} />
        <div className={styles.frameParent1}>
          <div className={styles.groupParent}>
            <div className={styles.groupContainer}>
              <div className={styles.eliasParent}>
                <b className={styles.elias}>Elias</b>
                <div className={styles.logo}>
                  <div className={styles.union}>
                    <div className={styles.unionChild} />
                    <div className={styles.unionItem} />
                    <div className={styles.unionInner} />
                    <div className={styles.rectangleDiv} />
                    <div className={styles.unionChild1} />
                    <div className={styles.unionChild2} />
                    <div className={styles.unionChild3} />
                    <div className={styles.unionChild4} />
                    <div className={styles.unionChild5} />
                    <div className={styles.unionChild6} />
                  </div>
                </div>
              </div>
              <div className={styles.webDesignerAnd}>
                Web designer and front-end developer based in Ukraine
              </div>
              <div className={styles.eliaseliasml}>elias@elias.ml</div>
            </div>
            <div className={styles.mediaParent}>
              <div className={styles.media}>Media</div>
              <img className={styles.groupChild} alt="" src="../group-22.svg" />
            </div>
          </div>
          <div className={styles.copyright2022Made}>
            © Copyright 2022. Made by Elias
          </div>
        </div>
      </div>
      <div className={styles.contact}>
        <div className={styles.groupDiv}>
          <div className={styles.parent}>
            <div className={styles.div}>#</div>
            <div className={styles.projects}>contacts</div>
          </div>
          <img
            className={styles.line7Stroke}
            alt=""
            src="../line-7-stroke.svg"
          />
        </div>
        <div className={styles.imInterestedInFreelanceOpWrapper}>
          <div className={styles.imInterestedIn}>
            I’m interested in freelance opportunities. However, if you have
            other request or question, don’t hesitate to contact me
          </div>
        </div>
        <div className={styles.contactInner}>
          <div className={styles.messageMeHereParent}>
            <div className={styles.messageMeHere}>Message me here</div>
            <div className={styles.instanceParent}>
              <div className={styles.discordParent}>
                <img
                  className={styles.discordIcon}
                  alt=""
                  src="../discord.svg"
                />
                <div className={styles.typescript}>!Elias#3519</div>
              </div>
              <div className={styles.discordParent}>
                <img className={styles.discordIcon} alt="" src="../email.svg" />
                <div className={styles.typescript}>elias@elias.me</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.aboutMe}>
        <div className={styles.aboutMe1}>
          <div className={styles.helloImEliasContainer}>
            <p className={styles.helloImElias}>Hello, i’m Elias!</p>
            <p className={styles.helloImElias}>&nbsp;</p>
            <p
              className={styles.helloImElias}
            >{`I’m a self-taught front-end developer based in Kyiv, Ukraine. I can develop responsive websites from scratch and raise them into modern user-friendly web experiences. `}</p>
            <p className={styles.helloImElias}>&nbsp;</p>
            <p className={styles.transformingMyCreativity}>
              Transforming my creativity and knowledge into a websites has been
              my passion for over a year. I have been helping various clients to
              establish their presence online. I always strive to learn about
              the newest technologies and frameworks.
            </p>
          </div>
          <div className={styles.button}>
            <div className={styles.div}>{`Read more ->`}</div>
          </div>
        </div>
        <div className={styles.frameParent2}>
          <div className={styles.parent}>
            <div className={styles.div}>#</div>
            <div className={styles.projects}>about-me</div>
          </div>
          <img
            className={styles.line7Stroke}
            alt=""
            src="../line-7-stroke1.svg"
          />
        </div>
        <div className={styles.jcGellidonE3numcscugoUnsplaParent}>
          <img
            className={styles.jcGellidonE3numcscugoUnsplaIcon}
            alt=""
            src="../jcgellidone3numcscugounsplashremovebgpreview1-1@2x.png"
          />
          <div className={styles.frameParent3}>
            <div className={styles.ellipseParent}>
              <img
                className={styles.frameChild}
                alt=""
                src="../ellipse-23.svg"
              />
              <img
                className={styles.frameChild}
                alt=""
                src="../ellipse-23.svg"
              />
              <img
                className={styles.frameChild}
                alt=""
                src="../ellipse-23.svg"
              />
              <img
                className={styles.frameChild}
                alt=""
                src="../ellipse-23.svg"
              />
              <img
                className={styles.frameChild}
                alt=""
                src="../ellipse-23.svg"
              />
            </div>
            <div className={styles.ellipseParent}>
              <img
                className={styles.frameChild}
                alt=""
                src="../ellipse-23.svg"
              />
              <img
                className={styles.frameChild}
                alt=""
                src="../ellipse-23.svg"
              />
              <img
                className={styles.frameChild}
                alt=""
                src="../ellipse-23.svg"
              />
              <img
                className={styles.frameChild}
                alt=""
                src="../ellipse-23.svg"
              />
              <img
                className={styles.frameChild}
                alt=""
                src="../ellipse-23.svg"
              />
            </div>
            <div className={styles.ellipseParent}>
              <img
                className={styles.frameChild}
                alt=""
                src="../ellipse-23.svg"
              />
              <img
                className={styles.frameChild}
                alt=""
                src="../ellipse-23.svg"
              />
              <img
                className={styles.frameChild}
                alt=""
                src="../ellipse-23.svg"
              />
              <img
                className={styles.frameChild}
                alt=""
                src="../ellipse-23.svg"
              />
              <img
                className={styles.frameChild}
                alt=""
                src="../ellipse-23.svg"
              />
            </div>
            <div className={styles.ellipseParent}>
              <img
                className={styles.frameChild}
                alt=""
                src="../ellipse-23.svg"
              />
              <img
                className={styles.frameChild}
                alt=""
                src="../ellipse-23.svg"
              />
              <img
                className={styles.frameChild}
                alt=""
                src="../ellipse-23.svg"
              />
              <img
                className={styles.frameChild}
                alt=""
                src="../ellipse-23.svg"
              />
              <img
                className={styles.frameChild}
                alt=""
                src="../ellipse-23.svg"
              />
            </div>
            <div className={styles.ellipseParent}>
              <img
                className={styles.frameChild}
                alt=""
                src="../ellipse-23.svg"
              />
              <img
                className={styles.frameChild}
                alt=""
                src="../ellipse-23.svg"
              />
              <img
                className={styles.frameChild}
                alt=""
                src="../ellipse-23.svg"
              />
              <img
                className={styles.frameChild}
                alt=""
                src="../ellipse-23.svg"
              />
              <img
                className={styles.frameChild}
                alt=""
                src="../ellipse-23.svg"
              />
            </div>
          </div>
          <div className={styles.frameParent4}>
            <div className={styles.ellipseParent}>
              <img
                className={styles.frameChild}
                alt=""
                src="../ellipse-23.svg"
              />
              <img
                className={styles.frameChild}
                alt=""
                src="../ellipse-23.svg"
              />
              <img
                className={styles.frameChild}
                alt=""
                src="../ellipse-23.svg"
              />
              <img
                className={styles.frameChild}
                alt=""
                src="../ellipse-23.svg"
              />
              <img
                className={styles.frameChild}
                alt=""
                src="../ellipse-23.svg"
              />
            </div>
            <div className={styles.ellipseParent}>
              <img
                className={styles.frameChild}
                alt=""
                src="../ellipse-252.svg"
              />
              <img
                className={styles.frameChild}
                alt=""
                src="../ellipse-252.svg"
              />
              <img
                className={styles.frameChild}
                alt=""
                src="../ellipse-252.svg"
              />
              <img
                className={styles.frameChild}
                alt=""
                src="../ellipse-252.svg"
              />
              <img
                className={styles.frameChild}
                alt=""
                src="../ellipse-252.svg"
              />
            </div>
            <div className={styles.ellipseParent}>
              <img
                className={styles.frameChild}
                alt=""
                src="../ellipse-292.svg"
              />
              <img
                className={styles.frameChild}
                alt=""
                src="../ellipse-292.svg"
              />
              <img
                className={styles.frameChild}
                alt=""
                src="../ellipse-292.svg"
              />
              <img
                className={styles.frameChild}
                alt=""
                src="../ellipse-292.svg"
              />
              <img
                className={styles.frameChild}
                alt=""
                src="../ellipse-292.svg"
              />
            </div>
            <div className={styles.ellipseParent20}>
              <img
                className={styles.frameChild}
                alt=""
                src="../ellipse-23.svg"
              />
              <img
                className={styles.frameChild}
                alt=""
                src="../ellipse-23.svg"
              />
              <img
                className={styles.frameChild}
                alt=""
                src="../ellipse-23.svg"
              />
              <img
                className={styles.frameChild}
                alt=""
                src="../ellipse-23.svg"
              />
              <img
                className={styles.frameChild}
                alt=""
                src="../ellipse-23.svg"
              />
            </div>
            <div className={styles.ellipseParent}>
              <img
                className={styles.frameChild}
                alt=""
                src="../ellipse-23.svg"
              />
              <img
                className={styles.frameChild}
                alt=""
                src="../ellipse-23.svg"
              />
              <img
                className={styles.frameChild}
                alt=""
                src="../ellipse-23.svg"
              />
              <img
                className={styles.frameChild}
                alt=""
                src="../ellipse-23.svg"
              />
              <img
                className={styles.frameChild}
                alt=""
                src="../ellipse-23.svg"
              />
            </div>
          </div>
          <img
            className={styles.line7Stroke2}
            alt=""
            src="../line-7-stroke2.svg"
          />
        </div>
      </div>
      <div className={styles.skills}>
        <div className={styles.frameParent5}>
          <div className={styles.parent}>
            <div className={styles.div}>#</div>
            <div className={styles.projects}>skills</div>
          </div>
          <img
            className={styles.line7Stroke}
            alt=""
            src="../line-7-stroke3.svg"
          />
        </div>
        <div className={styles.blockParent}>
          <div className={styles.block}>
            <div className={styles.languagesWrapper}>
              <div className={styles.messageMeHere}>Languages</div>
            </div>
            <div className={styles.blockChild} />
            <div className={styles.frameParent6}>
              <div className={styles.typescriptParent}>
                <div className={styles.typescript}>TypeScript</div>
                <div className={styles.typescript}>Lua</div>
                <div className={styles.lua1}>Lua</div>
                <div className={styles.lua1}>Lua</div>
              </div>
              <div className={styles.typescriptParent}>
                <div className={styles.typescript}>Python</div>
                <div className={styles.typescript}>JavaScript</div>
                <div className={styles.lua1}>JavaScript</div>
              </div>
              <div className={styles.pythonGroup}>
                <div className={styles.typescript}>Python</div>
                <div className={styles.typescript}>JavaScript</div>
              </div>
              <div className={styles.pythonGroup}>
                <div className={styles.typescript}>Python</div>
                <div className={styles.typescript}>JavaScript</div>
              </div>
            </div>
          </div>
          <div className={styles.frameParent7}>
            <div className={styles.languagesWrapper}>
              <div className={styles.messageMeHere}>Databases</div>
            </div>
            <div className={styles.blockChild} />
            <div className={styles.frameParent6}>
              <div className={styles.typescriptParent}>
                <div className={styles.typescript}>SQLite</div>
                <div className={styles.typescript}>PostgreSQL</div>
                <div className={styles.lua1}>Lua</div>
                <div className={styles.lua1}>Lua</div>
              </div>
              <div className={styles.typescriptParent}>
                <div className={styles.typescript}>Mongo</div>
                <div className={styles.lua1}>avaScript</div>
                <div className={styles.lua1}>JavaScript</div>
              </div>
              <div className={styles.pythonGroup}>
                <div className={styles.typescript}>Python</div>
                <div className={styles.typescript}>JavaScript</div>
              </div>
              <div className={styles.pythonGroup}>
                <div className={styles.typescript}>Python</div>
                <div className={styles.typescript}>JavaScript</div>
              </div>
            </div>
          </div>
          <div className={styles.frameParent9}>
            <div className={styles.languagesWrapper}>
              <div className={styles.messageMeHere}>Frameworks</div>
            </div>
            <div className={styles.blockChild} />
            <div className={styles.frameParent6}>
              <div className={styles.typescriptParent}>
                <div className={styles.typescript}>React</div>
                <div className={styles.typescript}>Vue</div>
                <div className={styles.lua1}>Lua</div>
                <div className={styles.lua1}>Lua</div>
              </div>
              <div className={styles.typescriptParent}>
                <div className={styles.typescript}>Disnake</div>
                <div className={styles.typescript}>Discord.js</div>
                <div className={styles.lua1}>JavaScript</div>
              </div>
              <div className={styles.pythonParent5}>
                <div className={styles.typescript}>Flask</div>
                <div className={styles.typescript}>Express.js</div>
              </div>
              <div className={styles.pythonGroup}>
                <div className={styles.typescript}>Python</div>
                <div className={styles.typescript}>JavaScript</div>
              </div>
            </div>
          </div>
          <div className={styles.frameParent11}>
            <div className={styles.languagesWrapper}>
              <div className={styles.messageMeHere}>Other</div>
            </div>
            <div className={styles.blockChild} />
            <div className={styles.frameParent6}>
              <div className={styles.typescriptParent}>
                <div className={styles.typescript}>HTML</div>
                <div className={styles.typescript}>CSS</div>
                <div className={styles.typescript}>EJS</div>
                <div className={styles.typescript}>SCSS</div>
              </div>
              <div className={styles.typescriptParent}>
                <div className={styles.typescript}>REST</div>
                <div className={styles.typescript}>Jinja</div>
                <div className={styles.lua1}>JavaScript</div>
              </div>
              <div className={styles.pythonGroup}>
                <div className={styles.typescript}>Jinja</div>
                <div className={styles.lua1}>Express.js</div>
              </div>
              <div className={styles.pythonGroup}>
                <div className={styles.typescript}>Python</div>
                <div className={styles.typescript}>JavaScript</div>
              </div>
            </div>
          </div>
          <div className={styles.frameParent13}>
            <div className={styles.languagesWrapper}>
              <div className={styles.messageMeHere}>Tools</div>
            </div>
            <div className={styles.blockChild} />
            <div className={styles.frameParent6}>
              <div className={styles.typescriptParent}>
                <div className={styles.typescript}>VSCode</div>
                <div className={styles.typescript}>Neovim</div>
                <div className={styles.lua1}>Lua</div>
                <div className={styles.typescript}>Linux</div>
              </div>
              <div className={styles.typescriptParent}>
                <div className={styles.typescript}>Figma</div>
                <div className={styles.typescript}>XFCE</div>
                <div className={styles.typescript}>Arch</div>
              </div>
              <div className={styles.pythonParent5}>
                <div className={styles.typescript}>Git</div>
                <div className={styles.typescript}>Font Awesome</div>
              </div>
              <div className={styles.pythonGroup}>
                <div className={styles.typescript}>Python</div>
                <div className={styles.typescript}>JavaScript</div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.instanceGroup}>
          <div className={styles.frameParent15}>
            <div className={styles.ellipseParent}>
              <img
                className={styles.frameChild}
                alt=""
                src="../ellipse-23.svg"
              />
              <img
                className={styles.frameChild}
                alt=""
                src="../ellipse-21.svg"
              />
              <img
                className={styles.frameChild}
                alt=""
                src="../ellipse-22.svg"
              />
              <img
                className={styles.frameChild}
                alt=""
                src="../ellipse-20.svg"
              />
              <img
                className={styles.frameChild}
                alt=""
                src="../ellipse-23.svg"
              />
            </div>
            <div className={styles.ellipseParent}>
              <img
                className={styles.frameChild}
                alt=""
                src="../ellipse-25.svg"
              />
              <img
                className={styles.frameChild}
                alt=""
                src="../ellipse-26.svg"
              />
              <img
                className={styles.frameChild}
                alt=""
                src="../ellipse-24.svg"
              />
              <img
                className={styles.frameChild}
                alt=""
                src="../ellipse-19.svg"
              />
              <img
                className={styles.frameChild}
                alt=""
                src="../ellipse-25.svg"
              />
            </div>
            <div className={styles.ellipseParent}>
              <img
                className={styles.frameChild}
                alt=""
                src="../ellipse-29.svg"
              />
              <img
                className={styles.frameChild}
                alt=""
                src="../ellipse-30.svg"
              />
              <img
                className={styles.frameChild}
                alt=""
                src="../ellipse-28.svg"
              />
              <img
                className={styles.frameChild}
                alt=""
                src="../ellipse-191.svg"
              />
              <img
                className={styles.frameChild}
                alt=""
                src="../ellipse-29.svg"
              />
            </div>
            <div className={styles.ellipseParent}>
              <img
                className={styles.frameChild}
                alt=""
                src="../ellipse-33.svg"
              />
              <img
                className={styles.frameChild}
                alt=""
                src="../ellipse-34.svg"
              />
              <img
                className={styles.frameChild}
                alt=""
                src="../ellipse-32.svg"
              />
              <img
                className={styles.frameChild}
                alt=""
                src="../ellipse-192.svg"
              />
              <img
                className={styles.frameChild}
                alt=""
                src="../ellipse-33.svg"
              />
            </div>
            <div className={styles.ellipseParent}>
              <img
                className={styles.frameChild}
                alt=""
                src="../ellipse-23.svg"
              />
              <img
                className={styles.frameChild}
                alt=""
                src="../ellipse-21.svg"
              />
              <img
                className={styles.frameChild}
                alt=""
                src="../ellipse-22.svg"
              />
              <img
                className={styles.frameChild}
                alt=""
                src="../ellipse-20.svg"
              />
              <img
                className={styles.frameChild}
                alt=""
                src="../ellipse-23.svg"
              />
            </div>
          </div>
          <div className={styles.frameParent16}>
            <div className={styles.ellipseParent}>
              <img
                className={styles.frameChild}
                alt=""
                src="../ellipse-23.svg"
              />
              <img
                className={styles.frameChild}
                alt=""
                src="../ellipse-21.svg"
              />
              <img
                className={styles.frameChild}
                alt=""
                src="../ellipse-22.svg"
              />
              <img
                className={styles.frameChild}
                alt=""
                src="../ellipse-20.svg"
              />
              <img
                className={styles.frameChild}
                alt=""
                src="../ellipse-23.svg"
              />
            </div>
            <div className={styles.ellipseParent}>
              <img
                className={styles.frameChild}
                alt=""
                src="../ellipse-25.svg"
              />
              <img
                className={styles.frameChild}
                alt=""
                src="../ellipse-26.svg"
              />
              <img
                className={styles.frameChild}
                alt=""
                src="../ellipse-24.svg"
              />
              <img
                className={styles.frameChild}
                alt=""
                src="../ellipse-19.svg"
              />
              <img
                className={styles.frameChild}
                alt=""
                src="../ellipse-25.svg"
              />
            </div>
            <div className={styles.ellipseParent}>
              <img
                className={styles.frameChild}
                alt=""
                src="../ellipse-29.svg"
              />
              <img
                className={styles.frameChild}
                alt=""
                src="../ellipse-30.svg"
              />
              <img
                className={styles.frameChild}
                alt=""
                src="../ellipse-28.svg"
              />
              <img
                className={styles.frameChild}
                alt=""
                src="../ellipse-191.svg"
              />
              <img
                className={styles.frameChild}
                alt=""
                src="../ellipse-29.svg"
              />
            </div>
            <div className={styles.ellipseParent}>
              <img
                className={styles.frameChild}
                alt=""
                src="../ellipse-33.svg"
              />
              <img
                className={styles.frameChild}
                alt=""
                src="../ellipse-34.svg"
              />
              <img
                className={styles.frameChild}
                alt=""
                src="../ellipse-32.svg"
              />
              <img
                className={styles.frameChild}
                alt=""
                src="../ellipse-192.svg"
              />
              <img
                className={styles.frameChild}
                alt=""
                src="../ellipse-33.svg"
              />
            </div>
            <div className={styles.ellipseParent}>
              <img
                className={styles.frameChild}
                alt=""
                src="../ellipse-23.svg"
              />
              <img
                className={styles.frameChild}
                alt=""
                src="../ellipse-21.svg"
              />
              <img
                className={styles.frameChild}
                alt=""
                src="../ellipse-22.svg"
              />
              <img
                className={styles.frameChild}
                alt=""
                src="../ellipse-20.svg"
              />
              <img
                className={styles.frameChild}
                alt=""
                src="../ellipse-23.svg"
              />
            </div>
          </div>
          <div className={styles.groupItem} />
          <div className={styles.groupInner} />
          <img className={styles.logoIcon} alt="" src="../logo.svg" />
        </div>
      </div>
      <div className={styles.projects3}>
        <div className={styles.projectParent}>
          <div className={styles.project}>
            <img
              className={styles.projectChild}
              alt=""
              src="../rectangle-22@2x.png"
            />
            <div className={styles.htmlParent}>
              <div className={styles.typescript}>HTML</div>
              <div className={styles.typescript}>SCSS</div>
              <div className={styles.typescript}>Python</div>
              <div className={styles.typescript}>Flask</div>
              <div className={styles.lua1}>Flask</div>
              <div className={styles.lua1}>Flask</div>
            </div>
            <div className={styles.htmlGroup}>
              <div className={styles.typescript}>HTML</div>
              <div className={styles.typescript}>SCSS</div>
              <div className={styles.typescript}>Python</div>
              <div className={styles.typescript}>Flask</div>
              <div className={styles.lua1}>Flask</div>
              <div className={styles.lua1}>Flask</div>
            </div>
            <div className={styles.chertnodesParent}>
              <div className={styles.chertnodes}>ChertNodes</div>
              <div
                className={styles.minecraftServersHosting}
              >{`Minecraft servers hosting `}</div>
              <div className={styles.instanceContainer}>
                <div className={styles.liveWrapper}>
                  <div className={styles.div}>{`Live <~>`}</div>
                </div>
                <div className={styles.demoWrapper}>
                  <div className={styles.div}>{`Cached >=`}</div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.rectangleParent}>
            <img
              className={styles.projectChild}
              alt=""
              src="../rectangle-221@2x.png"
            />
            <div className={styles.htmlParent}>
              <div className={styles.typescript}>React</div>
              <div className={styles.typescript}>Express</div>
              <div className={styles.typescript}>Discord.js</div>
              <div className={styles.typescript}>Node.js</div>
              <div className={styles.lua1}>Flask</div>
              <div className={styles.lua1}>Flask</div>
            </div>
            <div className={styles.htmlParent}>
              <div className={styles.typescript}>HTML</div>
              <div className={styles.typescript}>SCSS</div>
              <div className={styles.typescript}>Python</div>
              <div className={styles.typescript}>Flask</div>
              <div className={styles.lua1}>Flask</div>
              <div className={styles.lua1}>Flask</div>
            </div>
            <div className={styles.chertnodesParent}>
              <div className={styles.chertnodes}>ProtectX</div>
              <div className={styles.minecraftServersHosting}>
                Discord anti-crash bot
              </div>
              <div className={styles.instanceContainer}>
                <div className={styles.liveWrapper}>
                  <div className={styles.div}>{`Live <~>`}</div>
                </div>
                <div className={styles.demoContainer}>
                  <div className={styles.div}>{`Cached >=`}</div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.project}>
            <img
              className={styles.projectChild}
              alt=""
              src="../rectangle-222@2x.png"
            />
            <div className={styles.htmlParent}>
              <div className={styles.typescript}>CSS</div>
              <div className={styles.typescript}>Express</div>
              <div className={styles.typescript}>Node.js</div>
              <div className={styles.lua1}>Flask</div>
              <div className={styles.lua1}>Flask</div>
              <div className={styles.lua1}>Flask</div>
            </div>
            <div className={styles.htmlGroup}>
              <div className={styles.typescript}>HTML</div>
              <div className={styles.typescript}>SCSS</div>
              <div className={styles.typescript}>Python</div>
              <div className={styles.typescript}>Flask</div>
              <div className={styles.lua1}>Flask</div>
              <div className={styles.lua1}>Flask</div>
            </div>
            <div className={styles.chertnodesParent}>
              <div className={styles.chertnodes}>Kahoot Answers Viewer</div>
              <div className={styles.minecraftServersHosting}>
                Get answers to your kahoot quiz
              </div>
              <div className={styles.instanceContainer}>
                <div className={styles.liveWrapper}>
                  <div className={styles.div}>{`Live <~>`}</div>
                </div>
                <div className={styles.demoContainer}>
                  <div className={styles.div}>{`Cached >=`}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.h2Parent}>
          <div className={styles.h2}>
            <div className={styles.parent}>
              <div className={styles.div}>#</div>
              <div className={styles.projects}>projects</div>
            </div>
            <img
              className={styles.line7Stroke}
              alt=""
              src="../line-7-stroke4.svg"
            />
          </div>
          <div
            className={styles.viewAll}
            onClick={onViewAllClick}
          >{`View all ~~>`}</div>
        </div>
      </div>
      <div className={styles.first}>
        <div className={styles.eliasIsAWebDesignerAndFrParent}>
          <div className={styles.eliasIsAContainer}>
            <span>{`Elias is a `}</span>
            <span className={styles.webDesigner}>web designer</span>
            <span>{` and `}</span>
            <span className={styles.webDesigner}>front-end developer</span>
          </div>
          <div className={styles.heCraftsResponsive}>
            He crafts responsive websites where technologies meet creativity
          </div>
          <div className={styles.button1}>
            <div className={styles.div}>Contact me!!</div>
          </div>
        </div>
        <div className={styles.logoParent}>
          <img className={styles.logoIcon1} alt="" src="../logo1.svg" />
          <img
            className={styles.imageRemovebgPreview2Icon}
            alt=""
            src="../imageremovebgpreview-2@2x.png"
          />
          <div className={styles.dots}>
            <div className={styles.ellipseParent}>
              <img
                className={styles.frameChild}
                alt=""
                src="../ellipse-23.svg"
              />
              <img
                className={styles.frameChild}
                alt=""
                src="../ellipse-23.svg"
              />
              <img
                className={styles.frameChild}
                alt=""
                src="../ellipse-23.svg"
              />
              <img
                className={styles.frameChild}
                alt=""
                src="../ellipse-23.svg"
              />
              <img
                className={styles.frameChild}
                alt=""
                src="../ellipse-23.svg"
              />
            </div>
            <div className={styles.ellipseParent}>
              <img
                className={styles.frameChild}
                alt=""
                src="../ellipse-23.svg"
              />
              <img
                className={styles.frameChild}
                alt=""
                src="../ellipse-23.svg"
              />
              <img
                className={styles.frameChild}
                alt=""
                src="../ellipse-23.svg"
              />
              <img
                className={styles.frameChild}
                alt=""
                src="../ellipse-23.svg"
              />
              <img
                className={styles.frameChild}
                alt=""
                src="../ellipse-23.svg"
              />
            </div>
            <div className={styles.ellipseParent}>
              <img
                className={styles.frameChild}
                alt=""
                src="../ellipse-23.svg"
              />
              <img
                className={styles.frameChild}
                alt=""
                src="../ellipse-23.svg"
              />
              <img
                className={styles.frameChild}
                alt=""
                src="../ellipse-23.svg"
              />
              <img
                className={styles.frameChild}
                alt=""
                src="../ellipse-23.svg"
              />
              <img
                className={styles.frameChild}
                alt=""
                src="../ellipse-23.svg"
              />
            </div>
            <div className={styles.ellipseParent}>
              <img
                className={styles.frameChild}
                alt=""
                src="../ellipse-23.svg"
              />
              <img
                className={styles.frameChild}
                alt=""
                src="../ellipse-23.svg"
              />
              <img
                className={styles.frameChild}
                alt=""
                src="../ellipse-23.svg"
              />
              <img
                className={styles.frameChild}
                alt=""
                src="../ellipse-23.svg"
              />
              <img
                className={styles.frameChild}
                alt=""
                src="../ellipse-23.svg"
              />
            </div>
            <div className={styles.ellipseParent}>
              <img
                className={styles.frameChild}
                alt=""
                src="../ellipse-23.svg"
              />
              <img
                className={styles.frameChild}
                alt=""
                src="../ellipse-23.svg"
              />
              <img
                className={styles.frameChild}
                alt=""
                src="../ellipse-23.svg"
              />
              <img
                className={styles.frameChild}
                alt=""
                src="../ellipse-23.svg"
              />
              <img
                className={styles.frameChild}
                alt=""
                src="../ellipse-23.svg"
              />
            </div>
          </div>
        </div>
        <div className={styles.rectangleContainer}>
          <div className={styles.frameChild197} />
          <div className={styles.typescript}>
            <span
              className={styles.currentlyWorkingOn}
            >{`Currently working on `}</span>
            <span className={styles.portfolio}>Portfolio</span>
          </div>
        </div>
      </div>
      <div className={styles.quote}>
        <div className={styles.withGreatPower}>
          With great power comes great electricity bill
        </div>
        <div className={styles.wrapper}>
          <img className={styles.icon} alt="" src="../.svg" />
        </div>
        <div className={styles.drWhoWrapper}>
          <div className={styles.typescript}>- Dr. Who</div>
        </div>
        <div className={styles.frame}>
          <img className={styles.icon} alt="" src="../.svg" />
        </div>
      </div>
      <div className={styles.header}>
        <div className={styles.logoGroup} onClick={onFrameContainer112Click}>
          <div className={styles.logo1}>
            <div className={styles.union1}>
              <div className={styles.unionChild} />
              <div className={styles.unionItem} />
              <div className={styles.unionInner} />
              <div className={styles.rectangleDiv} />
              <div className={styles.unionChild1} />
              <div className={styles.unionChild2} />
              <div className={styles.unionChild3} />
              <div className={styles.unionChild4} />
              <div className={styles.unionChild5} />
              <div className={styles.unionChild6} />
            </div>
          </div>
          <b className={styles.typescript}>Elias</b>
        </div>
        <div className={styles.headerLinkParent}>
          <div
            className={styles.headerLink}
            onClick={onHeaderLinkContainerClick}
          >
            <div className={styles.div}>#</div>
            <div className={styles.projects}>home</div>
          </div>
          <div className={styles.parent}>
            <div className={styles.typescript}>#</div>
            <div className={styles.copyright2022Made}>works</div>
          </div>
          <div className={styles.parent}>
            <div className={styles.typescript}>#</div>
            <div className={styles.copyright2022Made}>about-me</div>
          </div>
          <div className={styles.parent}>
            <div className={styles.typescript}>#</div>
            <div className={styles.copyright2022Made}>contacts</div>
          </div>
          <div className={styles.languageSwitcher}>
            <div className={styles.en}>EN</div>
            <img
              className={styles.languageSwitcherChild}
              alt=""
              src="../group-58.svg"
            />
            <div className={styles.ruParent}>
              <div className={styles.typescript}>RU</div>
              <div className={styles.typescript}>UA</div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.media1}>
        <img
          className={styles.line10Stroke}
          alt=""
          src="../line-10-stroke.svg"
        />
        <div className={styles.githubParent}>
          <img className={styles.discordIcon} alt="" src="../github.svg" />
          <img className={styles.discordIcon} alt="" src="../dribble.svg" />
          <img className={styles.discordIcon} alt="" src="../figma.svg" />
        </div>
      </div>
    </div>
  );
};

export default Home;
