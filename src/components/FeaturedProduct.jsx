import tshirt from "../assets/Premium Oversized T-Shirt.jpeg";
import "./FeaturedProduct.css";

function FeaturedProduct() {
  return (
    <section className="featured" id="product">
      <div className="product-image">
        <img src={tshirt} alt="" />
      </div>

      <div className="product-content">
        <span>Premium Collection</span>

        <h2>Premium Oversized T-Shirt</h2>

        <p>
          Experience everyday comfort with our premium oversized
          t-shirt, crafted from 100% Terry Cotton for a soft feel
          and lasting durability.
        </p>

        <div className="specs">
          <div>220 GSM Heavyweight</div>
          <div>100% Terry Cotton</div>
          <div>Oversized Fit</div>
          <div>Round Neck</div>
          <div>Half Sleeves</div>
          <div>Premium Stitching</div>
        </div>
      </div>
    </section>
  );
}

export default FeaturedProduct;