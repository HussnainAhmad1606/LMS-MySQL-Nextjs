import React from 'react'

function DashboardCard({title, number}) {
  return (
    <div className="stats shadow mx-5">
  
  <div className="stat">
    <div className="stat-title">{title}</div>
    <div className="stat-value">{number}</div>
    {/* <div className="stat-desc">21% more than last month</div> */}
  </div>
  
</div>
  )
}

export default DashboardCard