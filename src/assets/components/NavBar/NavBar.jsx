const NavBar = () => {
    return (
        <nav>
            
            <ul className="flex">
                <li className="mr-10"><a href="/">Home</a></li>
                <li className="mr-10"><a href="/about">About</a></li>
                <li className="mr-10"><a href="/blog">Blog</a></li>
            </ul>
        </nav>
    );
};

export default NavBar;