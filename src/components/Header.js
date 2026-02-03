import logo from '../LogoMundial.jpg';

function Header() {
    return (
        <header>
            <h1>Fifa World Cup 2026</h1>
            <p>Estados Unidos, México y Canadá</p>
            <img src={logo} alt="Logo del Mundial 2026" className="logo" />
        </header>
    );
}

export default Header;