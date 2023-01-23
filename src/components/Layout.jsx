import Menu from './Menu'
import Footer from './Footer'

const Layout = ({children}) => {

  return (
    <div className="min-h-screen grid grid-cols-1 place-content-between bg-white">
      <Menu />
      <main className="w-3/4 mx-auto min-h-[70vh] rounded-xl">
        <div className="h-full p-8 text-zinc-800">
          {children}
        </div>
      </main>
      <Footer />
    </div>
  )

}

export default Layout
