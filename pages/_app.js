import { GlobalStyled } from "../styles/GlobalStyled"
import { DM_Sans } from "@next/font/google";


const dm_sans = DM_Sans({
  weight: ['400', '700'],
  subsets: ['latin'],
})

function MyApp({ Component, pageProps }) {
  
  return (
   <>
    <GlobalStyled />
    <div className={dm_sans.className}>
     <Component {...pageProps} />
     </div>
   </>
 
  )
}

export default MyApp
