import './style.css'

export default function Apresentacao(){
    return(
        <>
        <section>
        <h1>OS MELHORES <span>APARELHOS DENTÁRIOS!</span></h1>
        <p>Confira abaixo todas as especialidades odontológicas que temos à sua disposição!</p>

        <ul className='servicos'>
            
            <li>
                <img src="./assets/dente.png" alt="Dente" />
                <p>Pré-avaliação</p>
            </li>
            <li>
                <img src="./assets/dente.png" alt="Dente" />
                <p>Aparelhos Dentários</p>
            </li>

            <li>
                <img src="./assets/dente.png" alt="Dente" />
                <p>Raio-X digital</p>
            </li>
            <li>
                <img src="./assets/dente.png" alt="Dente" />
                <p>Clareamento dental</p>
            </li>
            
        </ul>
        </section>
        </>
    )
}