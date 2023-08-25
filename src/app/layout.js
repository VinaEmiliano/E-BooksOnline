import Navbar from './components/Navbar'
import Footer from './components/Footer'
import './globals.css'


export const metadata = {
  title: 'E-Books online',
  description: 'The most important page of ebooks on the web',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="">
        <Navbar/>
        {children}
        <Footer/>
      </body>
    </html>
  )
}
