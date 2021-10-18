import React from 'react';

export default function Navbar() {
    return (
        <div>
            <nav class="navbar navbar-expand-sm navbar-light">
                <div class="container">
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navmenu">
                    <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navmenu">
                        <ul class="navbar-nav">
                            <li class="nav-item">
                                <span class="nav-link" href="#">HOME</span>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">ABOUT</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">PORTFOLIO</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="blog.html">BLOG</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}
