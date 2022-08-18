import { FunctionComponent, useState } from "react";
import { truncateAddress } from "../functions/helper";
import { useMenuStore } from "../states/MenuState";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSignOutAlt } from "@fortawesome/free-solid-svg-icons";

export const MenuFooter: FunctionComponent = () => {

    const [hoverExit, setHoverExit] = useState(false)
    const [isCopied, setIsCopied] = useState(false)

    const walletConnected = useMenuStore((state) => state.walletConnected)
    const setWalletConnected = useMenuStore((state) => state.setWalletConnected)

    const secretAddress = "secret18ld7zwzkgsfv9z6phqhlsft9prjysulpdq950z"
    const truncatedAddress = truncateAddress(secretAddress)

    if(walletConnected) {
        return (
          <div className="row-span-1 flex items-end">
            <div className="bg-gray-700 p-4 border-r-2 border-b-2 border-gray-800 w-full">
              <div className="grid grid-cols-4 flex items-center">
                <div 
                  className="col-span-1 mx-auto bg-gray-900 flex justify-center rounded-full hover:cursor-pointer w-2/3 h-full"
                  onClick={() => setWalletConnected(false)}
                  onMouseEnter={() => setHoverExit(true)} onMouseLeave={() => setHoverExit(false)}
                >
                  <FontAwesomeIcon icon={faSignOutAlt} className={`mx-auto p-2 default:p-4 big:p-6 4k:p-8 h-auto w-auto transition duration-150 ${hoverExit ? "text-gray-400" : "text-gray-500"}`} />
                </div>
                <div className="col-span-3 mr-3 lg:mr-5 4k:mr-12">
                  <div className="has-tooltip hover:cursor-pointer w-full flex justify-center" 
                  onClick={() => { 
                    document.addEventListener('copy', function(e) {
                        e.clipboardData.setData('text/plain', secretAddress);
                        e.preventDefault();
                    }, true);
                
                    document.execCommand('copy');
                    setIsCopied(true)
                  }} 
                  onMouseLeave={() => setIsCopied(false)}>
                    <span className={`tooltip rounded shadow-lg p-1 px-2 bg-gray-200 text-black -mt-9 default:-mt-10 big:-mt-14 4k:-mt-20 text-kindasmall default:text-base big:text-2xl 4k:text-4xl`}>{isCopied ? "Copied!" : "Copy to clipboard"}</span>
                    <p className="text-kindasmaller xl:text-kindasmall default:text-lg big:text-2xl 4k:text-4xl font-medium text-white truncate">{ secretAddress }</p>
                  </div>
                  <p 
                    className={`text-tiny default:text-kindasmall big:text-lg 4k:text-2xl font-medium hover:cursor-pointer  transition duration-150 ${hoverExit ? "text-gray-300" : "text-gray-400"}`}
                    onClick={() => setWalletConnected(false)}
                    onMouseEnter={() => setHoverExit(true)} 
                    onMouseLeave={() => setHoverExit(false)}
                  >
                    Disconnect wallet
                  </p>
                </div>
              </div>
            </div>
          </div>
        )
    }
    return (
      <div className="row-span-1 flex justify-center mb-5 px-8 mx-2 md:px-6">
        <div className="flex items-center justify-center">
            <button 
                onClick={() => setWalletConnected(true)}
                className="
                  p-4 desktop:p-5 big:p-7 4k:p-10
                  rounded-lg desktop:rounded-xl big:rounded-2xl 4k:rounded-2xl
                  text-kindasmall desktop:text-base default:text-xl big:text-3xl 4k:text-5xl
                  bg-[#5596DC] text-white font-medium transition duration-150 hover:bg-[#66a0df]"
            >
                Connect Wallet
            </button>
        </div>
      </div>
    )
}