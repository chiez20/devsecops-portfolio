import MainLayout from '../layout/MainLayout'

function Home() {
  return (
    <MainLayout>
      <section className="min-h-screen bg-gray-900 text-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">
            Ronaldo Choez
          </h1>
          <p className="text-xl text-gray-400">
            Frontend Developer → DevSecOps
          </p>
        </div>
      </section>
    </MainLayout>
  )
}

export default Home