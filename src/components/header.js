import React from 'react'

const header = () => {
    return ( <
        div >
        <
        h1 id = 'headh1' > Guitar World < img src = 'images/glogo.png'
        alt = 'Guitar World'
        className = 'glogo' / > < /h1> 

        <
        nav id = 'headNav' >
        <
        ul >

        <
        li > <
        a href = '#home'
        className = 'heada' > Home < /a> </li >
        <
        li > <
        a href = '#home'
        className = 'heada' > Guitars < /a></li >
        <
        li > <
        a href = '#home'
        className = 'heada' > About < /a></li >
        <
        li > <
        a href = '#home'
        className = 'heada' > Contact < /a></li > <
        /ul> < /
        nav >
        <
        a id = 'carticon'
        href = '#home' > < img src = 'images/shop-cart.png'
        alt = 'Shoping Cart'
        className = 'shopcart' /
        >
        <
        /a >

        <
        /div>
    )
}

export default header