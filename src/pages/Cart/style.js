import styled from 'styled-components'

export const Content = styled.div`
  padding: 140px 0 40px;
`
export const Container = styled.div`
  width: 90%;
  max-width: 820px;
  margin: 0 auto;
`
export const CartWrap = styled.div`
`
export const CartTop = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`
export const ContentTitle = styled.h2`
  display: flex;
  align-items: center;
  font-size: 32px;
`
export const ContentItems = styled.ul`
  max-height: 300px;
  overflow: auto;
  padding: 0 20px;
  margin: 50px 0;
`
export const CartBottom = styled.div`
`
export const CartBottomDetails = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 20px;
`
export const TextWrap = styled.span`
`
export const ValueWrap = styled.span`
  font-size: 30px;
  font-weight: bolder;
  color: ${p => p.isPrice ? 'maroon' : 'black'};
`
export const CartBottomButtons = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`
export const WrapDetails = styled.div`
  width: 300px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`
export const CartEmptyBlock = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`
export const CartEmptyImage = styled.img`
  width: 180px;
  height: 180px;
  margin: 20px 0;
`
export const CartEmptyTitle = styled.h3`
  text-align: center;
  margin-bottom: 20px;
  font-size: 30px;
  font-weight: 600;
`
export const CartEmptyDesc = styled.p`
  text-align: center;
`
