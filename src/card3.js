import "./Card.css";
const Card3 = () => {
    const hallo = () =>{
        console.log("ik ben kaartje drie");
    }
    return(
        <article onClick={hallo}>
            <header>
                <h2>Derde kaart</h2>
            </header>
            <section>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim obcaecati, minima dolorem pariatur est quas! Magni incidunt quam nemo placeat suscipit! Optio distinctio perspiciatis, natus aut laboriosam voluptatem debitis repellendus? 
            </section>  
        </article>
        
    );
}

export default Card3;