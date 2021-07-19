module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  testRegex: '.test.tsx?$',
  moduleNameMapper: {
    '^.+\\.(css|less|scss|sass)$': 'identity-obj-proxy',
  },
};
