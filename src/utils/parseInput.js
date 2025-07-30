export const parseInput = (input) => {
  const match = input.match(/^(\d+(?:\.\d+)?)\s*([a-z]{3})\s+in\s+([a-z]{3})$/i);
  
  if (!match) return null;
  
  return {
    amount: parseFloat(match[1]),
    from: match[2].toUpperCase(),
    to: match[3].toUpperCase()
  };
};
