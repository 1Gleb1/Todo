import { useState } from "react"
import AddTodo from "./AddTodo"
import Navbar from "./Navbar"

const Layout = ({children, isUser} : any) => {
    const [showForm, setShowForm] = useState(false)
    
    const openShowForm = () => {
        setShowForm(true)
    }
    const closeShowForm = () => {
        setShowForm(false)
    }

    return (
        <>
            {children}
            {isUser && (<>
                <AddTodo closeShowForm={closeShowForm} show={showForm} />
                <Navbar openShowForm={openShowForm} />
            </>)
            }
        </>
    )
}

export default Layout