import React from "react"
import { motion } from "framer-motion"

export default function Header() {
	return (
		<motion.section
			id="home"
			className="container"
			initial={{ opacity: 0, y: 40 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ duration: 0.8 }}
		>
			<h1>Hi, I'm Tejas P. Sanghai 👋</h1>
			<p>Software Engineer</p>
			<button
				className="btn"
				onClick={() => (window.location.href = "#contact")}
			>
				Contact Me
			</button>
		</motion.section>
	)
}
