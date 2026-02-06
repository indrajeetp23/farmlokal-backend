import axios from "axios";
import { retry } from "../utils/retry.js";

export const fetchSupplierData = async () => {
  return retry(() =>
    axios.get("https://api.example.com/supplier", { timeout: 3000 })
  );
};

