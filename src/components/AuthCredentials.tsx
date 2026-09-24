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
                <Button rightIcon={<img style={{height: 20}} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQg8osQDK0Kmjxoan7eh04xI0Ya0KLVhnA3UsydJwtLNQ&s"/>}>Signup</Button>
            </Center>
        </div>
    </div>
}   