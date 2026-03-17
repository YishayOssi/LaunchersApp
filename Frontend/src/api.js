export async function getAllLauncher(){
    try{
        const res = await fetch("http://localhost:3020/api/launchers", {
            method: "GET",
            headers: {"Authorization": localStorage.getItem("token")}
        })
        
        if(!res.ok){
            return null
        } 
        const data = await res.json()
            return data
    
    }catch(error){
        return null
    };
    
}



export async function sendLauncher(launcher){
    try{
        const res = await fetch("http://localhost:3020/api/launchers", {
            method: "POST",
            headers: {"content-type": "application/json"},
            body: JSON.stringify(launcher) 
        })
        if(!res.ok){
            console.log(res);
            
            return null
        } 
        const result = await res.json()
            return result
    
    }catch(error){
        console.log(error);
        
        return null
    };
    
}


export async function getLauncherById(id){
    try{
        const res = await fetch(`http://localhost:3020/api/launchers/${id}`, {
            method: "GET"
        })
        if(!res.ok){
            return null
        } 
        const data = await res.json()
            return data
    
    }catch(error){
        return null
    };
    
}  



export async function fetchLogin(username, password){
    try{
        const res = await fetch(`http://localhost:3020/api/auth/login`, {
            method: "POST",
            headers: {"content-type": "application/json"},
            body: JSON.stringify({username, password})
        })
        if(!res.ok){
            return null
        } 
        const data = await res.json()
            return data
    
    }catch(error){
        return null
    };
    
}

export async function fetchMe(){
    try{
        const res = await fetch(`http://localhost:3020/api/auth/getUser`, {
            method: "GET",
            headers: {"Authorization": localStorage.getItem("token")}
        })
        if(!res.ok){
            return null
        } 
        const data = await res.json()
            return data
    
    }catch(error){
        return null
    };
    
}
