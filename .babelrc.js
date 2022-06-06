const plugins = [
  [
    require.resolve('babel-plugin-module-resolver'),
    {
      plugins: ['react-native-web'],
      root: ['./src/'],
      alias: {
        test: './test',
      },
    },
  ],
];
