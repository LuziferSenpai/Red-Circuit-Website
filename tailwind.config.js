const colors = require("tailwindcss/colors")

module.exports = {
    mode: "jit",
    purge: ["./public/**/*.html", "./src/**/*.{astro,js,jsx,svelte,ts,tsx,vue}"],
    theme: {
        extend: {
            width: {
                "256px": "256px",
                "36px": "36px",
                "24px": "24px"
            },
            height: {
                "36px": "36px",
                "24px": "24px"
            },
            margin: {
                "-256": "-256px"
            }
        },
        colors: {
            ...colors,
            sky: colors.lightBlue,
            nicegray: "#1e1e1e"
        },
    }
};