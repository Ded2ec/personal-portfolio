module.exports = {
    // other configurations
    module: {
      rules: [
        // other rules
        {
          test: /\.css$/,
          use: [
            'style-loader',
            'css-loader',
            {
              loader: 'postcss-loader',
              options: {
                postcssOptions: {
                  plugins: [
                    [
                      'autoprefixer',
                      {
                        overrideBrowserslist: ['> 1%', 'last 2 versions'],
                        ignoreUnknownVersions: true
                      }
                    ]
                  ]
                }
              }
            }
          ]
        }
      ]
    }
  };
  