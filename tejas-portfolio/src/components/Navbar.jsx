import React from "react"
import { Link } from "react-scroll"

export default function Navbar() {
	const navItems = [
		{ id: "home", label: "Home" },
		{ id: "about", label: "About" },
		{ id: "projects", label: "Projects" },
		{ id: "skills", label: "Skills" },
		{ id: "contact", label: "Contact" },
	]

	return (
		<nav className="navbar">
			{navItems.map(({ id, label }) => (
				<Link
					key={id}
					activeClass="active"
					to={id}
					spy={true}
					smooth={true}
					offset={-70}
					duration={500}
					className="nav-link"
				>
					{label}
				</Link>
			))}
		</nav>
	)
}
