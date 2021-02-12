import styled from 'styled-components'

export const Container = styled.div`
  width: 90%;
  margin: 0 auto;
`
export const TopRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 100px 0 20px;
`
export const Title = styled.h2`
  width: 300px;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
`
export const LoaderBlock = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`