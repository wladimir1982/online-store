import React from 'react'
import {useDispatch} from 'react-redux'
import {Button} from '@material-ui/core'
import {useLocation} from 'react-router'
import {NavLink} from 'react-router-dom'
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart'
import {ArrowBackIos} from '@material-ui/icons'
import {addProductToCart} from '../../store/actions/cart'

import {ButtonBlocks} from '../../components/ProductBlock/style'
import {
  BigProductImg, Container, MainContent,
  ProductCategory, ProductName
} from './style'

const ProductPage = () => {
  const dispatch = useDispatch()
  const location = useLocation()
  const product = location.state

  const handleAddProductToCart = () => {
    dispatch(addProductToCart(product))
  }

  return (
    <Container>
      <MainContent>
        <BigProductImg
          src={product.img_url}
        />
        <ProductName>{product.name}</ProductName>
        <ProductCategory>Category: {product.category}</ProductCategory>
      </MainContent>
      <ButtonBlocks>
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
          endIcon={<ShoppingCartIcon style={{color: '#fff'}}/>}
          onClick={() => handleAddProductToCart()}
        >
          Add
        </Button>
      </ButtonBlocks>
    </Container>
  )
}

export default ProductPage