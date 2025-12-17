import React from 'react';
import './OldPage.css';

function OldPage() {
    return (
        <>
            <div className="jumbotron">
                <div className="resume">
                    <a href="OnlineResume.html">Resume</a>
                </div>
                <br/>
                <br/>
                <div className="ghub">
                    <a href="https://github.com/Freetown5">Github</a>
                </div>
                <br/>
                <br/>
                <div className ="linkedin">
                    <a href="https://www.linkedin.com/pub/isatu-conteh/16/b03/490">LinkedIn</a>
                </div>

                <a name="top">
                    <img className="img-responsive" src="./oldSiteImages/double-line-logo-main.jpg" alt="logo" />
                </a>

                <h2>Online Portfolio</h2>
            </div>
            <div className="link-container">
                <div className="row">
                    <div className="col-md-3 col-sm-6 col-xs-12">
                        <img src="./oldSiteImages/covercreateface.png" alt="CoverCreate" />
                        <p className="description"><a href="#covercreatemain">A templating app that helps job seekers create cover letters</a></p>
                    </div>

                    <div className="col-md-3 col-sm-6 col-xs-12">
                        <img src="./oldSiteImages/poliCface.png" alt="Policonnect" />
                        <p className="description"><a href="#policonnectmain">A DC Science Hackday site created to connect policy makers with academic experts</a></p>
                    </div>

                    <div className="col-md-3 col-sm-6 col-xs-12">
                        <img src="./oldSiteImages/techleapface.jpg.png" alt="TechLeap" />
                        <p className="description"><a href="#techleapmain">A web app created to attract professionals to the world of tech</a></p>
                    </div>

                    <div className="col-md-3 col-sm-6 col-xs-12">
                        <img src="./oldSiteImages/interviewappface.png" alt="Interview App" />
                        <p className="description"><a href="#interviewappmain">A web app that organizes interview information</a></p>
                    </div>

                    <div className="clearfix visable-md-block"></div>

                    <div className="col-md-3 col-sm-6 col-xs-12">
                        <img src="./oldSiteImages/talkwithaTeenGirlface.jpg" alt="Talk With a Teen Girl Hackathon Entry" />
                        <p className="description"><a href="#talkwithateengirlmain">My Code for Crittenton Hackathon submission</a></p>
                    </div>

                    <div className="col-md-3 col-sm-6 col-xs-12">
                        <img src="./oldSiteImages/bFCface.jpg" alt="Baltimore Farmers Connect" />
                        <p className="description"><a href="#bfcmain">My Baltimore hackathon website submission</a></p>
                    </div>

                    <div className="col-md-3 col-sm-6 col-xs-12">
                        <img src="./oldSiteImages/tortillaCafeface.jpg" alt="Tortilla Cafe Faux Redesign" />
                        <p className="description"><a href="#tortillacafemain">A practice website based off of a real restaurant in Eastern Market</a></p>
                    </div>

                    <div className="col-md-3 col-sm-6 col-xs-12">
                        <img src="./oldSiteImages/sAWface.jpg" alt="SAW Faux Redesign" />
                        <p className="description"><a href="#sawmain">Another practice website based off of a non-profit organization based in D.C.</a></p>
                    </div>
                </div>

                <div className="container-fluid" style={{ background: 'rgb(234, 223, 219)' }}>
                    <div className="LT">
                        <h1><a id="learningtoolsmain">
                        <span className="coming-soon blink">Coming Soon!</span> - Learning Tools
                        </a></h1>
                        <div className="summation">
                            <iframe src="//giphy.com/embed/ZVik7pBtu9dNS" width="480" height="268" frameBorder="0" className="giphy-embed" allowFullScreen></iframe><p><a href="http://giphy.com/gifs/life-interesting-footage-ZVik7pBtu9dNS">via GIPHY</a></p>
                        </div>
                        <p className="summation-new">My latest project, currently in progress is a website that is being created to help learners, primarily new ones choose between the most popular online learning tools based on several different factors like, their learning style, the amount of time they have, money thats available, or their distant or short-term goals. Techwise, this will be the first project I have available that will be done entirely in Javascript (Isomorhic Javascript) before being deployed using heroku. In the "MEAN"time, feel free to checkout the progress being made on my github page linked above.</p>
                        <a href="#top"><p className="back">Back to Top</p></a>
                    </div>
                </div>

                <div className="container-fluid" style={{ background: 'rgb(163, 193, 173)' }}>
                    <div className="CC">
                        <h1><a id="covercreatemain">
                        CoverCreate
                        </a></h1>
                            <div className="unslider">
                                <ul className="slides">
                                    <li>
                                        <img src="./oldSiteImages/CC/CC1.png" className="cc-sized" />
                                    </li>

                                    <li>
                                        <img src="./oldSiteImages/CC/CC2.png" className="cc-sized" />
                                    </li>

                                    <li>
                                        <img src="./oldSiteImages/CC/CC3.png" className="cc-sized" />
                                    </li>

                                    <li>
                                        <img src="./oldSiteImages/CC/CC4.png" className="cc-sized" />
                                    </li>

                                    <li>
                                        <img src="./oldSiteImages/CC/CC5.png" className="cc-sized"/>
                                    </li>
                                </ul>
                            </div>
                        <p className="summation">This was my final project for the Web Development Immersive Program I recently completed. It's a web app (created mainly in Ruby on Rails) that functions as an editable cover letter template. A user can input their information the company they are applying to's information and other relevant info, save it to the server and the upload it as a pdf to their computer. They can also go back and edit it. Stay tuned for future iterations.</p>
                        <h2 className="live-button"><a href="https://covercreate.herokuapp.com/">This site is live</a></h2>
                        <a href="#top"><p className="back">Back to Top</p></a>
                    </div>
                </div>
            </div>

            <div className="container-fluid" style={{ background:'rgb(242, 207, 179)' }}>
                <div className="PC">
                    <h1><a id="policonnectmain">
                    PoliConnect</a></h1>
                        <div className="unslider">
                            <ul className="slides">
                                <li>
                                    <img src="./oldSiteImages/PC/PoliC1.png" className="pc-sized" />
                                </li>

                                <li>
                                    <img src="./oldSiteImages/PC/PoliC2.png" className="pc-sized" />
                                </li>

                                <li>
                                    <img src="./oldSiteImages/PC/PoliC3.png" className="pc-sized" />
                                </li>

                                <li>
                                    <img src="./oldSiteImages/PC/PoliC4.png" className="pc-sized" />
                                </li>

                                <li>
                                    <img src="./oldSiteImages/PC/PoliC5.png" className="pc-sized" />
                                </li>
                            </ul>
                        </div>
                    <p className="summation">This is a website I created in collaboration with 4 other Web Development Immersive students, and intern at the Wilson Center and a Computer Science student at GW University at D.C. Science Hack Day. It's a web app meant to help policy makers and experts communicate with each other about certain topics with less red tape. It won the Policy Award and is being picked up by Amazon Web Services. We are also scheduled to present it to actual policy makers in the future</p>
                    <a href="#top"><p className="back">Back to Top</p></a>
                </div>
            </div>

            <div className="container-fluid" style={{ background:'rgb(234, 223, 219)' }}>
                <div className="TL">
                    <h1><a id="techleapmain">
                    TechLeap
                    </a></h1>
                        <div className="unslider">
                            <ul className="slides">
                                <li>
                                <img src="./oldSiteImages/TL/TL1.jpg.png" className="tl-sized" />
                                </li>

                                <li>
                                <img src="./oldSiteImages/TL/TL2.png" className="tl-sized" />
                                </li>

                                <li>
                                <img src="./oldSiteImages/TL/TL3.png" className="tl-sized" />
                                </li>

                                <li>
                                <img src="./oldSiteImages/TL/TL4.png" className="tl-sized" />
                                </li>

                                <li>
                                <img src="./oldSiteImages/TL/TL5.png" className="tl-sized" />
                                </li>
                            </ul>
                        </div>
                    <p className="summation">This is a project I worked on in collaboration with 2 other Web Development Immersive students and 2 User Experience students at General Assembly. It was an assignment developed by the USAToday tech team in Arlington, Virginia specifically for GA students. The purpose of the app is to attract future tech workers by showing them how their current skills and interests could benefit them in one of several different tech fields. It includes a quiz, a profile section and a results section.</p>
                    <h2 className="live-button"><a href="http://learntech.herokuapp.com/">This site is live</a></h2>
                    <a href="#top"><p className="back">Back to Top</p></a>
                </div>
            </div>

            <div className="container-fluid" style={{ background: 'rgb(163, 193, 173)' }}>
                <div className="IA">
                    <h1><a id="interviewappmain">
                    InterviewApp
                    </a></h1>
                        <div className="unslider">
                            <ul className="slides">
                                <li>
                                    <img src="Images/IA/IA1.png" className="ia-sized" />
                                </li>

                                <li>
                                    <img src="Images/IA/IA2.png" className="ia-sized" />
                                </li>

                                <li>
                                    <img src="Images/IA/IA3.png" className="ia-sized" />
                                </li>

                                <li>
                                    <img src="Images/IA/IA4.png" className="ia-sized" />
                                </li>

                                <li>
                                    <img src="Images/IA/IA5.png" className="ia-sized" />
                                </li>

                                <li>
                                    <img src="Images/IA/IA6.png" className="ia-sized" />
                                </li>
                            </ul>
                        </div>

                    <p className="summation">This was the second to last project I did during General Assembly's Web Development Immersive Program. It was done mainly in Ruby on Rails and is the first project I did on my own that went live. The purpose of this web app is to help job seekers organize their interviews and keep track of information associated with them including points of contact, actual interviewers and dates and times or interviews. I eventually plan to make it so that the app sends alerts for interviews via text in the future. Stay tuned.</p>
                    <h2 className="live-button"><a href="interview-schedule.herokuapp.com">This site is live</a></h2>
                    <a href="#top"><p className="back">Back to Top</p></a>
                </div>
            </div>

            <div className="container-fluid" style={{background: 'rgb(242, 207, 179)'}}>
                <div className="TwTG">
                    <h1><a id="talkwithateengirlmain">
                    Talk with a Teen Girl
                    </a></h1>
                        <div className="unslider">
                            <ul className="slides">
                                <li>
                                    <img src="Images/TwTG/TwTG1.jpg" className="perfectly-sized" />
                                </li>

                                <li>
                                    <img src="Images/TwTG/TwTG2.jpg" className="perfectly-sized" />
                                </li>

                                <li>
                                    <img src="Images/TwTG/TwTG3.jpg" className="perfectly-sized" />
                                </li>

                                <li>
                                    <img src="Images/TwTG/TwTG4.jpg" className="perfectly-sized" />
                                </li>
                            </ul>
                        </div>
                    <p className="summation">The screenshots here are from a website I created in collaboration with Sarah Kleinman from BraveUX for the Code for Crittenton Hackathon sponsored by Girl Dev It D.C.
                    We didn't win but we scored 100 on Design and 90 on Functionality</p>

                    <a href="#top"><p className="back">Back to Top</p></a>
                </div>
            </div>

            <div className="container-fluid" style={{ background: 'rgb(234, 223, 219)' }}>
                <div className="tortilla">
                    <h1><a id="tortillacafemain">
                    Tortilla Cafe
                    </a></h1>
                        <div className="unslider">
                        <ul className="slides">
                            <li>
                                <img src="Images/Tortilla/Tortilla1.jpg" className="perfectly-sized" />
                            </li>

                            <li>
                                <img src="Images/Tortilla/Tortilla2.jpg" className="perfectly-sized" />
                            </li>

                            <li>
                                <img src="Images/Tortilla/Tortilla3.jpg" className="perfectly-sized" />
                            </li>

                            <li>
                                <img src="Images/Tortilla/Tortilla4.jpg" className="perfectly-sized" />
                            </li>

                            <li>
                                <img src="Images/Tortilla/Tortilla5.jpg" className="perfectly-sized" />
                            </li>
                        </ul>
                        </div>
                    <p className="summation">This was a redesign of the Tortilla Cafe's
                    website. The sites actual color scheme is black and yellow. I thought a more festive theme would better fit the Salvadorian heritage of the cafe so I decided to create a website that reflected this better as practice. I also incorporated a fixed header into it.
                    </p>
                    <a href="#top"><p className="back">Back to Top</p></a>
                </div>
            </div>

            <div className="container-fluid" style={{ background: 'rgb(163, 193, 173)' }}>
                <div className="Saw">
                    <h1><a id="sawmain">
                    Songwriter's Association of Washington(SAW)
                    </a></h1>
                        <div className="unslider">
                        <ul className="slides">
                            <li>
                                <img src="Images/Saw/Saw1.jpg" className="perfectly-sized" />
                            </li>

                            <li>
                                <img src="Images/Saw/Saw2.jpg" className="perfectly-sized" />
                            </li>

                            <li>
                                <img src="Images/Saw/Saw3.jpg" className="perfectly-sized" />
                            </li>

                            <li>
                                <img src="Images/Saw/Saw4.jpg" className="perfectly-sized" />
                            </li>

                            <li>
                                <img src="Images/Saw/Saw5.jpg" className="perfectly-sized" />
                            </li>
                        </ul>
                        </div>
                    <p className="summation">The Songwriter's Association of Music website was grossly underdeveloped when I first saw it. It was made up of mostly completely unstyled headers,paragraphs etc. with a few pictures and some broken links added in. It was difficult to navigate and had plenty of hard to find pages hidden in it. It has since been redesigned professionally and although it looks better, it is even more difficult to get information from than before. For this redesign, I decided on a basic beige color scheme to go with the only sheet music background. This website also has a fixed header.</p>
                    <a href="#top"><p className="back">Back to Top</p></a>
                </div>
            </div>
        </>
    )
}

export default OldPage