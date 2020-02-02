export = numericaljs;

declare function numericaljs (): numericaljs.NumericalJs

declare namespace numericaljs {
  class NumericalJs {
    constructor ()

    array(stop: number): number[]

    array(start: number, stop: number): number[]

    array(start: number, stop: number, interval: number): number[]
  }
}
