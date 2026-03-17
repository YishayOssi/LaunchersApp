import jwt from "jsonwebtoken"

export function authGlobal(req, res, next){
    try{
        const tokenHeaders = req.headers.authorization
        if(!tokenHeaders) return res.json({message: "Token not received!"})
        const token = tokenHeaders.split(" ")[1] || tokenHeaders
        const checkToken = jwt.verify(token, process.env.JWT_SECRET)
        if(!checkToken) return res.json({message: "The token is invalid!"})
        req.user = {username: checkToken.username, user_type: checkToken.user_type}    
        next()
    }catch(error){
        return res.status(500).json({message: "Server error validating the token!"})
    }
}

export function adminAuth(req, res, next){
    try{
        const user_type = req.user.user_type
        if(user_type !== "admin") return res.json({message: "Administrator permission required!!"})
        next()
 
    }catch(error){
        return res.status(500).json({message: "Server-side error!"})
    }
}

export function intelligence(req, res, next){
    try{
        const user_type = req.user.user_type
        if(user_type !== "admin" || user_type !== "intelligenceCorps") return res.json({message: "Administrator or Intelligence Corps permission required!"})
        next()
 
    }catch(error){
        return res.status(500).json({message: "Server-side error!"})
    }
}

export function air(req, res, next){
    try{
        const user_type = req.user.user_type
        if(user_type !== "admin" && user_type !== "intelligenceCorps" && user_type !== "airForce") return res.json({message: "Administrator permission required!!"})
        next()
 
    }catch(error){
        return res.status(500).json({message: "Server-side error!"})
    }
}

