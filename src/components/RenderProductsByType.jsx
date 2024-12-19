import useFetch from "../useFetch";
import GenerateProductCard from "./GenerateProductCard";

const RenderProductsByType = ({
  productType,
  filter = { brands: [], models: [], years: [], price: 0 },
}) => {
  const { data, loading, error } = useFetch(
    `https://project1-backend-six.vercel.app/products/type/${productType}`
  );

  // Directly filter data without useMemo
  const filteredData = data
    ? data.filter((product) => {
        const matchesBrand =
          filter.brands.length === 0 || filter.brands.includes(product.brand);
        const matchesModel =
          filter.models.length === 0 || filter.models.includes(product.model);
        const matchesYear =
          filter.years.length === 0 ||
          filter.years
            .map((year) => parseInt(year))
            .includes(parseInt(product.year));
        const matchesPrice =
          filter.price === 0 || product.price <= filter.price;

        return matchesBrand && matchesModel && matchesYear && matchesPrice;
      })
    : [];

  return (
    <>
      <GenerateProductCard
        data={filteredData}
        loading={loading}
        error={error}
      />
    </>
  );
};

export default RenderProductsByType;
