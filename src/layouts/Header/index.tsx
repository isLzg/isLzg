import Link from "../../components/Link/index"
import "./style.css"
import { Github, Sun } from "lucide-react"

const links: Array<{
  path: string
  title: string
}> = [
  {
    path: "/",
    title: "Home",
  },
  {
    path: "/blog",
    title: "Blog",
  },
  {
    path: "/projects",
    title: "Projects",
  },
  {
    path: "/things",
    title: "Things",
  },
  {
    path: "/about",
    title: "About",
  },
]

const Header = () => {
  return (
    <header className="base-header-container">
      <nav className="base-nav">
        {links.map(({ path, title }) => (
          <Link key={path} path={path} title={title} />
        ))}
      </nav>
      <div className="base-link">
        <Github />
        <Sun />
      </div>
    </header>
  )
}

export default Header
