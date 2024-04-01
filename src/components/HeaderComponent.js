import React from 'react'

const HeaderComponent = () => {
  return (
    <div>
        <header>
            <nav className='navbar navbar-expand-md navbar-dark bg-dark'>
                    <a href ='http://localhost:3000/' className='navbar-brand'>
                       <h1>Product App</h1> 
                    </a>
            </nav>
        </header>
    </div>
  )
}

export default HeaderComponent