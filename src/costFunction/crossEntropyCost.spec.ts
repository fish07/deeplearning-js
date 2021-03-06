import { Array2D } from '../data/';
import crossEntropyCost from './crossEntropyCost';

test('cross-entropy cost', () => {
  const ro = crossEntropyCost(
    new Array2D([1, 4], [0.3, 0.4, 0.9, 0.1]),
    new Array2D([1, 4], [0, 0, 1, 0]),
  );
  expect(ro).toEqual(0.26955539975509396);
});

test('cross-entropy cost', () => {
  const ro = crossEntropyCost(
    new Array2D([2, 4], [0.3, 0.4, 0.9, 0.1, 0.7, 0.6, 0.1, 0.9]),
    new Array2D([2, 4], [0, 0, 1, 0, 1, 1, 0, 1]),
  );
  expect(ro).toEqual(0.26955539975509396);
});
