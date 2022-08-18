import { FunctionComponent } from "react"
import DashboardHeader from "./DashboardHeader"

const Dashboard: FunctionComponent = () => {
    return (
        <div className="md:pl-64 flex flex-col mx-16">
          <DashboardHeader  />
          <main className="flex-1">
            <div className="py-6">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
                <h1 className="text-2xl font-semibold text-gray-900">Dashboard</h1>
              </div>
              <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
                <div className="py-4">
                  <div className="border-4 border-dashed border-gray-200 rounded-lg h-96"></div>
                </div>
              </div>
            </div>
          </main>
      </div>
    )
}

export default Dashboard