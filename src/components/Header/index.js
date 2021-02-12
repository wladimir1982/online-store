import React from 'react'
import {useSelector} from 'react-redux'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import {indigo} from '@material-ui/core/colors'
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart'

import {ButtonCart, Price, TotalCount, VerticalLine} from './style'

const Header = () => {
  const {totalPrice, totalCount} = useSelector(({cart}) => cart)

  return (
    <AppBar
      position="fixed"
      style={{height: 80, justifyContent: 'center', background: indigo.A700}}
    >
      <Toolbar style={{display: 'flex', justifyContent: 'space-between'}}>
        <Typography variant="h6" color="inherit" className="grow">
            Online Store
        </Typography>
        <ButtonCart to="/cart">
          <Price>{totalPrice} $</Price>
          <VerticalLine/>
          <ShoppingCartIcon style={{color: '#fff'}}/>
          <TotalCount>{totalCount}</TotalCount>
        </ButtonCart>
      </Toolbar>
    </AppBar>
  )
}

export default Header
