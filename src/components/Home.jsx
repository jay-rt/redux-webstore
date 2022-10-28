import { useDispatch, useSelector } from "react-redux";
import productList from "../data/productList.json";
import { addToCart, removeFromCart } from "../data/cartSlice";
import "../styles/home.scss";

const Home = () => {
  const { cartProductIds } = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  return (
    <div className="container product-catalogue">
      <div className="row">
        {productList.products.map((product) => {
          return (
            <div className="wrapper col-md-4" key={product.id}>
              <div className="card">
                <img
                  className="card-img-top center-block"
                  src={product.imageUrl}
                  alt="Card cap"
                />

                <div className="card-body text-center">
                  <h5 className="card-title">{product.name}</h5>
                  <p className="card-text">${product.price}</p>

                  {!cartProductIds.includes(product.id) ? (
                    <button
                      className="btn btn-primary"
                      onClick={() => {
                        dispatch(addToCart(product.id));
                        console.log();
                      }}
                    >
                      Add to cart
                    </button>
                  ) : (
                    <button
                      className="btn btn-primary"
                      onClick={() => {
                        dispatch(removeFromCart(product.id));
                        console.log();
                      }}
                    >
                      Remove from Cart
                    </button>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Home;
