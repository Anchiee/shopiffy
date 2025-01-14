import "../../Style/main.css"

function Footer() 
{
  return(
    <footer>
      <h3>Shopiffy {new Date().getFullYear()}. All rights reserved</h3>
      <p>This project is open source. 
        <a href="https://github.com/Anchiee/shopiffy" target="blank">
          Repository
        </a>
      </p>
    </footer>

  )
}

export default Footer