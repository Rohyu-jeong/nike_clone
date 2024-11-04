import { CSSProperties, useState } from "react";
import { sizeData } from "../../data/product/productSizeData";
import { modalButtonBoxStyle } from "../../style/product/Modal";
import { root } from "../../style/root";

const getModalButtonStyle = (index: number, hoverIndex: number | null, selected: boolean): CSSProperties => ({
    fontSize: root.font16,
    paddingTop: "10px",
    paddingBottom: "10px",
    border: selected ? "2px solid black" : hoverIndex === index ? "2px solid black" : "1px solid #dbdbdb",
    cursor: root.pointer,
    borderRadius: "5px",
    background: root.white,
});

type ProductSizeOptionProps = {
  onSizeSelect: (size: number) => void;
};

const ProductSizeOption: React.FC<ProductSizeOptionProps> = ({ onSizeSelect }) => {
    const [hoverIndex, setHoverIndex] = useState<number | null>(null);
    const [selectedSize, setSelectedSize] = useState<number | null>(null);

    const handleSizeClick = (size: number) => {
        setSelectedSize(size);
        onSizeSelect(size);
    };

    return (
        <div style={modalButtonBoxStyle}>
          {sizeData.map((item, index) => (
            <button 
              key={index} 
              style={getModalButtonStyle(index, hoverIndex, item.size === selectedSize)}
              onMouseEnter={() => setHoverIndex(index)}
              onMouseLeave={() => setHoverIndex(null)}
              onClick={() => handleSizeClick(item.size)}
            >
              {item.size}
            </button>
          ))}
        </div>
    );
};

export default ProductSizeOption;
