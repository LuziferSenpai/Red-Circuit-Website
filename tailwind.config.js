const colors = require("tailwindcss/colors")

module.exports = {
    mode: "jit",
    purge: ["./public/**/*.html", "./src/**/*.{astro,js,jsx,svelte,ts,tsx,vue}"],
    theme: {
        extend: {
            width: {
                "256px": "256px",
                "70px": "70px",
                "36px": "36px",
                "24px": "24px",
                "16px": "16px"
            },
            height: {
                "70px": "70px",
                "36px": "36px",
                "24px": "24px",
                "16px": "16px"
            },
            margin: {
                "-256": "-256px"
            },
            maxWidth: {
                "pic": "160px"
            },
            maxHeight: {
                "pic": "160px",
                "text": "200px"
            },
            gridTemplateRows: {
                "list": "180px 3rem 250px 2rem"
            }
        },
        colors: {
            ...colors,
            nicegray: "#1e1e1e",
            nicegray2: "#282828",
        },
    }
};