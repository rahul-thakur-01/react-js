import { Link } from "react-router-dom";
import "./NavBar.css";

function NavBar(){
    return(
        <nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid">
    <Link class="navbar-brand" href="/" to="/">Utility Apps</Link>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <Link class="nav-link active" aria-current="page" href="todo" to="/todo">To Do</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link active" aria-current="page" href="notes" to="/note">Note</Link>
        </li> 
      </ul>
    </div>
  </div>
</nav>
);
}

export default NavBar;