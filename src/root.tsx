import { useEffect, useState } from "react";
import { Outlet, Link } from "react-router-dom";

const Root = () => {
	const [menu, setMenu] = useState(false);
	const [scrolled, setScrolled] = useState(false);

	window.onscroll = () => {
		if (window.pageYOffset > 10) {
			setScrolled(true);
		} else {
			setScrolled(false);
		}
	};

	useEffect(() => {
		document.body.style.overflow = menu ? "hidden" : "auto";
	});

	return (
		<>
			<header className={scrolled ? "scrolled" : ""}>
				<div className="header-wrapper">
					<nav>
						<div className="mobile-spacer"></div>
						<Link className="logo" to="/">
							<img
								src="/assets/dindin-lightweight.png"
								alt="My pfp."
							/>
							<span className="ml-4">dindin</span>
						</Link>
						<ul>
							<li>
								<Link to="/">Home</Link>
							</li>
						</ul>

						<button
							onClick={() => setMenu(true)}
							aria-label="Menu"
							className="hamburger"
						>
							<svg version="1.1"
								width="30" height="18"
								xmlns="http://www.w3.org/2000/svg">
								<line x1={5} y1={1} x2={25} y2={1} strokeWidth={2} />
								<line x1={5} y1={9} x2={25} y2={9} strokeWidth={2} />
								<line x1={5} y1={17} x2={25} y2={17} strokeWidth={2} />
							</svg>
						</button>
					</nav>
				</div>
			</header>

			<main>
				<div>
					<Outlet />
				</div>
			</main>

			<footer>
				<span>Find me here:</span>
				<nav>
					<ul>
						<li>
							<a href="https://github.com/dindin-nibnib">
								<img
									width="70"
									src="/assets/icons/github-icon.png"

									alt="My github page"
								/>
							</a>
						</li>
						<li >
							<a href="https://t.me/dindin_nibnib">
								<img
									width="70"
									src="/assets/icons/telegram-icon.png"
									alt="My telegram account"
								/>
							</a>
						</li>
						<li >
							<a href="https://discordapp.com/users/373515998000840714">
								<img
									width="70"
									src="/assets/icons/discord-icon.png"
									alt="My discord profile"
								/>
							</a>
						</li>
						<li >
							<a href="mailto:mail@dindin.ch">
								<img
									width="70"
									src="/assets/icons/mail-icon.png"
									alt="Email me!"
								/>
							</a>
						</li>
						<li >
							<a rel="me" href="https://derg.social/@dindin">
								<img
									src="/assets/icons/mastodon-icon.svg"
									alt="My mastodon account"
								/>
							</a>
						</li>
					</ul>
				</nav>
				<span>
					This site is a work in progress! Some pages might not be existing for
					now...
				</span>
				<br />
				<span >
					<a href="mailto:mail@dindin.ch">
						&copy;2021-2023 - dindin|nibnib
					</a>
				</span>
			</footer>
			<div className={`wrap-menu ${menu ? "active" : ""}`}>
				<button
					onClick={() => setMenu(!menu)}
					aria-label="Menu"
					className="close"
				>
					<svg version="1.1"
						width="30" height="30"
						xmlns="http://www.w3.org/2000/svg">
						<line x1={2} y1={2} x2={28} y2={28} strokeWidth={2} />
						<line x1={28} y1={2} x2={2} y2={28} strokeWidth={2} />
					</svg>
				</button>
				<ul>
					<li>
						<Link to="/" onClick={() => setMenu(false)}>
							<strong >Home</strong>
						</Link>
					</li>
				</ul>
			</div>
		</>
	);
};

export default Root;
