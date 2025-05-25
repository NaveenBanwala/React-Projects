function Section({inital}){
    return(
        <>
    <section className="images">
                <img src="../images/sky.png" alt="" id="sky"></img>
                <img src="../images/stars.png" alt="" id="stars"></img>
                <img style={{top :`${inital}px`}}src="../images/moon.png" alt="" id="moon"></img>
                <img  style={{right :`${inital}px`}}src="../images/city-left.png" alt="" id="city-left"></img>
                <img style={{left :`${inital}px`}}src="../images/city-right.png" alt="" id="city-right"></img>
                <img src="../images/purple-light.png" alt="" id="purple-light"></img>
                <img src="../images/tree.png" alt="" id="tree"></img> 
                <img src="../images/ground.png" alt="" id="ground"></img> 
                <img src="../images/grass.png" alt="" id="grass"></img>
            </section>
            </>
    );
}
export default Section;