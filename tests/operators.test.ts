import numerical from "../src/numerical";

describe('Return calculation results of two arrays', () => {
  describe('multiply', () => {
    it('get results if input is valid', () => {
      const arr1 = [2, 4, 6, 8, 10];
      const arr2 = [1, 2, 3, 4, 5];
      const results = [2, 8, 18, 32, 50];
      expect(numerical.multiply(arr1, arr2)).toEqual(results);
    });

    it('return error if length is not equivalent', () => {
      const arr1 = [2, 4, 6];
      const arr2 = [1, 2, 3, 4, 5];
      expect(() => numerical.multiply(arr1, arr2)).toThrowError(new Error('Arrays\' length must be equal.'));
    });

    it('return error if one of the variable is not array', () => {
      const arr1 = { '2': 2 };
      const arr2 = { '1': 1 };
      expect(() => numerical.multiply(arr1, arr2)).toThrow(new Error('The variable type is invalid, please passed array instead.'));
    });
  });

  describe('divide', () => {
    it('get results if input is valid', () => {
      const arr1 = [2, 4, 6, 8, 10];
      const arr2 = [1, 2, 3, 4, 5];
      const results = [2, 2, 2, 2, 2];
      expect(numerical.divide(arr1, arr2)).toEqual(results);
    });

    it('return error if length is not equivalent', () => {
      const arr1 = [2, 4, 6];
      const arr2 = [1, 2, 3, 4, 5];
      expect(() => numerical.divide(arr1, arr2)).toThrowError(new Error('Arrays\' length must be equal.'));
    });

    it('return error if one of the variable is not array', () => {
      const arr1 = { '2': 2 };
      const arr2 = { '1': 1 };
      expect(() => numerical.divide(arr1, arr2)).toThrow(new Error('The variable type is invalid, please passed array instead.'));
    });
  });
});
