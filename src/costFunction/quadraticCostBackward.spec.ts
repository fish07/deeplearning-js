import { Array2D } from '../data/';
import quadraticCostBackward from './quadraticCostBackward';

test('valid quadraticCostBackward', () => {
  const yHat = new Array2D([1, 3], [1, 2, 3]);
  const y = new Array2D([1, 3], [2, 3, 2]);
  const ro = quadraticCostBackward(yHat, y);
  expect(ro).toEqual(new Array2D([1, 3], [-1, -1, 1]));
});
