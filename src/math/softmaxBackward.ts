import { map } from 'lodash';
import Array2D from '../data/Array2D';

function softmaxBackward(
  dA: Array2D,
  cache: Array2D,
) {
  const dAValues = dA.values;
  const cacheValues = cache.values;
  const zValues = map(cacheValues, (num, idx) => (
    dAValues[idx]
  ));

  return new Array2D(cache.shape, zValues);
}

export default softmaxBackward;
