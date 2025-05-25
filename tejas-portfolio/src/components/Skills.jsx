import React from "react"
import { motion } from "framer-motion"

const skills = [
	"C/C++",
	"Python",
	"JavaScript",
	"Go",
	"PHP",
	"ReactJS",
	"Docker",
	"Kubernetes",
	"AWS",
]

export default function Skills() {
	return (
		<motion.section
			id="skills"
			className="container"
			initial={{ opacity: 0, y: 40 }}
			whileInView={{ opacity: 1, y: 0 }}
			viewport={{ once: true }}
			transition={{ duration: 0.8 }}
		>
			<h2>Skills</h2>
			<ul
				style={{
					listStyle: "none",
					padding: 0,
					display: "flex",
					flexWrap: "wrap",
					gap: "12px",
					justifyContent: "center",
				}}
			>
				{skills.map((skill) => (
					<li
						key={skill}
						style={{
							background: "#3b82f6",
							color: "#fff",
							padding: "8px 15px",
							borderRadius: "20px",
							fontWeight: "600",
							fontSize: "0.9rem",
						}}
					>
						{skill}
					</li>
				))}
			</ul>
		</motion.section>
	)
}
