import React from 'react'

function Footer(){
    const date = new Date()
    let year = date.getFullYear()

    const footer = {
        textAlign : "center",
        
    }

    return (
        <footer>
            <h6 style = {footer}> Made with love by Lucie | { year }</h6>
        </footer>
    )
}

export default Footer