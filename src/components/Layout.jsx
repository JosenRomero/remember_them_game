
const Layout = ({children}) => {

  return (
    <div className="min-h-screen grid grid-cols-1 place-content-between">
      <p>Navbar</p>
      <main className="md:w-3/4 mx-auto">
        <div className="p-6 m-2 bg-white rounded-xl text-zinc-800">
          {children}
        </div>
      </main>
      <p>Footer</p>
    </div>
  )

}

export default Layout
