// export default {
//   testEnvironment: "jsdom",
//   transform: {
//     "^.+\\.jsx?$": "babel-jest",
//   },
// };

export default {
  transform: {
    '^.+\\.[jt]sx?$': 'babel-jest'
  },
  testEnvironment: 'jsdom',
  moduleFileExtensions: ['js', 'jsx', 'ts', 'tsx'],
};
