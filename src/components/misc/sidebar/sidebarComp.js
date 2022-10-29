import React from 'react'
import { Link } from 'react-router-dom'
import './sidebar.css'
function SidebarComp() {
  return (
    <div>
  <nav id="sidebarMenu" class=" d-md-block sidebar collapse bg-white">
    <div class="position-sticky">
      <div class="list-group list-group-flush mx-3 mt-4">
        <Link
          to='/'
          className="list-group-item list-group-item-action py-2 ripple active "
          aria-current="true"
        >
          <i className="fas fa-tachometer-alt fa-fw me-3 mb-3"></i><span>Main dashboard</span>
        </Link>
        <Link to='/category' className="list-group-item list-group-item-action py-2 ripple ">
          <i className="fas fa-chart-area fa-fw me-3"></i><span>Category</span>
        </Link>
        <Link to='/cars' className="list-group-item list-group-item-action py-2 ripple"
          ><i className="fas fa-car-side fa-fw me-3"></i><span>Cars</span></Link
        >
    
      </div>
    </div>
  </nav>

    </div>
  )
}

export default SidebarComp