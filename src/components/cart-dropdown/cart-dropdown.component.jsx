import { useContext, } from 'react'
import { useNavigate } from 'react-router-dom'

import { CartContext } from '../../contexts/cart.context'
import Button from '../button/button.component'

import CartItem from '../cart-item/cart-item.component'
import { CartItems, EmptyMessage, CartDropdownContainer } from './cart-dropdown.styles'

const CartDropdown = () => {
  const navigate = useNavigate()
  const { cartItems } = useContext(CartContext)
  
  const goToCheckoutHandler = () => {
    navigate('/checkout')
  }
  
  return (
    <CartDropdownContainer>
      <CartItems>
        {
        cartItems.length ? (
          cartItems.map((cartItem) => (
            <CartItem key={cartItem.id} cartItem={cartItem} />
          ))
        ) : (
          <EmptyMessage>Your cart is empty</EmptyMessage>
        )}
      </CartItems>
      <Button onClick={goToCheckoutHandler}>CHECKOUT</Button>
    </CartDropdownContainer>
  )
}

export default CartDropdown