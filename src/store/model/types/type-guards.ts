
/**
 * Type guards
 */

export const isNonEmptyString = (input: unknown): input is string => {
    return typeof input === "string" && input.length > 0;
  };
  
export const isIdString = (input: unknown): input is string => {
    return typeof input === "string" && /[A-Za-z]{12}/g.test(input);
  };
  
export const isValidDateString = (input: unknown): input is string => {
    return typeof input === "string" && !isNaN(Date.parse(input));
};
  
export const isBetween0and10 = (input: unknown): input is number => {
    return typeof input === 'number' && input <= 10 && input >= 0; 
}
  