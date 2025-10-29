// export default {
//   presets: ["@babel/preset-env", "@babel/preset-react"],
// };

// export default {
//   presets: [
//     '@babel/preset-env',
//     '@babel/preset-react'
//   ],
// };

export default {
  presets: [
    [
      '@babel/preset-react',
      { runtime: 'automatic' } // 👈 enables new JSX transform (no need to import React)
    ],
    '@babel/preset-env',
  ],
};