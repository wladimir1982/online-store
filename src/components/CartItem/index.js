import React from 'react'
import {AddCircleOutline, Delete, RemoveCircleOutline} from '@material-ui/icons'
import IconButton from '@material-ui/core/IconButton'

import {
  CartItemContainer, CartItemInfo, CartItemPrice, CartItemTitle,
  ProductImg, Wrap, WrapCartItemCount,
} from './style'

const CartItem = ({id, name, imgUrl, totalPrice, totalCount, onRemove, onMinus, onPlus}) => {
  const handleRemoveClick = () => {
    onRemove(id)
  }

  const handleOnPlus = () => {
    onPlus(id)
  }

  const handleOnMinus = () => {
    onMinus(id)
  }

  return (
    <CartItemContainer>
      <CartItemInfo>
        <ProductImg
          src={imgUrl}
          alt="Product"
        />
        <CartItemTitle>{name}</CartItemTitle>
      </CartItemInfo>
      <Wrap>
        <WrapCartItemCount>
          <IconButton
            onClick={handleOnMinus}
            aria-label="Minus"
            color={"primary"}
          >
            <RemoveCircleOutline/>
          </IconButton>
          <b>{totalCount}</b>
          <IconButton
            onClick={handleOnPlus}
            aria-label="Plus"
            color={"primary"}
          >
            <AddCircleOutline/>
          </IconButton>
        </WrapCartItemCount>
        <CartItemPrice>
          <b>{totalPrice} $</b>
        </CartItemPrice>
        <IconButton
          onClick={handleRemoveClick}
          aria-label="delete"
          style={{color: '#c51162', marginLeft: '5px'}}
        >
          <Delete/>
        </IconButton>
      </Wrap>
    </CartItemContainer>
  )
}

export default CartItem
