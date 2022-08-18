import { FunctionComponent } from "react";


export const AdvancedButton: FunctionComponent = () => {
  return (
    <button className="lg:h-16 lg:w-36 sm:h-12 sm:w-24 h-8 w-16 desktop:ml-20 tablet:ml-12 laptop:ml-10 ml-5 bg-[#FF6767] justify-center gap-2 flex items-center rounded-lg text-white lg:text-kindasmall sm:text-tiny text-sm hover:bg-[#ff7676]">
      <svg xmlns="http://www.w3.org/2000/svg" className="lg:w-4 lg:h-4 sm:w-3 sm:h-3 w-2 h-2" fill="white" viewBox="0 0 512 512">
        <path d="M304 192v32c0 6.6-5.4 12-12 12h-56v56c0 6.6-5.4 12-12 12h-32c-6.6 0-12-5.4-12-12v-56h-56c-6.6 0-12-5.4-12-12v-32c0-6.6 5.4-12 12-12h56v-56c0-6.6 5.4-12 12-12h32c6.6 0 12 5.4 12 12v56h56c6.6 0 12 5.4 12 12zm201 284.7L476.7 505c-9.4 9.4-24.6 9.4-33.9 0L343 405.3c-4.5-4.5-7-10.6-7-17V372c-35.3 27.6-79.7 44-128 44C93.1 416 0 322.9 0 208S93.1 0 208 0s208 93.1 208 208c0 48.3-16.4 92.7-44 128h16.3c6.4 0 12.5 2.5 17 7l99.7 99.7c9.3 9.4 9.3 24.6 0 34zM344 208c0-75.2-60.8-136-136-136S72 132.8 72 208s60.8 136 136 136 136-60.8 136-136z"/>
      </svg>
      Advanced
    </button>
  )
}