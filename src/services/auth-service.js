import axios from "axios"
import authHeader from './auth-header';

const API_URL = "https://localhost:44318/api/v1"

class AuthService 
{
    login(user)
    {
        let endpoint = API_URL + "/authentication/login"
            
        console.log({ endpoint, method: "POST" })

        let response = axios.post(endpoint, {
            content: 
            {
                username: user.username,
                password: user.password
            }
        })
        .then(resp => 
        { 
            console.log(resp.data)
            if(resp.data.content) localStorage.setItem("user", JSON.stringify(resp.data.content))
        })
        .catch(err => {
            console.error(err.response)
            if (err.response.data.error.message) throw new Error(err.response.data.error.message)
            else throw err
        })

        return response
    }

    logout()
    {
        try 
        {
            let auth_header = authHeader()
            let endpoint = API_URL + "/authentication/logout"

            console.log({ endpoint, method: "POST" })

            if(auth_header)
            {
                axios.post(endpoint, { headers: auth_header })
            }
        } 
        catch (error) { console.error(error) }

        localStorage.removeItem("user")
    }

    register(user)
    {
        let endpoint = API_URL + "/authentication/register"
        
        console.log({ endpoint, method: "POST" })
        
        let response = axios.post(endpoint,
        {
            content: {
                nickname: user.nickname,
                password: user.password,
                uuid: user.uuid,
                email: user.email,
                isPremium: user.isPremium,
                localeRegion: user.locale,
                currentIP: user.ip
            }
        })

        return response
    }
}

export default new AuthService();