import RenderProductsByType from "./RenderProductsByType";

const RenderOurProductsCatlog = ({ filter }) => {
  const productTypes = [
    { type: "E-cycle", label: "E-Cycles" },
    { type: "Cycle", label: "Cycles" },
    { type: "Part", label: "Parts" },
    { type: "Accessory", label: "Accessories" },
  ];

  return (
    <>
      <div className="row g-4">
        {productTypes.map((product) => (
          <div className="col-12" key={product.type}>
            <div className="card bg-light p-4">
              <h3 className="text-center mb-4">{product.label}</h3>
              <div className="row">
                <RenderProductsByType
                  productType={product.type}
                  filter={filter}
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default RenderOurProductsCatlog;
