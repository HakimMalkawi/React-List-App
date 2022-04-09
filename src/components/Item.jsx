import {useState} from "react"
import DeleteConfirmation from "./DeleteConfirmation"
import "../css/item.css"

const Item = props => {
    const [deleteConfirmation, setDeleteConfirmation] = useState(false)

    const changeCount = (event, operator) => props.handleClick(prevState => 
        prevState.map(item => item.id === JSON.parse(event.target.parentNode.parentNode.id) ? 
            {...item, count: operator === "+" ? item.count + 1 : item.count === 1 ? 1 : item.count - 1 } : item )   )

    const checkItem = event => props.handleClick(prevState => 
        prevState.map(item => item.id === JSON.parse(event.target.parentNode.parentNode.id) ? 
            {...item, checked: !item.checked} : item )  )

    const deleteItem = event => { 
            props.handleClick(prevItemList => 
                prevItemList.filter(item => item.id !== JSON.parse(event.target.parentNode.parentNode.parentNode.parentNode.id ) )    )   
            setDeleteConfirmation(false)    }

    return <> <section className="item-container" id={props.item.id}>
                    <div className="item-content">
                        <input className="item-check" defaultChecked={props.item.checked} onClick={checkItem} id={CSS.escape(props.item.id)} type="checkbox"></input>
                        <label className="item-label" htmlFor={CSS.escape(props.item.id)}>{props.item.name}</label>
                    </div>
                    <div className="item-controls">
                        <button className="item-sub" type="button" onClick={event => changeCount(event, "-")}>{"-"}</button>
                        <p className="item-count">{props.item.count}</p>
                        <button className="item-add" type="button" onClick={event => changeCount(event, "+")}>{"+"}</button>
                        <DeleteConfirmation handleClick={deleteItem} show={deleteConfirmation} close={()=>setDeleteConfirmation(false)}>
                            <div onClick={()=>setDeleteConfirmation(true)} className="item-del"></div>
                        </DeleteConfirmation>
                    </div>
                    <hr className="item-divider"/>
                </section>  </> }
export default Item