import Navbar from '../Components/Navbar'

function MainLayout({ children }) {
  return (
    <>
      <Navbar />
      <main>{children}</main>
    </>
  )
}

export default MainLayout