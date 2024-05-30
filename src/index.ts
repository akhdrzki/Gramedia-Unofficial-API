import { fetchPopular } from "./api";

const main = async () => {
  try {
    const products = await fetchPopular(1, 20, "buku", "best_seller");
    console.log(products);
  } catch (error) {
    console.error(error);
  }
};

main();
