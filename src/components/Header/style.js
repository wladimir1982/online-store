import styled from 'styled-components'
import {NavLink} from 'react-router-dom'

export const ButtonCart = styled(NavLink)`
  min-width: 100px;
  display: flex;
  align-items: center;
  background-color: crimson;
  border-radius: 20px;
  border: 1px solid transparent;
  text-align: center;
  cursor: pointer;
  transition: background-color .3s ease-in-out, border-color .3s ease-in-out;
  line-height: 23px;
  padding: 12px 25px;
`
export const VerticalLine = styled.div`
  width: 2px;
  height: 25px;
  background-color: rgba(255, 255, 255, 0.25);
  margin-left: 14px;
  margin-right: 14px;
`
export const Price = styled.span`
  font-weight: bold;
  color: #fff;
`
export const TotalCount = styled.span`
  margin-left: 10px;
  font-weight: bold;
  color: #fff;
`