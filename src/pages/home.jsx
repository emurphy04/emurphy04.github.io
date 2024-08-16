function Home(){
    return(
        <>
            <div className="container">
                <div className="containerBox">
                    <div className="pfpBox">
                        <a href="https://github.com/emurphy04" target="_blank"><img className="pfp" src="../public/logo.png" alt="" /></a>
                    </div>
                    <p className="titleTxt"><span className="opacity">1.</span> Hello World! I'm Ethan;</p>
                    <p className="titleTxt"><span className="opacity">2.</span> I'm a Software Development student with a passion for web design;</p>
                    <p className="titleTxt"><span className="opacity">3.</span> Check out the links below that showcases some of my work;</p>
                    <p className="titleTxt"><span className="opacity">4.</span> Or, Click on the image up top to see my GitHub to see my projects;</p>
                    <p className="titleTxt"><span className="opacity">5.</span><span className="blink">|</span></p>
                    <a href="https://bet-collective.netlify.app" target="_blank"><button className="projButton">E-Commerce Clothing Store</button></a>
                    <a href="https://the-beat-kitchen-diner.netlify.app/" target="_blank"><button className="projButton">Kitchen Dinner Site</button></a>
                    <a href="http://markiscafe.com/rps.html" target="_blank"><button className="projButton">Marki's Cafe</button></a>
                    <a href="http://markiscafe.com/goosesite/goose.html" target="_blank"><button className="projButton">Goose.</button></a>

                </div>
            </div>
        </>
    )
    
}

export default Home