import { FunctionComponent } from "react"
import DashboardHeader from "./DashboardHeader"
import { FeaturedListings } from "./FeaturedListings"

const Dashboard: FunctionComponent = () => {
    return (
        <div className="md:pl-64 container mx-auto flex flex-col">
          <DashboardHeader  />
          <FeaturedListings />
      </div>
    )
}

export default Dashboard