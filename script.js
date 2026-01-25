function partyPop() {
            for (let i = 0; i < 500; i++) {
                const confetti = document.createElement("div");
                confetti.className = "confetti";

                const colors = ["#ff9933", "#ffffff", "#138808"];
                confetti.style.background = colors[Math.floor(Math.random() * colors.length)];

                confetti.style.setProperty("--x", `${Math.random() * 1000 - 600}px`);
                confetti.style.setProperty("--y", `${Math.random() * 1000 - 600}px`);

                document.body.appendChild(confetti);

                setTimeout(() => confetti.remove(), 1000);
            }
        }

        /* 🎉 AUTO CELEBRATE EVERY 3 SECONDS */
        setInterval(() => {
            partyPop();
        }, 3000);
