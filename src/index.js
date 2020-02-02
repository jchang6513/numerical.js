const numericaljs = () => {
  return new NumericalJs()
}

const PI_2 = Math.PI / 2;

class NumericalJs {
  constructor() {
  }

  array(r1, r2, interval = 1) {
    if (r1 === undefined && r2 === undefined) { return [0]; }

    const withRange = ( r1 !== undefined && r2 !== undefined );
    const withInterval = ( withRange && interval !== undefined );
    const arr = [];

    const length = withInterval
      ? (r2 - r1) / interval
      : withRange
        ? r2 - r1
        : r1;
    const start = withRange ? r1 : 0;

    for(let i = 0; i < length; i++) {
      const current = start + i * interval;
      arr.push(current);
    }

    return arr
  }

  sin(x = []) {
    return x.map(i => Math.sin(i));
  }

  cos(x = []) {
    return x.map(i => Math.cos(i));
  }

  tan(x = []) {
    return x.map(i => {
      return i % PI_2 === 0 && i !== 0
        ? NaN
        : Math.tan(i);
    });
  }
}

numericaljs.prototype = NumericalJs.prototype

export default numericaljs
