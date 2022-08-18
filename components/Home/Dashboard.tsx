import { FunctionComponent } from "react"
import DashboardHeader from "./DashboardHeader"
import { FeaturedListings } from "./FeaturedListings"
import { NFTLendingListings } from "./NFTLendingListings"

const Dashboard: FunctionComponent = () => {
    return (
        <div className="md:pl-64 mx-auto big:w-2/3 tablet:w-11/12 laptop:w-11/12 chromebook:w-10/12 md:w-11/12 sm:w-10/12 w-11/12 flex flex-col">
          <DashboardHeader  />
          <FeaturedListings />
          <NFTLendingListings />
      </div>
    )
}

export default Dashboard