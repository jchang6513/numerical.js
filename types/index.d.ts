export = numericaljs;

declare function numericaljs (): Numerical.NumericalJs

declare namespace Numerical {
  class NumericalJs {
    constructor ()

    array(stop: number): number[]

    array(start: number, stop: number): number[]

    array(start: number, stop: number, interval: number): number[]
  }
}
