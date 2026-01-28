const burger = document.getElementById("burger");
const navLinks = document.getElementById("navLinks");

burger?.addEventListener("click", () => {
	const isOpen = navLinks.classList.toggle("is-open");
	burger.setAttribute("aria-expanded", String(isOpen));
});

navLinks?.addEventListener("click", (e) => {
	const target = e.target;
	if (target && target.tagName === "A") {
		navLinks.classList.remove("is-open");
		burger?.setAttribute("aria-expanded", "false");
	}
});

document.getElementById("year").textContent = String(new Date().getFullYear());

const form = document.getElementById("contactForm");
const note = document.getElementById("formNote");

form?.addEventListener("submit", (e) => {
	e.preventDefault();

	const data = new FormData(form);
	const name = String(data.get("name") || "").trim();
	const email = String(data.get("email") || "").trim();
	const message = String(data.get("message") || "").trim();

	if (!name || !email || !message) {
		note.textContent = "Please fill out all fields.";
		return;
	}

	const subject = encodeURIComponent("GAR-Lite Website Contact");
	const body = encodeURIComponent(
		`Name: ${name}\nEmail: ${email}\n\n${message}`,
	);

	const to = "georgiaautismresources@gmail.com";

	window.location.href = `mailto:${to}?subject=${subject}&body=${body}`;
	note.textContent = "Opening your email app…";
});
