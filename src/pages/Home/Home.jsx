import React from 'react'
import '../Home/Home.scss'
import Draggable, {DraggableCore} from 'react-draggable';
import Folder from '../../assets/folder.png'

  
class Home extends React.Component {
  

     
    render () {

    return (
        <div class='home-wrapper'>
            <Draggable>
 
            <div className='handle'>
                <div class='desktop-icon'>
            <img src={Folder} id='folder' className='folder-icon' alt='' />
            <p class='desktop-icon-text'>New Folder</p>
	</div>
    </div>
      </Draggable> 
        </div>
    )
}
}



export default Home

