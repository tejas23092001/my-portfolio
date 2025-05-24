import React from "react"
import { TypeAnimation } from "react-type-animation"

export default function Header() {
	return (
		<header>
			<h1>Tejas P. Sanghai</h1>
			<TypeAnimation
				sequence={[
					"Software Engineer",
					2000,
					"Java Developer",
					2000,
					"Tech Enthusiast",
					2000,
				]}
				wrapper="span"
				speed={50}
				repeat={Infinity}
				style={{
					display: "inline-block",
					fontSize: "1.2rem",
					color: "#93c5fd",
				}}
			/>
			<p>📞 +91-8329045476 | 📧 tejas230309@gmail.com</p>
		</header>
	)
}
