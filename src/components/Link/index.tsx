import type { FC, MouseEvent } from "react"
import "./style.css"

interface Props {
  path: string
  title: string
  active?: boolean
}

const Link: FC<Props> = ({ path, title, active }) => {
  const handleClick = (e: MouseEvent) => {
    const currentPath = window.location.pathname
    if (currentPath === path) {
      e.preventDefault()
    }
  }

  return (
    <a
      className="base-link"
      data-active={active}
      href={path}
      onClick={(e) => handleClick(e)}
    >
      {title}
    </a>
  )
}

export default Link
