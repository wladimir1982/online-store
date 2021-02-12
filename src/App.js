import React from 'react'
import {Route} from 'react-router-dom'
import {Grid} from '@material-ui/core'
import {Header} from './components'
import {Cart, Home, ProductPage} from './pages'

function App() {
  return (
    <Grid style={{minHeight: '100vh', background: 'darkcyan'}}>
      <Header/>
      <>
        <Route exact path={'/'} component={Home}/>
        <Route path={'/cart'} component={Cart}/>
        <Route path={'/product'} component={ProductPage}/>
      </>
    </Grid>
  )
}

export default App
