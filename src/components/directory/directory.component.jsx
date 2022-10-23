import DirectoryItem from '../directory-item/directory-item.component'

import './directory.styles'
import { DirectoryContainer } from './directory.styles'

const Directory = ({categories}) => {
  return (
    <DirectoryContainer>
      {
        categories.map((category) => {
          return (
            <DirectoryItem category={category} key={category.id} />
          )
        })
      }
    </DirectoryContainer>
  )
}

export default Directory