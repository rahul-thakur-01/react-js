import {Link} from "react-router-dom";
import "./Home.css";

function Home(){

    return(
        <div className="home-container">
            <Link href="todo" className="btn btn-warning link" to="/todo">
                To Do App
            </Link>
            <Link href="note" className="btn btn-warning link" to="/note">
                Note Keeper
            </Link>
        </div>
    )
}

export default Home;