type SearchProps = {
    loadUser: (userName: string) => Promise<void>
}
import { BsSearch } from "react-icons/bs";
import { useState, KeyboardEvent } from "react";
import classes from './Search.module.css'

export default function Search({loadUser}: SearchProps) {
    const [username, setUserName] = useState('')
    const handleKeyDown = (e: KeyboardEvent) => {
        if(e.key === "Enter"){
            loadUser(username)
        }
    }
    return(
        <div className={classes.search}>
            <h2>Busque por um usuário:</h2>
            <p>Conheça seus repositórios</p>
            
            <div className={classes.search_container}>
                <input type="text" 
                placeholder="Digite o nome do usuário:"
                onChange={(e) => setUserName(e.target.value)}
                onKeyDown={handleKeyDown}/>

                <button onClick={() => loadUser(username)}>
                    <BsSearch />
                </button>
            </div>
        </div>
    )
}