import { Header } from "../components/Header"
import { Sidebar } from "../components/Sidebar"
import { Video } from "../components/Video"

function Event() {
  return (
    <section className="flex flex-col min-h-screen">
      <Header />
      
      <main className="flex flex-1">
        <Video />
        <Sidebar />
      </main>

    </section>
  )
}

export default Event
