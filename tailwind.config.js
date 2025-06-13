// tailwind.config.js
module.exports = {
    content: [
        "./resources/**/*.blade.php",
        "./resources/**/*.js",
        "./resources/**/*.jsx",
    ],
    theme: {
        extend: {},
    },
    plugins: [require("daisyui")], // Enable daisyUI
    daisyui: {
        themes: ["light", "dark"], // Enable light/dark themes
    },
};
