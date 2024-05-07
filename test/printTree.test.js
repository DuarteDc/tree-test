import { expect, test } from '@jest/globals';
import { printTree } from '..';

test('It will be a function and return a string', () => {
    expect(printTree).toBeInstanceOf(Function)
});

test('It will be a tree', () => {
    expect(printTree()).toBe(
        `          *
          0
         000
        00000
       0000000
      000000000
     00000000000
    0000000000000
   000000000000000
  00000000000000000`
    )
});

test('It will be a tree of 3 rows', () => {
    expect(printTree(3)).toBe(
`   *
   0
  000`
    );
});