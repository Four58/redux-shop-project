import ProductItem from "./ProductItem";
import classes from "./Products.module.css";

const dummy_product = [
  {
    id: "p1",
    price: 16,
    title: "A Book",
    description: "Just a book",
  },
  {
    id: "p2",
    price: 3,
    title: "Valorant",
    description: "Just a simple game",
  },
  {
    id: "p3",
    price: 20,
    title: "Chess set",
    description: "Ordinary boardgame",
  },
  {
    id: "p4",
    price: 5,
    title: "Milk",
    description: "High calcium",
  },
  {
    id: "p5",
    price: 80,
    title: "Computer",
    description: "fasteset computer in the world",
  },
];

const Products = (props) => {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {dummy_product.map((item) => (
          <ProductItem
            key={item.id}
            id={item.id}
            title={item.title}
            price={item.price}
            description={item.description}
          />
        ))}
      </ul>
    </section>
  );
};

export default Products;
