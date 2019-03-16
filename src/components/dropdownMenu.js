import React from 'react'
import { Dropdown } from 'semantic-ui-react'

const options = [
  { key: 1, text: 'WATCH', value: 'WATCH' },
  { key: 2, text: 'CLOTHES', value: 'CLOTHES' },
  { key: 3, text: 'AKSESORIS', value: 'AKSESORIS' },
]

const DropdownExampleUpwardSelection = () => (
  <Dropdown defaultValue={options} upward search selection options={options} placeholder='Choose an option' />
)

export default DropdownExampleUpwardSelection

