import React from 'react'

function BookReadMore(props) {
    
    console.log(props)
  return (
    <div>
        <h3>Strona dla wybranej ksiazki</h3>
        {props.Book.name}
    </div>
  )
}

export default BookReadMore