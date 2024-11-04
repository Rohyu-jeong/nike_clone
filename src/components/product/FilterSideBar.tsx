import { useState } from "react";
import { categories, filters } from "../../data/product/productCategoryData";
import {
  filterCategory,
  filterItem,
  filterList,
  filterSidebar,
  filterSubitem,
  filterSublist,
  filterTitle,
} from "../../style/product/Category";
import { productData, ProductDataType } from "../../data/product/productData";

type PropsType = {
  setFilterData: React.Dispatch<React.SetStateAction<ProductDataType[]>>;
};

const FilterSideBar = ({ setFilterData }: PropsType) => {
  // 신발 카테고리 필터
  const handleFilter = (filterName: string) => {
    filterName === "전체"
      ? setFilterData(productData)
      : setFilterData(() =>
          productData.filter((data) => {
            return data.id.includes(filterName);
          })
        );
  };

  // 신제품 필터
  const handleNewProduct = (newProduct: string) => {
    newProduct === "신제품" &&
      setFilterData(() =>
        productData.filter((data) => {
          return data.category === newProduct;
        })
      );
  };

  // --------------------------------
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [selectedSubcategory, setSelectedSubcategory] = useState<string | null>(
    null
  );
  const [selectedFilter, setSelectedFilter] = useState<string | null>(null);
  const [selectedSubFilter, setSelectedSubFilter] = useState<string | null>(
    null
  );

  const handleCategoryClick = (category: string) => {
    setSelectedCategory(selectedCategory === category ? null : category);
    setSelectedSubcategory(null);
  };

  const handleSubcategoryClick = (subcategory: string) => {
    setSelectedSubcategory(subcategory);
  };

  const handleFilterClick = (filter: string) => {
    setSelectedFilter(selectedFilter === filter ? null : filter);
    setSelectedSubFilter(null);
  };

  const handleSubFilterClick = (subFilter: string) => {
    setSelectedSubFilter(subFilter);
  };
  // -------------------------------------

  return (
    <div style={filterSidebar}>
      <h2 style={filterTitle}>CATEGORY</h2>
      <ul style={filterList}>
        {categories.map((category) => (
          <li key={category.name} style={filterItem}>
            <div
              onClick={() => {
                handleCategoryClick(category.name);
                handleNewProduct(category.name);
              }}
              style={filterCategory}
            >
              {category.name}
            </div>
            {selectedCategory === category.name &&
              category.subcategories.length > 0 && (
                <ul style={filterSublist}>
                  {category.subcategories.map((subcategory) => (
                    <li
                      key={subcategory}
                      onClick={() => {
                        handleSubcategoryClick(subcategory);
                        handleFilter(subcategory);
                      }}
                      style={{
                        ...filterSubitem,
                        fontWeight:
                          selectedSubcategory === subcategory
                            ? "bold"
                            : "normal",
                        color:
                          selectedSubcategory === subcategory ? "#fff" : "#aaa",
                      }}
                    >
                      {subcategory}
                    </li>
                  ))}
                </ul>
              )}
          </li>
        ))}
      </ul>
      {/* <h2 style={filterTitle}>FILTERS</h2>
      <ul style={filterList}>
        {filters.map((filter) => (
          <li key={filter.name} style={filterItem}>
            <div
              onClick={() => handleFilterClick(filter.name)}
              style={filterCategory}
            >
              {filter.name}
            </div>
            {selectedFilter === filter.name &&
              filter.subcategories.length > 0 && (
                <ul style={filterSublist}>
                  {filter.subcategories.map((subFilter) => (
                    <li
                      key={subFilter}
                      onClick={() => handleSubFilterClick(subFilter)}
                      style={{
                        ...filterSubitem,
                        fontWeight:
                          selectedSubFilter === subFilter ? "bold" : "normal",
                        color:
                          selectedSubFilter === subFilter ? "#fff" : "#aaa",
                      }}
                    >
                      {subFilter}
                    </li>
                  ))}
                </ul>
              )}
          </li>
        ))}
      </ul> */}
    </div>
  );
};

export default FilterSideBar;
