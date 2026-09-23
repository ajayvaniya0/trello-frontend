import { Button } from "./Button"
import { Center } from "./Center"
import { Input } from "./Input"

export function AuthCredentials() {
    return <div style={{minHeight: "100vh", display: "flex", alignItems: "center"}}>
        <div style={{width: "100%"}}>
            <Center>
                <div style={{fontSize: 30, padding: 20}}>
                    Log in to Trello
                </div>
            </Center>
            <Center>
                connect to Trello with:
            </Center>
            <Center>
                <Input type="text" placeholder="email"/>
            </Center>
            <Center>
                <Input type="password" placeholder="password"/>
            </Center>
            <Center>
                <Button>Signup</Button>
            </Center>
        </div>
    </div>
}   