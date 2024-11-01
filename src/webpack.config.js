const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: './src/index.js',
  devServer: {
    hot: true, // เปิดใช้งาน HMR
  },
  plugins: [
    new ReactRefreshWebpackPlugin(), // เพิ่มปลั๊กอิน react-refresh สำหรับ HMR
  ],
  module: {
    rules: [
      // กฏการตั้งค่าอื่นๆ
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
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            plugins: ['react-refresh/babel'], // เพิ่มปลั๊กอิน Babel สำหรับ react-refresh
          },
        },
      },
    ]
  },
};
