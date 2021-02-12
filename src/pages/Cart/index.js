import React from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {NavLink} from 'react-router-dom'
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart'
import DeleteIcon from '@material-ui/icons/Delete'
import {ArrowBackIos} from '@material-ui/icons'
import {Button} from '@material-ui/core'
import {clearCart, removeCartItem, plusCartItem, minusCartItem} from '../../store/actions/cart'
import cartEmptyImage from '../../assets/img/empty-cart.png'
import {CartItem} from '../../components'

import {
  CartBottom, CartBottomButtons, CartBottomDetails, CartEmptyBlock, CartEmptyDesc, CartEmptyImage,
  CartEmptyTitle, CartTop, CartWrap, Container, Content, ContentItems, ContentTitle, TextWrap,
  ValueWrap, WrapDetails,
} from './style'

const Cart = () => {
  const dispatch = useDispatch()
  const {totalPrice, totalCount, items} = useSelector(({cart}) => cart)

  const addedProducts = Object.keys(items).map(key => {
    return items[key].items[0]
  })

  const onClearCard = () => {
    if (window.confirm('Are you sure you want to empty your cart?')) {
      dispatch(clearCart())
    }
  }

  const onRemoveItem = (id) => {
    if (window.confirm('Are you sure you want to delete this product?')) {
      dispatch(removeCartItem(id))
    }
  }

  const onPlusCartItem = (id) => {
    dispatch(plusCartItem(id))
  }

  const onMinusCartItem = (id) => {
    dispatch(minusCartItem(id))
  }

  const onClickOrder = () => {
    console.log('Your order @@@@@@@@: ', items)
  }

  return (
    <Content>
      <Container>
        {totalCount
          ? <CartWrap>
            <CartTop>
              <ContentTitle>
                <ShoppingCartIcon style={{color: '#fff', marginRight: '10px'}}/>
                Cart
              </ContentTitle>
              <Button
                variant="contained"
                color="secondary"
                startIcon={<DeleteIcon/>}
                onClick={onClearCard}
              >
                Empty trash
              </Button>
            </CartTop>
            <ContentItems>
              {addedProducts.map(addedProduct => (
                <CartItem
                  key={addedProduct.id}
                  id={addedProduct.id}
                  name={addedProduct.name}
                  imgUrl={addedProduct.img_url}
                  totalPrice={items[addedProduct.id].totalPrice}
                  totalCount={items[addedProduct.id].items.length}
                  onRemove={onRemoveItem}
                  onMinus={onMinusCartItem}
                  onPlus={onPlusCartItem}
                />
              ))}
            </ContentItems>
            <CartBottom>
              <CartBottomDetails>
                <WrapDetails>
                  <TextWrap>Total products: </TextWrap>
                  <ValueWrap>{totalCount} pc.</ValueWrap>
                </WrapDetails>
                <WrapDetails>
                  <TextWrap>Order price: </TextWrap>
                  <ValueWrap isPrice>{totalPrice} $</ValueWrap>
                </WrapDetails>
              </CartBottomDetails>
              <CartBottomButtons>
                <NavLink to="/">
                  <Button
                    variant="contained"
                    color="primary"
                    startIcon={<ArrowBackIos/>}
                  >
                    Back
                  </Button>
                </NavLink>
                <Button
                  variant="contained"
                  color="secondary"
                  onClick={onClickOrder}
                >
                  Pay now
                </Button>
              </CartBottomButtons>
            </CartBottom>
          </CartWrap>
          : <CartEmptyBlock>
            <CartEmptyTitle>Cart is empty</CartEmptyTitle>
            <CartEmptyDesc>
              Most likely, you haven't ordered any more products.<br/>
              To order a product, go to the main page.
            </CartEmptyDesc>
            <CartEmptyImage src={cartEmptyImage} alt="Empty cart"/>
            <NavLink to="/">
              <Button
                variant="contained"
                color="primary"
                startIcon={<ArrowBackIos/>}
              >
                Back
              </Button>
            </NavLink>
          </CartEmptyBlock>}
      </Container>
    </Content>
  )
}

export default Cart
