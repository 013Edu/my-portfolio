import { faGithub, faInstagram, faLinkedinIn, faTwitter } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import { Container, ContainerTitle, HomeButton } from "../styles/pagesStyles/contato";


export default function About(){
    return(
       <>
        <ContainerTitle>
        <h1>Siga-me nas minhas redes sociais!</h1>
        </ContainerTitle>
            <Container>
            <div>
                  <Link href='https://twitter.com/duuukrl'>
                    <FontAwesomeIcon icon={faTwitter} color="--fa-inverse" width={30} height={30} />
                    </Link>
          
                    <Link href='https://www.instagram.com/eduardoogoncalvess_/?next=%2F'>
                    <FontAwesomeIcon icon={faInstagram} color="--fa-inverse" width={30} height={30} />
                    </Link>
                
                    <Link href='https://github.com/013Edu'>
                    <FontAwesomeIcon icon={faGithub} color="--fa-inverse" width={30} height={30} />
                    </Link>
               
                    <Link href='https://www.linkedin.com/in/eduardo-gon%C3%A7alves-993586224/'>
                    <FontAwesomeIcon icon={faLinkedinIn} color="--fa-inverse" width={30} height={30} />
                    </Link>
                  </div>
            </Container>
            <HomeButton>  <Link href='/'> Ir para a home</Link> </HomeButton>
       </>
    )
}