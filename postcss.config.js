const purgecss =
  process.env.NODE_ENV === 'production'
    ? [
        [
          '@fullhuman/postcss-purgecss',
          {
            // Specify the paths to all of the template files
            content: ['./pages/**/*.{js,jsx}', './components/**/*.{js,jsx}'],
            // This is the function used to extract class names from the templates
            defaultExtractor: (content) => {
              // Capture as liberally as possible, including things like `h-(screen-1.5)`
              // /[^<>"'`\\s]*[^<>"'`\\s:]/g
              const broadMatches =
                content.match(/[^"'<>\\`s]*[^"':<>\\`s]/g) || []
              // Capture classes within other delimiters like .block(class="w-1/2") in Pug
              // /[^<>"'`\\s.()]*[^<>"'`\\s.():]/g
              const innerMatches =
                content.match(/[^"'().<>\\`s]*[^"'().:<>\\`s]/g) || []
              return broadMatches.concat(innerMatches)
            },
          },
        ],
      ]
    : []

const plugins = ['tailwindcss', ...purgecss, 'postcss-preset-env']

module.exports = { plugins }
