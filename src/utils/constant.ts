export const COLORS = ["#fdc870", "#fd9b71", "#b592fa", "#00d3fc", "#e3ee8e", "#8eeec7"];

export const generateUniqueId = (prefix = "note") => {
  const id = `${prefix}${Date.now()}${crypto.randomUUID()}`;
  return id.substr(0, 40).replace(/-/g, "");
};
