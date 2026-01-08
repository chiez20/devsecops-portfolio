import Navbar from '../Components/NavBar'

function MainLayout({ children }) {
  return (
    <>
      <Navbar />
      <main>{children}</main>
    </>
  )
}

export default MainLayout