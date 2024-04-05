import React from 'react'

const Textarea = (props) => {
  return (
    <textarea placeholder={props.placeholder} id={props.id} rows={props.rows} cols={props.cols} className='textArea'></textarea>
  )
}

export default Textarea;