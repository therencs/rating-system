function Dialog(props) {

  return (
    <>
      
      <dialog open={props.show ? 'open' : false}>
        <h3>This is a dialog?</h3>
        <div className="funnyImage"></div>
        <p>YES SIR</p>
        <form method="dialog">
          <button id="canhover" onClick={props.disableDialog}>Close</button>
        </form>
      </dialog>
    </>
  )
}

export default Dialog