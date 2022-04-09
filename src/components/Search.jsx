import {useState} from "react"
import "../css/search.css"

const Search = props => {
    const [currentItem, setCurrentItem] = useState("")
    const handleChange = event => setCurrentItem(event.target.value)

    const enter = e => { switch(e.key) { case "Enter": return handleClick() } }

    const handleClick = () => {
        if (currentItem.length >= 1) {
            props.handleClick(prevList => {
                for(const item of prevList) { if (item.name === currentItem) { return prevList } }
                setCurrentItem("")
                const newList = [...prevList].map(item => ({...item, id: item.id + 1}))
                return [{id: 1, name: currentItem, checked: false, count: 1}, ...newList]   } ) }   }

    return  <>  <aside className="search-container">
                <input className="search-bar" type="text" placeholder="Enter item here" value={currentItem} onChange={handleChange} onKeyDown={enter}></input>
                <p className="search-button" onClick={handleClick}>{"+"}</p> 
                </aside>    </> }
export default Search