import { getMaxId } from './index'

describe('testing helper func', () => {
  test('get maxId should return 0 if ids are empty', () => {
    expect(getMaxId([])).toEqual(0);
  })

  test('get maxId should return 3 if ids has three items', () => {
    expect(getMaxId([1, 2, 3])).toEqual(3);
  })
})