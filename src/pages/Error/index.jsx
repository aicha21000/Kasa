import { Link } from 'react-router-dom'
import './_index.scss'

function Error() {
  return (
    <div className='errorContainer container'>
      <div className='textError'>
        <h1 className='errorCode'>404</h1>
        <p>Oups! La page que vous demandez n'existe pas.</p>
      </div>
      <Link className='backTo' to="/">Retour à l'accueil</Link>

    </div>
  )
}
export default Error;