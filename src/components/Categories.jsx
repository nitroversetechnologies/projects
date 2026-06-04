import "./Categories.css";

const categories = [
  "Oversized T-Shirts",
  "Custom Printing",
  "Back Print Designs",
  "Corporate Orders",
  "College Events",
  "Sports Jerseys",
];

function Categories() {
  return (
    <section className="categories" id="categories">

      <h2>Shop By Category</h2>

      <div className="category-grid">
        {categories.map((item,index)=>(
          <div className="category-card" key={index}>
            {item}
          </div>
        ))}
      </div>

    </section>
  );
}

export default Categories;