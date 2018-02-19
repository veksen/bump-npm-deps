const parseOutput = require('../parseOutput');

const output = `
Using /Users/veksen/Projects/novartem/marketplace-frontend/package.json

 graphql  ^0.12.3  →  ^0.13.1 

The following dependencies are satisfied by their declared version range, but the installed versions are behind. You can install the latest versions without modifying your package file by using npm update. If you want to update the dependencies in your package file anyway, run ncu -a.

 @storybook/addon-actions  ^3.3.12  →   ^3.3.13 
 @storybook/addon-links    ^3.3.12  →   ^3.3.13 
 @storybook/addons         ^3.3.12  →   ^3.3.13 
 @storybook/cli            ^3.3.12  →   ^3.3.13 
 @storybook/react          ^3.3.12  →   ^3.3.13 
 graphql-tag                ^2.6.1  →    ^2.7.3 
 babel-plugin-import        ^1.6.3  →    ^1.6.5 
 eslint                    ^4.17.0  →   ^4.18.0 
 eslint-plugin-flowtype    ^2.42.0  →   ^2.45.0 
 eslint-plugin-jest        ^21.7.0  →  ^21.12.2 
 lint-staged                ^6.1.0  →    ^6.1.1 

Run ncu with -u to upgrade package.json
`;

describe('parseOutput', () => {
  test('it should extract plugins from the output', () => {
    expect(parseOutput(output)).toEqual([
      { name: 'graphql', from: '0.12.3', to: '0.13.1'},
      { name: '@storybook/addon-actions', from: '3.3.12', to: '3.3.13'},
      { name: '@storybook/addon-links', from: '3.3.12', to: '3.3.13'},
      { name: '@storybook/addons', from: '3.3.12', to: '3.3.13'},
      { name: '@storybook/cli', from: '3.3.12', to: '3.3.13'},
      { name: '@storybook/react', from: '3.3.12', to: '3.3.13'},
      { name: 'graphql-tag', from: '2.6.1', to: '2.7.3'},
      { name: 'babel-plugin-import', from: '1.6.3', to: '1.6.5'},
      { name: 'eslint', from: '4.17.0', to: '4.18.0'},
      { name: 'eslint-plugin-flowtype', from: '2.42.0', to: '2.45.0'},
      { name: 'eslint-plugin-jest', from: '21.7.0', to: '21.12.2'},
      { name: 'lint-staged', from: '6.1.0', to: '6.1.1'},
    ]);
  });
});
