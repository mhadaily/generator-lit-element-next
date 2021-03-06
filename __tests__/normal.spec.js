const path = require('path');
const assert = require('yeoman-assert');
const helpers = require('yeoman-test');

describe('normal', () => {
  beforeEach(() => {
    return helpers
      .run(path.join(__dirname, '../app'))
      .withPrompts({
        packageName: `${process.cwd().replace(/(?:.*\/)(.+)/i, '$1')}`,
        description: 'Yet another generator to disrupt the world',
        homepage: 'https://github.com/awesome-next',
        repoUrl: 'git@github.com:cashblack/awesome-next.git',
        authorName: 'Cash Black',
        authorEmail: 'cash.black@gmail.com',
        authorUrl: 'cash-black.com',
        gitName: 'cashblack',
      });
  });

  it('creates files', () => {
    const expected = [
      '.editorconfig',
      '.gitattributes',
      '.gitignore',
      '.npmrc',
      '.travis.yml',

      'CONTRIBUTORS',
      'LICENSE',
      'README.md',

      'tsconfig.test.json',
      'tsconfig.json',
      'tslint.json',
      'tslint.prod.json',

      'package.json',
      'rollup.config.js',
      'wct.conf.json',

      'src/test/index.html',
      'src/test/runner.html',
      'src/test/my-element.spec.ts',

      'src/my-element.ts',
    ];

    assert.file(expected);
  });

});
