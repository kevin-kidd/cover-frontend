import { FunctionComponent, useState } from "react";
import { truncateAddress } from "../functions/helper";
import { useMenuStore } from "../states/MenuState";


export const MenuFooter: FunctionComponent = () => {

    const [hoverExit, setHoverExit] = useState(false)
    const [isCopied, setIsCopied] = useState(false)

    const walletConnected = useMenuStore((state) => state.walletConnected)
    const setWalletConnected = useMenuStore((state) => state.setWalletConnected)

    const secretAddress = "secret18ld7zwzkgsfv9z6phqhlsft9prjysulpdq950z"
    const truncatedAddress = truncateAddress(secretAddress)

    if(walletConnected) {
        return (
          <div className="row-span-2 row-end-10 max-w-xs md:w-64 w-full flex items-end">
            <div className="bg-gray-700 p-4 border-r-2 border-b-2 border-gray-800 w-full">
              <div className="flex items-center">
                <div 
                  className="h-12 w-12 bg-gray-900 rounded-full hover:cursor-pointer"
                  onClick={() => setWalletConnected(false)}
                  onMouseEnter={() => setHoverExit(true)} onMouseLeave={() => setHoverExit(false)}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="h-12 w-12 py-3 fill-gray-500 hover:fill-gray-400 transition duration-150">
                    <path d="M96 480h64C177.7 480 192 465.7 192 448S177.7 416 160 416H96c-17.67 0-32-14.33-32-32V128c0-17.67 14.33-32 32-32h64C177.7 96 192 81.67 192 64S177.7 32 160 32H96C42.98 32 0 74.98 0 128v256C0 437 42.98 480 96 480zM504.8 238.5l-144.1-136c-6.975-6.578-17.2-8.375-26-4.594c-8.803 3.797-14.51 12.47-14.51 22.05l-.0918 72l-128-.001c-17.69 0-32.02 14.33-32.02 32v64c0 17.67 14.34 32 32.02 32l128 .001l.0918 71.1c0 9.578 5.707 18.25 14.51 22.05c8.803 3.781 19.03 1.984 26-4.594l144.1-136C514.4 264.4 514.4 247.6 504.8 238.5z"/>
                  </svg>
                </div>
                <div className="ml-3">
                  <div className="has-tooltip hover:cursor-pointer" 
                  onClick={() => { 
                    document.addEventListener('copy', function(e) {
                        e.clipboardData.setData('text/plain', secretAddress);
                        e.preventDefault();
                    }, true);
                
                    document.execCommand('copy');
                    setIsCopied(true)
                  }} 
                  onMouseLeave={() => setIsCopied(false)}>
                    <span className={`tooltip rounded shadow-lg p-1 px-2 bg-gray-200 text-black text-sm -mt-8 justify-center ${isCopied ? "ml-10" : "ml-3"}`}>{isCopied ? "Copied!" : "Copy to clipboard"}</span>
                    <p className="text-sm font-medium text-white w-2/3 md:w-40">{ truncatedAddress }</p>
                  </div>
                  <p className={`text-xs font-medium ${hoverExit ? "text-gray-300" : "text-gray-400"}`}>Disconnect wallet</p>
                </div>
              </div>
            </div>
          </div>
        )
    }
    return (
      <div className="row-span-2 pb-2">
        <div className="flex items-center justify-center">
            <button 
                onClick={() => setWalletConnected(true)}
                className="bg-[#5596DC] px-5 py-4 text-white font-medium text-md rounded-lg transition duration-150 hover:bg-blue-400"
            >
                Connect Wallet
            </button>
        </div>
      </div>
    )
}