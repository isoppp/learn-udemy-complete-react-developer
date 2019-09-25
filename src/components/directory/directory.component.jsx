import React from 'react'
import './directory.styles.scss'
import { sections } from './directory.data'

import MenuItem from '../menu-item/menu-item.component';

class Directory extends React.Component {
  constructor () {
    super();

    this.state = {
      sections,
    }
  }

  render () {
    return (
      <div className="directory-menu">
        {this.state.sections.map(({ title, imageUrl, id, size }) => (
          <MenuItem title={title} imageUrl={imageUrl} id={id} size={size} />
          ))}
      </div>
    )
  }
}

export default Directory;
