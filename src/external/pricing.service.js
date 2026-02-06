import axios from "axios";

export const fetchPricing = async (productId) => {
  const { data } = await axios.get(
    `https://api.example.com/pricing/${productId}`
  );
  return data;
};
