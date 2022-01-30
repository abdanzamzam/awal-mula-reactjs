const axios = require("axios");
const api = {};

api.categoryURL = async () => {
  const response = await axios.get(
    "https://staging-cuan.awalmula.co/rest/default/V1/categories"
  );
  return response.data;
};

api.productURL = async (num) => {
  const response = await axios.get(
    `https://staging-cuan.awalmula.co/rest/default/V1/products?searchCriteria[pageSize]=${num}`
  );
  return response.data;
};

api.categoryProductURL = async (id) => {
  const response = await axios.get(
    `https://staging-cuan.awalmula.co/rest/default/V1/categories/${id}/products`
  );
  return response.data;
};

export default api;
