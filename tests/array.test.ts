import numerical from "../src/numerical";

describe('Return evenly spaced array within the given arguments.', () => {
  it('create array without input', () => {
    const arr = numerical.array();
    expect(arr).toEqual([0]);
  });

  it('create array with stop value', () => {
    const arr = numerical.array(5);
    expect(arr).toEqual([0, 1, 2, 3, 4]);
  });

  it('create array with range', () => {
    const arr = numerical.array(3, 7);
    expect(arr).toEqual([3, 4, 5, 6]);
  });

  it('create array with range and interval', () => {
    const arr = numerical.array(1, 9, 2);
    expect(arr).toEqual([1, 3, 5, 7]);
  });

  it('create array with range and a aliquant interval', () => {
    const arr = numerical.array(1, 2, 0.321);
    expect(arr).toEqual([1, 1.321, 1.642, 1.963]);
  });
});
