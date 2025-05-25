import React, { useState } from "react"
import { motion } from "framer-motion"

export default function Contact() {
	const [formData, setFormData] = useState({
		name: "",
		email: "",
		message: "",
	})

	function handleChange(e) {
		setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }))
	}

	function handleSubmit(e) {
		e.preventDefault()
		alert("Message sent! (Demo)")
		setFormData({ name: "", email: "", message: "" })
	}

	return (
		<motion.section
			id="contact"
			className="container"
			initial={{ opacity: 0, y: 40 }}
			whileInView={{ opacity: 1, y: 0 }}
			viewport={{ once: true }}
			transition={{ duration: 0.8 }}
		>
			<h2>Contact Me</h2>
			<form className="contact-form" onSubmit={handleSubmit}>
				<label htmlFor="name">Name</label>
				<input
					type="text"
					required
					id="name"
					name="name"
					value={formData.name}
					onChange={handleChange}
					placeholder="Your name"
				/>
				<label htmlFor="email">Email</label>
				<input
					type="email"
					required
					id="email"
					name="email"
					value={formData.email}
					onChange={handleChange}
					placeholder="you@example.com"
				/>
				<label htmlFor="message">Message</label>
				<textarea
					id="message"
					name="message"
					rows="5"
					required
					value={formData.message}
					onChange={handleChange}
					placeholder="Write your message here"
				/>
				<button type="submit" className="btn">
					Send
				</button>
			</form>
		</motion.section>
	)
}
