import { JSX } from "react";

function Header(): JSX.Element{
    return (<>
        <div className="bg-gray-200 h-[10vh] border-b-2 border-black fixed top-0 left-0 w-full text-blue-400">
            <h1 className="text-center text-6xl">
                IEEE EUI
            </h1>
        </div>
        <div className="h-[11vh]">

        </div>
    </>);
}

export default Header;