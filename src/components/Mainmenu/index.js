import { Link } from "react-router-dom"

const MainMenu =() =>{
    let menuItems= [
       
        {title: "О нac", link:"/about"}

    ]
    return (
        <div className="flex gap-6">
            {menuItems.map((item)=>(
                <Link to = {item.link}>{item.title}</Link>
            ))}

        </div>

    );
    
}
export default MainMenu;