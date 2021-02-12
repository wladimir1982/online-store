import React, {useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {CircularProgress, Grid} from '@material-ui/core'
import {addProductToCart} from '../../store/actions/cart'
import {fetchProducts} from '../../store/actions/products'
import {ProductBlock} from '../../components'
import {setCategory} from '../../store/actions/filters'
import FilterProductCategory from '../../components/FilterProductCategory'

import {Container, LoaderBlock, Title, TopRow} from './style'

const Home = () => {
  const dispatch = useDispatch()
  const products = useSelector(({products}) => products.products)
  const cartItems = useSelector(({cart}) => cart.items)
  const isLoaded = useSelector(({products}) => products.isLoaded)
  const activeFilterCategory = useSelector(({filters}) => filters.category)

  useEffect(() => {
    dispatch(fetchProducts())
  }, [])

  const getFilteredProducts = () => {
    let filteredProducts = []
    if (activeFilterCategory === 'All products') {
      filteredProducts = [...products]
    } else {
      filteredProducts = products.filter(product => product.category === activeFilterCategory)
    }
    return filteredProducts
  }

  const handleAddProductToCart = (product) => {
    dispatch(addProductToCart(product))
  }
  const selectCategory = (categoryName) => {
    dispatch(setCategory(categoryName))
  }

  return (
    <Container>
      <TopRow>
        <Title>{activeFilterCategory}</Title>
        <FilterProductCategory
          activeFilterCategory={activeFilterCategory}
          products={products}
          onClickFilterCategory={selectCategory}
        />
      </TopRow>
      {isLoaded
        ? <Grid
          item
          container
          direction="row"
          justify="space-between"
        >
          {getFilteredProducts().map((product) => (
            <ProductBlock
              key={product.id}
              product={product}
              onClickAddProduct={handleAddProductToCart}
              addedCount={cartItems[product.id] && cartItems[product.id].items.length}
            />
          ))}
        </Grid>
        : <LoaderBlock>
          <CircularProgress className="progress"/>
        </LoaderBlock>}
    </Container>
  )
}

export default Home
