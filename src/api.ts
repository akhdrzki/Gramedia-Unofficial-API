import axios from "axios";

const BASE_URL = "https://www.gramedia.com/api/algolia/search/product/";

export const fetchPopular = async (
  page: number,
  per_page: number,
  category: string,
  based_on?: string,
) => {
  try {
    const params = {
      page,
      per_page,
      category,
      based_on,
    };

    const response = await axios.get(BASE_URL, { params });
    return response.data;
  } catch (error) {
    throw new Error(`Error fetching`);
  }
};
