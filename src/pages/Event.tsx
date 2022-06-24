import { useParams } from "react-router-dom"
import { Header } from "../components/Header"
import { Sidebar } from "../components/Sidebar"
import { Video } from "../components/Video"

type Params = {
  slug: string
}

function Event() {
  const { slug } = useParams<Params>() 


  return (
    <section className="flex flex-col min-h-screen">
      <Header />
      
      <main className="flex flex-1">
        { slug ? <Video lessonSlug={slug} /> : <div className="flex-1" />}
        <Sidebar />
      </main>

    </section>
  )
}

export default Event
