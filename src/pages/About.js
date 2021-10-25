import './About.css';

function About() {
    return(
        <>
            <nav class="navbar fixed-top navbar-expand-lg navbar-light bg-light">
                <div class="container-fluid">
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNavDropdown">
                    <ul class="navbar-nav">
                        <li class="nav-item">
                        <a class="nav-link" aria-current="page" href="./index.html">HOME</a>
                        </li>
                        <li class="nav-item">
                        <a class="nav-link" href="#">ABOUT</a>
                        </li>
                        <li class="nav-item">
                        <a class="nav-link" href="#">PORTFOLIO</a>
                        </li>
                        <li class="nav-item">
                        <a class="nav-link" href="#">BLOG</a>
                        </li>
                    </ul>
                    </div>
                </div>
            </nav>

            <div class="container">
                <div class="row">
                    <div class="col">
                        <img src="/TiciaD.github.io/public/Me.jpg" alt="me" class="img-thumbnail"/>
                    </div>
                    <div class="col">
                    Column
                    </div>
                    <div class="col">
                    Column
                    </div>
                </div>
            </div>

        </>
    )
}

export default About;