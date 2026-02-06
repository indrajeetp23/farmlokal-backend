let failures = 0;

export const circuitBreaker = async (fn) => {
  if (failures >= 5) throw new Error("Circuit Open");
  try {
    const result = await fn();
    failures = 0;
    return result;
  } catch (e) {
    failures++;
    throw e;
  }
};
