const numericaljs = () => {
  return new NumericalJs()
}

class NumericalJs {
  constructor() {
  }

  array(s1, s2, interval = 1) {
    if (s1 === undefined && s2 === undefined) { return [0]; }

    const withStartValue = ( s1 !== undefined && s2 !== undefined );
    const withInterval = ( s1 !== undefined && s2 !== undefined && interval !== undefined );
    const arr = [];

    const length = withInterval
      ? (s2 - s1) / interval
      : withStartValue
        ? s2 - s1
        : s1;
    const start = withStartValue ? s1 : 0;

    for(let i = 0; i < length; i++) {
      const current = start + i * interval;
      arr.push(current);
    }

    return arr
  }
}

numericaljs.prototype = NumericalJs.prototype

export default numericaljs
