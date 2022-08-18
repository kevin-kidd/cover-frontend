import { FunctionComponent } from "react"
import DashboardHeader from "./DashboardHeader"
import { FeaturedListings } from "./FeaturedListings"

const Dashboard: FunctionComponent = () => {
    return (
        <div className="md:pl-64 mx-auto tablet:w-11/12 laptop:w-11/12 chromebook:w-10/12 md:w-11/12 sm:w-10/12 w-11/12 flex flex-col">
          <DashboardHeader  />
          <FeaturedListings />
      </div>
    )
}

export default Dashboard