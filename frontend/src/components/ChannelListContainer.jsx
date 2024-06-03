import React from "react"
import { ChannelList, useChatContext } from "stream-chat-react"
import { ChannelSearch, TeamChannelList, TeamChannelPreview } from "./"
import Cookies from "universal-cookie"
import AppLogo from "../assets/AppLogo.png"

const SideBar = () => (
    <div className="w-[72px] bg-blue-500 bg-gradient-to-t from-[rgba(0,0,0,0.2)] to-[rgba(0,0,0,0.2)] shadow-[1px_0px_0px_rgba(0,0,0,0.25)]">
        <div className="">
            <div className="">
                <img src={AppLogo} alt="logo" width="30" />
            </div>
        </div>
    </div>
)
const ChannelListContainer = () => {
    return <div>ChannelList</div>
}

export default ChannelListContainer
