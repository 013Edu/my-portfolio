import Link from "next/link";
import { Container, ContainerTitle, HomeButton } from "../styles/pagesStyles/Sobre/style";


export default function About(){
    return(
       <>
        <ContainerTitle>
        <h1>Eduardo Gonçalves,</h1>
        </ContainerTitle>
            <Container>
                <div></div>
                <div>
                    <p>
                        sou amante da tecnologia desde pequeno, estou a mais ou menos 1 ano nesse mundo da programação, me apaixonei pelo Front-end, pois gosto muito de design, do visual e pretendo trabalhar nessa área.Estou em busca da minha primeira oportunidade de emprego e sempre tentando ganhar experiência e adiquirindo ao longo da jornada mais conhecimentos para agregar no time futuro.
                    </p>
                </div>
            </Container>
            <HomeButton>  <Link href='/'> Ir para a home</Link> </HomeButton>
       </>
    )
}