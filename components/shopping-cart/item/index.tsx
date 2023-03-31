import { useUserContext } from 'context/user';
import { CourseStoreType } from 'types';

const ShoppingCart = ({ thumb, name, id, color, size, price }: CourseStoreType) => {
 const {removeFromCart} = useUserContext()

  return (
    <tr>
      <td>
        <div className="cart-course">
          <div className="cart-course__img">
            <img src={thumb} alt="" />
          </div>

          <div className="cart-course__content">
            <h3>{name}</h3>
            <p>#{id}</p>
          </div>
        </div>
      </td>
      <td className="cart-item-before" data-label="Color">{color}</td>
      <td className="cart-item-before" data-label="Size">{size}</td>
      <td>${price}</td>
      <td className="cart-item-cancel"><i className="icon-cancel" onClick={() => removeFromCart(id)}></i></td>
    </tr>
  )
};

  
export default ShoppingCart