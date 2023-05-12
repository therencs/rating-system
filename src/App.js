import './assets/styles/App.css';
import { FaStar } from 'react-icons/fa';
import StarRating from './components/StarRating.js';
import Dialog from './components/Dialog.js'
import { useState } from 'react'


function App() {

  let ableToClickBtn = true;

  const [visible, setVisible] = useState(false)

  const enableDialog = () => {
      setVisible(true)
    
  }

  const disableDialog = () => {
    setVisible(false)
  }


  return (
    <>
      <main id={visible ? "darkened" : ""}>
        <StarRating darken={visible}>

        </StarRating>
          <Dialog 
          enableDialog={enableDialog} 
          disableDialog={disableDialog}
          show={visible}
          ableToClickBtn={ableToClickBtn}
        />

      </main>
    <section>
    <button id={visible ? '' : 'canhover'} onClick={enableDialog}>
        Open Dialog
      </button>
    </section>
    </>
  );
}

export default App;
