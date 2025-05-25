import React from "react"
import { motion } from "framer-motion"

export default function About() {
	return (
		<motion.section
			id="about"
			className="container"
			initial={{ opacity: 0, y: 40 }}
			whileInView={{ opacity: 1, y: 0 }}
			viewport={{ once: true }}
			transition={{ duration: 0.8 }}
		>
			<h2>About Me</h2>
			<p>
				I am a Software Engineer specializing in automation and backend
				development. I have experience developing frameworks, automating
				deployment pipelines, and optimizing system tests. Passionate
				about clean code and scalable architectures.
			</p>
		</motion.section>
	)
}
