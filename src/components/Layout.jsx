
const Layout = ({children}) => {

  return (
    <div className="min-h-screen grid grid-cols-1 place-content-between bg-gray-100">
      <p>Navbar</p>
      <main className="w-3/4 mx-auto min-h-[50vh] bg-white rounded-xl">
        <div className="h-full p-6 text-zinc-800">
          {children}
        </div>
      </main>
      <p>Footer</p>
    </div>
  )

}

export default Layout
