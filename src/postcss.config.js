const purgecss = require('@fullhuman/postcss-purgecss')



module.exports = {
    plugins: [
        require('postcss-import'),
        require('tailwindcss'),
        purgecss({
            content: ['./*.html']
        }),
    ]
};