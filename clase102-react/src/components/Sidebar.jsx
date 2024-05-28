import React from 'react'
import logoDH from '../assets/images/logo-DH.png'

export function Sidebar() {
  return (
    <ul class="navbar-nav bg-gradient-secondary sidebar sidebar-dark accordion" id="accordionSidebar">
      {/* Sidebar */}

    {/* Sidebar - Brand */}
    <a class="sidebar-brand d-flex align-items-center justify-content-center" href="/">
      <div class="sidebar-brand-icon">
        <img class="w-100" src={logoDH} alt="Digital House" />
      </div>
    </a>

    {/* Divider */}
    <hr class="sidebar-divider my-0" />

    {/* Nav Item - Dashboard */}
    <li class="nav-item active">
      <a class="nav-link" href="/">
        <i class="fas fa-fw fa-tachometer-alt"></i>
        <span>Dashboard - DH movies</span></a>
    </li>

    {/* Divider */}
    <hr class="sidebar-divider" />

    {/* Heading */}
    <div class="sidebar-heading">Actions</div>

    {/* Nav Item - Pages */}
    <li class="nav-item">
      <a class="nav-link collapsed" href="/">
        <i class="fas fa-fw fa-folder"></i>
        <span>Pages</span>
      </a>
    </li>

    {/* Nav Item - Charts */}
    <li class="nav-item">
      <a class="nav-link" href="/">
        <i class="fas fa-fw fa-chart-area"></i>
        <span>Charts</span></a>
    </li>

    {/* Nav Item - Tables */}
    <li class="nav-item">
      <a class="nav-link" href="/">
        <i class="fas fa-fw fa-table"></i>
        <span>Tables</span></a>
    </li>

    {/* Divider */}
    <hr class="sidebar-divider d-none d-md-block" />
    {/* End of Sidebar */}
  </ul>
  )
}
