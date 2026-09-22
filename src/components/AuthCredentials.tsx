import { Center } from "./Center"

export function AuthCredentials() {
    return <div style={{minHeight: "100vh", display: "flex", alignItems: "center"}}>
        <div style={{width: "100%"}}>
            <Center>
                <div style={{fontSize: 30}}>
                    Log in to Trello
                </div>
            </Center>
            <Center>
                connect to Trello with:
            </Center>
            <Center>
                <input type="text" placeholder="email"/>
            </Center>
            <Center>
                <input type="text" placeholder="password"/> 
            </Center>
        </div>
    </div>
}