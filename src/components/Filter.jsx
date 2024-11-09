import { useState } from "react";
import useFetch from "../useFetch";

const Filter = ({ onFilterChange }) => {
  const { data, loading, error } = useFetch(
    "https://project1backend-navy.vercel.app/products"
  );

  const [brandList, setBrandList] = useState([]);
  const [modelList, setModelList] = useState([]);
  const [yearList, setYearList] = useState([]);
  const [selectedBrands, setSelectedBrands] = useState([]);
  const [selectedModels, setSelectedModels] = useState([]);
  const [selectedYears, setSelectedYears] = useState([]);
  const [selectedPrice, setSelectedPrice] = useState(0);

  // Set filter lists when data is loaded
  if (
    data &&
    brandList.length === 0 &&
    modelList.length === 0 &&
    yearList.length === 0
  ) {
    const brands = [...new Set(data.map((product) => product.brand))];
    const models = [...new Set(data.map((product) => product.model))];
    const years = [...new Set(data.map((product) => product.year))];

    setBrandList(brands);
    setModelList(models);
    setYearList(years);
  }

  const handleCheckboxChange = (event, type) => {
    const { value } = event.target;
    const updateSelection = (prev) =>
      prev.includes(value)
        ? prev.filter((item) => item !== value)
        : [...prev, value];

    if (type === "brand") {
      setSelectedBrands((prev) => {
        const updated = updateSelection(prev);
        handleFilterChange({
          brands: updated,
          models: selectedModels,
          years: selectedYears,
          price: selectedPrice,
        });
        return updated;
      });
    } else if (type === "model") {
      setSelectedModels((prev) => {
        const updated = updateSelection(prev);
        handleFilterChange({
          brands: selectedBrands,
          models: updated,
          years: selectedYears,
          price: selectedPrice,
        });
        return updated;
      });
    }
  };

  const handleYearChange = (event) => {
    const { value } = event.target;
    const yearValue = parseInt(value); // Convert the year value to an integer
    setSelectedYears((prev) => {
      const updated = prev.includes(yearValue)
        ? prev.filter((year) => year !== yearValue)
        : [...prev, yearValue];

      handleFilterChange({
        brands: selectedBrands,
        models: selectedModels,
        years: updated,
        price: selectedPrice,
      });
      return updated;
    });
  };

  const handlePriceChange = (event) => {
    const value = event.target.value;
    setSelectedPrice(value);
    handleFilterChange({
      brands: selectedBrands,
      models: selectedModels,
      years: selectedYears,
      price: value,
    });
  };

  const handleReset = (e) => {
    e.preventDefault();
    setSelectedBrands([]);
    setSelectedModels([]);
    setSelectedYears([]);
    setSelectedPrice(0);
    handleFilterChange({
      brands: [],
      models: [],
      years: [],
      price: 0,
    });
  };

  const handleFilterChange = (newFilter) => {
    if (
      newFilter.brands.length === 0 &&
      newFilter.models.length === 0 &&
      newFilter.years.length === 0 &&
      newFilter.price === 0
    ) {
      onFilterChange({
        brands: [],
        models: [],
        years: [],
        price: 0,
      });
    } else {
      onFilterChange(newFilter);
    }
  };

  return (
    <div className="card border-light shadow p-4 rounded">
      <div className="card-body">
        <h4 className="card-title fw-bold">Filters</h4>
        <hr />
        <form>
          {/* Filter for Brands */}
          <div className="mb-3">
            <label className="fw-bold">Brands</label>
            {brandList.map((brand, index) => (
              <div className="form-check" key={index}>
                <input
                  type="checkbox"
                  className="form-check-input"
                  id={`brand-${index}`}
                  value={brand}
                  checked={selectedBrands.includes(brand)}
                  onChange={(e) => handleCheckboxChange(e, "brand")}
                />
                <label className="form-check-label" htmlFor={`brand-${index}`}>
                  {brand}
                </label>
              </div>
            ))}
          </div>

          {/* Filter for Models */}
          <div className="mb-3">
            <label className="fw-bold">Models</label>
            {modelList.map((model, index) => (
              <div className="form-check" key={index}>
                <input
                  type="checkbox"
                  className="form-check-input"
                  id={`model-${index}`}
                  value={model}
                  checked={selectedModels.includes(model)}
                  onChange={(e) => handleCheckboxChange(e, "model")}
                />
                <label className="form-check-label" htmlFor={`model-${index}`}>
                  {model}
                </label>
              </div>
            ))}
          </div>

          {/* Filter for Years */}
          <div className="mb-3">
            <label className="fw-bold">Years</label>
            {yearList.map((year, index) => (
              <div className="form-check" key={index}>
                <input
                  type="checkbox"
                  className="form-check-input"
                  id={`year-${index}`}
                  value={year}
                  checked={selectedYears.includes(parseInt(year))}
                  onChange={handleYearChange}
                />
                <label className="form-check-label" htmlFor={`year-${index}`}>
                  {year}
                </label>
              </div>
            ))}
          </div>

          {/* Filter for Price */}
          <div className="mb-3">
            <label className="fw-bold">Price</label>
            <input
              type="number"
              className="form-control"
              value={selectedPrice}
              onChange={handlePriceChange}
            />
          </div>

          {/* Reset Button */}
          <button className="btn btn-secondary" onClick={handleReset}>
            Reset Filters
          </button>
        </form>
      </div>
    </div>
  );
};

export default Filter;
