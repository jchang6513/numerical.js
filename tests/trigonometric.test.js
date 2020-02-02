import numericaljs from "../src"

const Numerical = numericaljs();

describe('Trigonometric methods', () => {
  describe('sin', () => {
    it('sin with array', () => {
      const x = [0, Math.PI / 4, Math.PI / 2];
      const y = Numerical.sin(x);

      const yExpect = [0, 1 / Math.sqrt(2), 1]
      y.map((i, index) => {
        expect(i).toBeCloseTo(yExpect[index]);
      })
    });
  });

  describe('cos', () => {
    it('cos with array', () => {
      const x = [0, Math.PI / 4, Math.PI / 2];
      const y = Numerical.cos(x);

      const yExpect = [1, 1 / Math.sqrt(2), 0];
      y.map((i, index) => {
        expect(i).toBeCloseTo(yExpect[index]);
      })
    });
  });

  describe('tan', () => {
    it('tan with array', () => {
      const x = [0, Math.PI / 4, Math.PI / 2];
      const y = Numerical.tan(x);

      const yExpect = [0, 1, NaN];
      y.map((i, index) => {
        if ( isNaN(yExpect[index]) ) {
          expect(i).toBeNaN();
        } else {
          expect(i).toBeCloseTo(yExpect[index]);
        }
      })
    });
  });
})
