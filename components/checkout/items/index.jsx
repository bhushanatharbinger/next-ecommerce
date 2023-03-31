import { userUserProvider } from "context/user";

const CheckoutItems = () => {
  const { user } = userUserProvider();

  return (
    <ul className="checkout-items">
      {user?.cartItems?.map((item) => (
        <li className="checkout-item">
          <div className="checkout-item__content">
            <div className="checkout-item__img">
              <img src={item.thumb} />
            </div>

            <div className="checkout-item__data">
              <h3>{item.name}</h3>
              <span>#{item.id}</span>
            </div>
          </div>
          <h3>${item.price}</h3>
        </li>
      ))}
    </ul>
  );
};

export default CheckoutItems;
