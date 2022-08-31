import ImgDsDark from 'assets/img/ds-dark.svg'
const NavBar = () => {
    return (
        <div className="d-flex flex-columm flex-md-row align-items-center p-3 px-md-4 mb-3 bg-light border-bottom shadow-sm">
            <div className="container">
                <nav className="my-2 my-md-0 mr-md-3">
                    <img src={ImgDsDark} alt="DevSuperior" width="115" />
                </nav>
            </div>
        </div>

    );
}

export default NavBar;