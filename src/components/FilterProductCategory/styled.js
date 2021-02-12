import styled from 'styled-components'
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown'

export const Filter = styled.div`
  position: relative;
`
export const FilterLabel = styled.div`
  width: 160px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 2px solid #fff;
  border-radius: 5px;
  padding: 5px;
  cursor: pointer;
`
export const FilterPopup = styled.div`
  width: 160px;
  position: absolute;
  right: 0;
  margin-top: 15px;
  background: #ffffff;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.09);
  border-radius: 10px;
  overflow: hidden;
  padding: 10px 0;
`
export const List = styled.ul`
  height: 250px;
  overflow: auto;
`
export const ListItem = styled.li`
  ${p => p.isActive && `color: crimson; font-weight: bold;`};
  padding: 12px 10px;
  margin-left: 10px;
  cursor: pointer;
  &:hover {
    background-color: teal;
    transition: .3s ease;
  }
`
export const DropDownIcon = styled(ArrowDropDownIcon)`
  ${p => p.$visiblePopup ? `transform: rotate(180deg)` : `transform: rotate(0deg)`};
  color: #fff;
  transition: .3s ease;
`
export const CurrentValue = styled.span`
  color: #fff;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
`