import numericaljs from "../src";

describe('Return evenly spaced array within the given arguments.', () => {
  it('create array without input', () => {
    const arr = numericaljs().array();
    expect(arr).toEqual([0]);
  });

  it('create array with stop value', () => {
    const arr = numericaljs().array(5);
    expect(arr).toEqual([0, 1, 2, 3, 4]);
  });

  it('create array with start and stop value', () => {
    const arr = numericaljs().array(3, 7);
    expect(arr).toEqual([3, 4, 5, 6]);
  });

  it('create array with start and stop value, and also the interval', () => {
    const arr = numericaljs().array(1, 9, 2);
    expect(arr).toEqual([1, 3, 5, 7]);
  });

  it('create array with start, stop and interval, and a aliquant interval', () => {
    const arr = numericaljs().array(1, 2, 0.321);
    expect(arr).toEqual([1, 1.321, 1.642, 1.963]);
  });

});
