import * as React from "react"

const Footer = () => (
    <footer>
        <div className="container">
            © {new Date().getFullYear()} &middot; Built by {` `}
            <a href="https://www.linkedin.com/in/upscalepixels/" target="_blank" rel="noreferrer">Michael Beasley</a>
        </div>
    </footer>
)

export default Footer