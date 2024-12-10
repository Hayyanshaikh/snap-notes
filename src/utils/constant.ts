export const COLORS = ["#fdc870", "#fd9b71", "#b592fa", "#00d3fc", "#e3ee8e"];

export const generateUniqueId = (prefix = "id") => {
  return `${prefix}-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
}