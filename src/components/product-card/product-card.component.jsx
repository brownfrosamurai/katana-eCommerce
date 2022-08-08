import './product-card.style.scss'

import Button from '../button/button.component'

const ProductCard = ({ product }) => {
  const { imageUrl, name, price } = product

  return (
    <div className='product-card-container'>
      <img src={imageUrl} alt={`${name}`} />
      <div className='footer'>
        <span className='name'>{name}</span>
        <span className='price'>{price}</span>
      </div>
      <Button buttonType='inverted'>Add to Cart</Button>
    </div>
  )
}

export default ProductCard