/**
 * The string transformation request model.
 */
export interface TransformationModel {
  /**
   * The text to be parsed.
   */
  text: string;

  /**
   * The parsing options.
   */
  flags: string[];
}
