import React from "react"
import { motion } from "framer-motion"

export default function About() {
	return (
		<motion.section
			id="about"
			className="container"
			initial={{ opacity: 0, y: 50 }}
			whileInView={{ opacity: 1, y: 0 }}
			transition={{ duration: 0.6 }}
			viewport={{ once: true }}
		>
			<h2>Education</h2>
			<p>
				<strong>
					Vishwakarma Institute Of Information Technology, Pune
				</strong>
				<br />
				Bachelor of Technology in Electronics and Telecommunications
				(E&TC)
				<br />
				Aug 2019 - May 2023 | CGPA: 9.15/10
			</p>

			<h2>Work Experience</h2>
			<p>
				<strong>Acquia – Software Engineer</strong>
				<br />
				July 2024 - Present | Pune, India
				<ul>
					<li>
						Developed SMAPI system test framework with Codeception +
						PHP.
					</li>
					<li>
						Wrote E2E test cases for entitlement provisioning in
						TypeScript.
					</li>
					<li>
						Automated deployments, debugged failures, improved
						provisioning workflows.
					</li>
				</ul>
			</p>

			<p>
				<strong>
					Arista Networks – Software Engineer - Automation
				</strong>
				<br />
				Jan 2023 - June 2024 | Pune, India
				<ul>
					<li>
						Automated network tasks using Python (TCP/IP, VLANs,
						routing).
					</li>
					<li>
						Created performance monitoring dashboards with Django +
						MongoDB.
					</li>
					<li>
						Migrated servers from CentOS7 to AlmaLinux to optimize
						AP-server connectivity.
					</li>
				</ul>
			</p>
		</motion.section>
	)
}
