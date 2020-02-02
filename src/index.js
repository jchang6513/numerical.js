const numericaljs = () => {
  return new NumericalJs()
}

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
}

numericaljs.prototype = NumericalJs.prototype

export default numericaljs
