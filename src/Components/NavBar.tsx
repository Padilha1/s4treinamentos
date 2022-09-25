import '../Css/NavBar.css'

export function NavBar() {
    return (
        <nav>

            <img className='logo' src='./public/logos/S4_Marca.png' alt='Logo da empresa S4 Treinamentos'></img>
            
            
            <ul className="list">
                <li className="li-item">
                    <a href='#'> Sobre nós </a> 
                </li >
                <li className="li-item">
                    <a href='#'> Cursos </a> 
                </li >
                <li className="li-item">
                    <a href='#'> Galeria </a> 
                </li >
            </ul>

            <a className='Contato'  href='#'>
                <button> Contato </button>
            </a> 
            
        </nav>
    )
}