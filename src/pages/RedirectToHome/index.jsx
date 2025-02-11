import { useEffect } from "react"
import { useNavigate } from "react-router-dom"

export function RedirectToHome() {
    const navigate = useNavigate()
    useEffect(() => {
        navigate("/")
    }, [])

    return null
}