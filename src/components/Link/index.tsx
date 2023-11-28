import type { FC, MouseEvent } from "react"
import "./style.css"

interface Props {
  path: string
  title: string
}

const Link: FC<Props> = ({ path, title }) => {
  const handleClick = (e: MouseEvent) => {
    const currentPath = window.location.pathname
    if (currentPath === path) {
      e.preventDefault()
    }
  }

  return (
    <a className="base-link" href={path} onClick={(e) => handleClick(e)}>
      {title}
    </a>
  )
}

export default Link
