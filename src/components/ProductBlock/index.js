import React from 'react'
import {NavLink} from 'react-router-dom'
import {Button} from '@material-ui/core'
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart'

import {ButtonBlocks, Container, MainContent, ProductImg,
  ProductPrice, ProductTitle, Wrap} from './style'

const ProductBlock = ({product, onClickAddProduct}) => {
  return (
    <Container>
      <ProductImg
        src={product.img_url}
      />
      <MainContent>
        <ProductTitle>{product.name}</ProductTitle>
        <Wrap>
          <ProductPrice>{product.price} $</ProductPrice>
          <ButtonBlocks>
            <NavLink to={{
              pathname: '/product',
              state: {...product}
            }}>
              <Button
                variant="contained"
                color="primary"
              >
                Show
              </Button>
            </NavLink>
            <Button
              variant="contained"
              color="secondary"
              endIcon={<ShoppingCartIcon style={{color: '#fff'}}/>}
              onClick={() => onClickAddProduct(product)}
            >
              Add
            </Button>
          </ButtonBlocks>
        </Wrap>
      </MainContent>
    </Container>
  )
}

export default ProductBlock
