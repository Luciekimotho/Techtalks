import React from 'react'

function Footer(){
    const date = new Date()
    let year = date.getFullYear()

    return (
        <footer>
            <h4> Made with love by Lucie | { year }</h4>
        </footer>
    )
}

export default Footer