import Link from "next/link";

import {VscGistSecret, VscHome, VscKey} from "react-icons/vsc";

import UserList from "@/components/Menu/UserList";
import ThemeSwitch from "@/components/ThemeSwitch";
import Auth from "@/components/Menu/Auth";


export default function Menu({userName}: { userName: string }) {
    return (
        <div className="navbar bg-base-100">
            <div className={'flex-1'}>
                <UserList userName={userName}/>
            </div>
            <div className="flex-none">
                <Link href={"/"}><a>
                    <button className={'btn btn-square btn-ghost'}>
                        <VscHome className={"w-6 h-6"}/>
                    </button>
                </a></Link>

                <Link href={`/p/${userName}`}><a>
                    <button className={'btn btn-square btn-ghost'}>
                        <VscGistSecret className={"w-6 h-6"}/>
                    </button>
                </a></Link>

                <Auth/>

                <Link href={"/key"}><a>
                    <button className={'btn btn-square btn-ghost'}>
                        <VscKey className={"w-6 h-6"}/>
                    </button>
                </a></Link>

                <ThemeSwitch/>
            </div>
        </div>
    )
}