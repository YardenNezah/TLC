import axios from "axios"

export const authMiddleware = async (hasTokenNavigate: boolean, hasNotTokenNavigate: boolean, deleteToken: boolean) => {

    const noTokenHandler = () => {
        if(deleteToken)
        {
          localStorage.removeItem("role")
          localStorage.removeItem("token")
        }
        if(hasNotTokenNavigate) document.location.href = "http://localhost:3000/"
    }
    const token: any = localStorage.getItem("token")
    if(!token) noTokenHandler()
    try {
    const res = await axios.get("http://localhost:8080/auth/getByToken", {
      headers: {
        "auth-token": token
      }
    })
    localStorage.setItem("role", res.data.result.role || null)
    if(res.data.result._id && hasTokenNavigate) document.location.href = "http://localhost:3000/"
    } catch(err) {
    noTokenHandler()
  }
  }
