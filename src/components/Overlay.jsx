import {useState, useEffect} from "react"
import {nanoid} from "nanoid"
import Search from "./Search"
import Item from "./Item"
import "../css/overlay.css"

const Overlay = () => {
    const [itemList, setItemList] = useState(localStorage.getItem("items") ? JSON.parse(localStorage.getItem("items")) : [])
    useEffect(()=>{ localStorage.setItem("items", JSON.stringify(itemList)) }, [itemList])
    
    return  <>  <div className="app-container">
                <Search handleClick={setItemList} />
                <main className="items-container" style={itemList.length > 6 ? {overflowY: "scroll"} : {overflow: "hidden"}}>
                { itemList && itemList.map(item => <Item key={nanoid()} item={item} handleClick={setItemList} />) }
                </main>    
                </div>  </> }
export default Overlay