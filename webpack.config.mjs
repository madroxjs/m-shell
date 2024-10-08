import path from 'path';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import pkg from 'webpack';

import { fileURLToPath } from 'url';
import { dirname } from 'path';

import grayMatter from 'gray-matter';
import remarkFrontmatter from 'remark-frontmatter';


const { container } = pkg;
const { ModuleFederationPlugin } = container;

// Get the current file path and directory name
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export default {
  entry: './src/main.tsx',  // Entry point
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].[contenthash].js',
    publicPath: '/madroxjs/',
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx'],
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.(js|jsx)$/,
        use: 'babel-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.css$/,  // Handle CSS files with Tailwind CSS
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'postcss-loader',  // Applies PostCSS transformations (including Tailwind CSS)
        ],
      },
      {
        test: /\.scss$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
      },
      {
        test: /\.(png|jpe?g|gif|svg)$/i,
        type: 'asset/resource',
      },
      {
        test: /\.mdx?$/, // Ensures only MDX files are processed by the loader
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-react'],
            },
          },
          {
            loader: '@mdx-js/loader',
            options: {
              options: {
                remarkPlugins: [
                  remarkFrontmatter,
                  () => (tree, file) => {
                    // Use gray-matter to parse the frontmatter
                    const { data } = grayMatter(file.contents);
      
                    // Generate export tokens for the frontmatter data
                    const exportTokens = Object.keys(data)
                      .map((key) => `export const ${key} = ${JSON.stringify(data[key])};`)
                      .join('\n');
      
                    // Add the frontmatter exports to the file content
                    file.contents = `${exportTokens}\n${file.contents}`;
                  },
                ],
              },
              rehypePlugins: [],
            },
          },
        ],
      },
      {
        resourceQuery: /raw/,
        type: 'asset/source',
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: 'asset/resource',
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html',
    }),
    new MiniCssExtractPlugin({
      filename: '[name].[contenthash].css',
      chunkFilename: '[id].[contenthash].css'
    }),
    new ModuleFederationPlugin({
      name: 'madroxjs',
      remotes: {
        // Configure if needed for microfrontend
      },
      shared: {
        react: {
          singleton: true,
          eager: true,
          requiredVersion: (await import('./package.json', {
            with: { type: "json" },
          })).default.dependencies.react,
        },
        'react-dom': {
          singleton: true,
          eager: true,
          requiredVersion: (await import('./package.json', {
            with: { type: "json" },
          })).default.dependencies['react-dom'],
        },
      },
    }),
  ],
  devServer: {
    static: {
      directory: path.join(__dirname, 'public'),
    },
    compress: true,
    port: 7000,
    historyApiFallback: true,
    open: true,
  },
  mode: 'development',
};
