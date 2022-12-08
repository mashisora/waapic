export interface CaptureScreenArguments {
  /**
   * The name of the view as displayed in Wwise UI. By default, the whole UI is captured.
   */
  viewName?: string;
  /**
   * The selection channel of the view. Can be a value of 1, 2, 3 or 4. By default, the current selection channel of the view is detected automatically.
   */
  viewSelectionChannel?: number;
  /**
   * The capture region. By default, the whole view is captured.
   */
  rect?: {
    /**
     * The left position of the capture region (in pixels).
     */
    x: number;
    /**
     * The top position of the capture region (in pixels).
     */
    y: number;
    /**
     * The width of the capture region (in pixels).
     */
    width: number;
    /**
     * The height of the capture region (in pixels).
     */
    height: number;
    [k: string]: unknown;
  };
}

export interface CaptureScreenResult {
  /**
   * The underlying image data format (e.g. image/png).
   */
  contentType?: string;
  /**
   * The encoded image data (Base64).
   */
  contentBase64?: string;
}
