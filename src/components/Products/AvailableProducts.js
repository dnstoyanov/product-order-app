import classes from "./AvailableProducts.module.css";
import Card from "../UI/Card";
import ProductItem from "./ProductItem/ProductItem";

const DUMMY_PRODUCTS = [
  {
    id: "m1",
    name: "Vegetarian Pizza",
    description: "sauce, mozzarella, olives, mushrooms, peppers, onions",
    price: 22.99,
  },
  {
    id: "m2",
    name: "Classic burger",
    description: "served with cheddar, bacon, iceberg, BBQ sauce and potato chips",
    price: 16.5,
  },
  {
    id: "m3",
    name: "Pepperoni Pizza",
    description: "sauce, mozzarella, pepperoni sausage",
    price: 12.99,
  },
  {
    id: "m4",
    name: "Spicy pizza",
    description: "sauce, spicy ventricle salami, hot peppers, mozzarella, parmesan",
    price: 18.99,
  },
];

const AvailableProducts = () => {
  const productList = DUMMY_PRODUCTS.map((product) => (
    <ProductItem
      key={product.id}
      id={product.id}
      name={product.name}
      description={product.description}
      price={product.price}
    />
  ));

  return (
    <section className={classes.products}>
      <Card>
        <ul>{productList}</ul>
      </Card>
    </section>
  );
};

export default AvailableProducts;
