import { useContext } from 'react'

import { CartContext } from '../../contexts/cart.context'
import {
  Name,
  Arrow,
  Value,
  Price,
  Quantity,
  ImageContainer,
  CheckoutItemContainer,
  RemoveButton,

} from './checkout-item.styles'

const CheckoutItem = ({ cartItem }) => {
  const { name, quantity, price, imageUrl } = cartItem
  const { clearItemFromCart, addItemToCart, removeItemFromCart } = useContext(CartContext)

  const clearCartItemHandler = () => clearItemFromCart(cartItem)
  const addItemHandler = () => addItemToCart(cartItem)
  const removeItemHandler = () => removeItemFromCart(cartItem)

  return (

    <CheckoutItemContainer>
      <ImageContainer>
        <img src={imageUrl} alt={`${name}`} />
      </ImageContainer>
      <Name>{name}</Name>
      <Quantity>
        <Arrow onClick={removeItemHandler}>
          &#10094;
        </Arrow>
        <Value>{quantity}</Value>
        <Arrow onClick={addItemHandler}>
          &#10095;
        </Arrow>
      </Quantity>
      <Price>{quantity * price}</Price>
      <RemoveButton onClick={clearCartItemHandler}>&#10005;</RemoveButton>
    </CheckoutItemContainer>
  )


}

export default CheckoutItem