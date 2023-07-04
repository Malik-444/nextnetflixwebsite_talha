import './globals.css'
import Header from "@/app/components/Header";
import {Mulish} from "next/font/google";
import Footer from "@/app/components/Footer";

const mulish=Mulish({
    weight:['300','400','500','600','700','800'],
    subsets:['latin'],
    display:'swap'
})
// export const metadata={
//     title:"Create next app",
//     description:"Generate by create next app"
// }

 const RootLayout=({ children })=> {
  return (
    <html lang="en" className={mulish.className}>
      <body >
        <Header/>
        {children}
      <Footer/>
      </body>
    </html>
  )
}
export default RootLayout
