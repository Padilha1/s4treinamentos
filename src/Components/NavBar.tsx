import '../Css/NavBar.css'

export function NavBar() {
    return (
        <header>

            <img className='logo' src='./logos/S4_Marca2.png' alt='Logo da empresa S4 Treinamentos'></img>
            
            
            <ul className="list">
                <li className="li-item">
                    <a href='#Sobre'> Sobre nós </a> 
                </li >
                <li className="li-item">
                    <a href='#Cursos'> Cursos </a> 
                </li >
                <li className="li-item">
                    <a href='#Galeria'> Galeria </a> 
                </li >
                <li>
                    <a href='#Contato'>Contato</a> 
                </li>
            </ul>

            
        </header>
    )
}