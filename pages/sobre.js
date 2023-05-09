import Link from "next/link";
import { Container, ContainerTitle, HomeButton } from "../styles/pagesStyles/Sobre/style";


export default function About() {
    return (
        <>
            <ContainerTitle>
                <h1>Eduardo Gonçalves,</h1>
            </ContainerTitle>
            <Container>
                <div></div>
                <div>
                    <p>
                        Eu sou um profissional graduando em Análise e Desenvolvimento de Sistemas, especializado em desenvolvimento Front-end e aplicações voltadas para a interface do usuário. Meu objetivo é encontrar as melhores soluções criativas para as marcas dos meus clientes, cuidando de cada detalhe e buscando sempre um impacto positivo na experiência do usuário.

                        Tenho um forte comprometimento com o código que eu produzo, deixando-o sempre limpo e conciso, o que contribui para uma maior produtividade no trabalho. Sou especialista em HTML, CSS, Javascript, Typescript, React, React Native, Next Js, Styled Components, Tailwind e versionamento de códigos usando git e github.

                        Se você procura um profissional para colaborar em projetos de Front-end, estou sempre disponível para discutir possibilidades. Basta entrar em contato comigo pelo e-mail sobral.je81@gmail.com e conversarmos sobre como posso ajudar a impulsionar o sucesso de seu projeto.                    </p>
                </div>
            </Container>
            <HomeButton>  <Link href='/'> Ir para a home</Link> </HomeButton>
        </>
    )
}