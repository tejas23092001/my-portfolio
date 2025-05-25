import React from "react"
import { motion } from "framer-motion"

const projects = [
	{
		title: "Amazon Clone",
		description:
			"Replicated Amazon's interface using ReactJS, Redux-thunk, react-router-dom, Stripe, and Firebase.",
		link: "https://github.com/yourusername/amazon-clone",
	},
	{
		title: "Yelp Camp",
		description:
			"CRUD campground app built with NodeJS, MongoDB, Express, and EJS.",
		link: "https://github.com/yourusername/yelp-camp",
	},
]

export default function Projects() {
	return (
		<motion.section
			id="projects"
			className="container"
			initial={{ opacity: 0, y: 40 }}
			whileInView={{ opacity: 1, y: 0 }}
			viewport={{ once: true }}
			transition={{ duration: 0.8 }}
		>
			<h2>Projects</h2>
			<div className="projects-grid">
				{projects.map(({ title, description, link }) => (
					<motion.a
						href={link}
						target="_blank"
						rel="noopener noreferrer"
						key={title}
						className="project-card"
						whileHover={{
							scale: 1.05,
							boxShadow: "0 8px 20px rgba(59,130,246,0.3)",
						}}
					>
						<h3>{title}</h3>
						<p>{description}</p>
					</motion.a>
				))}
			</div>
		</motion.section>
	)
}
