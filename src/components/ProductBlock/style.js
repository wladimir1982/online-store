import styled from 'styled-components'

export const Container = styled.li`
  width: 300px;
  height: 426px;
  margin-bottom: 20px;
  padding: 20px;
  background: cyan;
`
export const ProductImg = styled.img`
  width: 100%;
  height: 180px;
`
export const ProductTitle = styled.p`
  font-size: 24px;
  text-align: center;
  text-overflow: ellipsis;
  overflow: auto;
`
export const ProductPrice = styled.p`
  padding: 10px 0;
  text-align: center;
  color: #f84147;
  font-size: 30px;
  font-weight: bolder;
`
export const ButtonBlocks = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`
export const MainContent = styled.div`
  height: 206px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`
export const Wrap = styled.div`
`