
import { Outlet, useNavigate } from "react-router-dom"

export const Layout = () => {
    const navigate = useNavigate()

    const handleTodosClick = () => {
        // server
        navigate('/todos')
    }
    
    return (
        <div className="layout">

            <button onClick={handleTodosClick}>todos</button>
            <button onClick={() => navigate('/products')}>products</button>
            
            <Outlet />

            <div className="footer">
                footer
            </div>
        </div>
    )
}