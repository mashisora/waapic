export type Points = {
  /**
   * X coordinate of curve point.
   */
  x: number;
  /**
   * Y coordinate of curve point.
   */
  y: number;
  /**
   * Shape of the curve segment between this point and the next.
   */
  shape:
    | 'Constant'
    | 'Linear'
    | 'Log3'
    | 'Log2'
    | 'Log1'
    | 'InvertedSCurve'
    | 'SCurve'
    | 'Exp1'
    | 'Exp2'
    | 'Exp3';
}[];
