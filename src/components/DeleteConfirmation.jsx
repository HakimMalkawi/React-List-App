import "../css/delete-confirmation.css"

const DeleteConfirmation = props => {
    return  <>  {   props.children  }
                {   props.show &&   
                    <section className="confirmation-container">
                        <div className="confirmation-content">
                            <h1 className="confirmation-prompt">Are you sure you want to delete this item off of your list?</h1>
                            <button className="confirmation-confirmation" onClick={props.handleClick}>Confirm</button>
                            <button className="confirmation-decline" onClick={props.close}>Decline</button>
                        </div>
                    </section>  }   </> }
export default DeleteConfirmation