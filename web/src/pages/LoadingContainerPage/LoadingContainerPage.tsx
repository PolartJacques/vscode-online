import { FunctionComponent } from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCog } from '@fortawesome/free-solid-svg-icons'
import './LoadingContainerPage.css'

const LoadingContainerPage: FunctionComponent = () => {
  return (
    <div className="container">
      <div className="content">
        <FontAwesomeIcon icon={faCog} size="lg" spin />
        <p>Loading the environement...</p>
      </div>
    </div>
  )
}

export default LoadingContainerPage