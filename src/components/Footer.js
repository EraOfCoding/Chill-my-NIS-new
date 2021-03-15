import React from 'react'
import '../style/footer.css'

function Footer() {
    return(
        <div className="footer">
            <h2>Chill my NIS</h2>
            <div>
                <h3>Server: Was created by <a onClick={() => window.open('https://discord.com/users/682950658671902730')}>Dosek</a></h3>
                <h3>Website: Was made with ❤️ by <a onClick={() => window.open('https://github.com/EraOfCoding')}>Yerassyl</a></h3>
            </div>
        </div>
    )
}

export default Footer