import './cart-item.styles'
import { CartItemContainer, Image, ItemDetails, ItemName } from './cart-item.styles'

const CartItem = ({ cartItem }) => {

  const { name, imageUrl, price, quantity } = cartItem

  return (
    <CartItemContainer>
      <Image as='img' src={imageUrl} alt={`${name}`} />
      <ItemDetails>
        <ItemName>{name}</ItemName>
        <span className='price'>{quantity} x {price}</span>
      </ItemDetails>
    </CartItemContainer>
  )
}

export default CartItem