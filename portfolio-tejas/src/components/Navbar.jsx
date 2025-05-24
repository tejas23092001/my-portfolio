const Navbar = () => {
	return (
		<nav className="fixed top-0 left-0 w-full flex justify-between items-center px-8 py-4 bg-gradient-to-r from-purple-900 via-indigo-900 to-blue-900 z-50 shadow-lg">
			<h1 className="text-2xl font-bold text-accent">Tejas</h1>
			<ul className="flex gap-6 text-lg">
				<li>
					<a href="#about" className="hover:text-accent transition">
						About
					</a>
				</li>
				<li>
					<a href="#skills" className="hover:text-accent transition">
						Skills
					</a>
				</li>
				<li>
					<a
						href="#projects"
						className="hover:text-accent transition"
					>
						Projects
					</a>
				</li>
				<li>
					<a href="#contact" className="hover:text-accent transition">
						Contact
					</a>
				</li>
			</ul>
		</nav>
	)
}

export default Navbar
