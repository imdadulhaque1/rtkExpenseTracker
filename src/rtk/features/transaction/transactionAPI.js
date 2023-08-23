import customizedAxios from "../../../utils/customizedAxios";

export const getTransactions = async () => {
  const response = await customizedAxios.get("/transactions");
  return response.data;
};

export const addTransactions = async (data) => {
  const response = await customizedAxios.post("/transactions", data);
  return response.data;
};

export const editTransactions = async (id, data) => {
  const response = await customizedAxios.put(`/transactions/${id}`, data);
  return response.data;
};

export const deleteTransactions = async (id) => {
  const response = await customizedAxios.delete(`/transactions/${id}`);
  return response.data;
};
