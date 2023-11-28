import { type FC } from "react"
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

interface IProps {
  activeTab?: string
}

const Header: FC<IProps> = ({ activeTab }) => {
  return (
    <header className="base-header-container">
      <nav className="nav">
        {links.map(({ path, title }) => (
          <Link
            active={title === activeTab}
            key={path}
            path={path}
            title={title}
          />
        ))}
      </nav>
      <div className="links">
        <Github />
        <Sun />
      </div>
    </header>
  )
}

export default Header
