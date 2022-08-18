import { FunctionComponent, useState } from "react"
import DashboardHeader from "./DashboardHeader"
import { FeaturedListings } from "./FeaturedListings"
import { NFTLendingListings } from "./NFTLendingListings"

const Dashboard: FunctionComponent = () => {
  const [darkHeader, setDarkHeader] = useState(false);
  
    return (
      <div className="flex flex-col justify-center w-full">
        <DashboardHeader />
        <FeaturedListings />
        <NFTLendingListings />
      </div>
    )
};

export default Dashboard