import styled from 'styled-components'

export const CartItemContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  border: 2px solid #c4adad;
  border-radius: 10px;
  margin-bottom: 15px;
  padding: 10px;
`
export const ProductImg = styled.img`
  width: 50px;
  height: 50px;
`
export const CartItemInfo = styled.div`
  max-width: 430px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`
export const CartItemTitle = styled.h3`
  min-width: 100px;
  margin-left: 20px;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
`
export const Wrap = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`
export const WrapCartItemCount = styled.div`
  width: 130px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`
export const CartItemPrice = styled.div`
  min-width: 100px;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
`

