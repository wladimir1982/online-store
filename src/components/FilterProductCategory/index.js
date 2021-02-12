import React, {useEffect, useRef, useState} from 'react'
import PropTypes from 'prop-types'

import {CurrentValue, DropDownIcon, Filter, FilterLabel,
  FilterPopup, List, ListItem} from './styled'

const FilterProductCategory = ({activeFilterCategory, products, onClickFilterCategory}) => {
  const [visiblePopup, setVisiblePopup] = useState(false)
  const sortRef = useRef()

  useEffect(() => {
    document.body.addEventListener('click', handleOutsideClick)
    return () => document.body.removeEventListener('click', handleOutsideClick)
  }, [])

  const toggleVisiblePopup = () => {
    setVisiblePopup(!visiblePopup)
  }

  const handleOutsideClick = (e) => {
    const path = e.path || (e.composedPath && e.composedPath())
    if(!path.includes(sortRef.current)) setVisiblePopup(false)
  }

  const onSelectItem = (categoryName) => {
    onClickFilterCategory(categoryName)
    setVisiblePopup(false)
  }

  return (
    <Filter ref={sortRef}>
      <FilterLabel onClick={toggleVisiblePopup}>
        <CurrentValue>{activeFilterCategory}</CurrentValue>
        <DropDownIcon
          $visiblePopup={visiblePopup}
        />
      </FilterLabel>
      {visiblePopup && <FilterPopup>
        <List>
          <ListItem
            onClick={() => onSelectItem('All products')}
            isActive={activeFilterCategory === 'All products'}
          >
            All products
          </ListItem>
          {products.map((product) => (
            <ListItem
              onClick={() => onSelectItem(product.category)}
              key={product.id}
              isActive={activeFilterCategory === product.category}
            >
              {product.category}
            </ListItem>
          ))}
        </List>
      </FilterPopup>}
    </Filter>
  )
}

FilterProductCategory.propTypes = {
  activeFilterCategory: PropTypes.string.isRequired,
  products: PropTypes.arrayOf(PropTypes.object).isRequired,
  onClickFilterCategory: PropTypes.func.isRequired,
}

FilterProductCategory.defaultProps = {
  products: []
}

export default FilterProductCategory
