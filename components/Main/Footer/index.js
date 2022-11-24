import { SocialMedia } from "./style";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitter, faInstagram, faLinkedinIn, faGithub, } from "@fortawesome/free-brands-svg-icons";
import Link from "next/link";

export function Footer(){
    return(
        <SocialMedia>
                  <div>
                  <Link href='#'>
                    <FontAwesomeIcon icon={faTwitter} color="--fa-inverse" width={30} height={30} />
                    </Link>
          
                    <Link href='#'>
                    <FontAwesomeIcon icon={faInstagram} color="--fa-inverse" width={30} height={30} />
                    </Link>
                
                    <Link href='#'>
                    <FontAwesomeIcon icon={faGithub} color="--fa-inverse" width={30} height={30} />
                    </Link>
               
                    <Link href='#'>
                    <FontAwesomeIcon icon={faLinkedinIn} color="--fa-inverse" width={30} height={30} />
                    </Link>
                  </div>
                   <div className="direct-author">
                        <p>Eduardo Gonçalves © Todos os direitos reservados</p>
                   </div>
        </SocialMedia>
    )
}