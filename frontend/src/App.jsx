import React from "react"
import { StreamChat } from "stream-chat"
import { Chat } from "stream-chat-react"
import Cookies from "universal-cookie"
import env from "react-dotenv"

const apiKey = env.STREAM_API_KEY
const client = StreamChat.getInstance(apiKey)

const App = () => {
    return (
        <div className="app_wrapper">
            <Chat client={client} theme="team light">
                <ChannelList />
                <Channel />
            </Chat>
        </div>
    )
}

export default App
