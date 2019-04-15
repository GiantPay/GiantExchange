module.exports = {
  presets: [
    '@vue/app',
  ],
  env: {
    test: {
      presets: [
        [
          '@babel/preset-env',
          {
            targets:
              {
                node: 'current',
              },
          },
        ],
      ],
    },
  },
  plugins: [
    '@babel/plugin-proposal-optional-chaining',
  ],
};
