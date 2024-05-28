import "./assets/css/app.css";
import { Sidebar } from "./components/Sidebar";


function App() {
  return (
    <div id="wrapper">
    {/* Page Wrapper */}

		<Sidebar />

		{/* Content Wrapper */}
		<div id="content-wrapper" class="d-flex flex-column">

			{/* Main Content */}
			<div id="content">

				{/* Topbar */}
				<nav class="navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow">

					{/* Sidebar Toggle (Topbar) */}
					<button id="sidebarToggleTop" class="btn btn-link d-md-none rounded-circle mr-3">
						<i class="fa fa-bars"></i>
					</button>

					{/* Topbar Navbar */}
					<ul class="navbar-nav ml-auto">

						{/* Nav Item - Alerts */}
						<li class="nav-item dropdown no-arrow mx-1">
							<a class="nav-link dropdown-toggle" href="/" id="alertsDropdown">
								<i class="fas fa-bell fa-fw"></i>
								{/* Counter - Alerts */}
								<span class="badge badge-danger badge-counter">3+</span>
							</a>
						</li>

						{/* Nav Item - Messages */}
						<li class="nav-item dropdown no-arrow mx-1">
							<a class="nav-link dropdown-toggle" href="/" id="messagesDropdown">
								<i class="fas fa-envelope fa-fw"></i>
								{/* Counter - Messages */}
								<span class="badge badge-danger badge-counter">7</span>
							</a>
						</li>

						<div class="topbar-divider d-none d-sm-block"></div>

						{/* Nav Item - User Information */}
						<li class="nav-item dropdown no-arrow">
							<a class="nav-link dropdown-toggle" href="/" id="userDropdown">
								<span class="mr-2 d-none d-lg-inline text-gray-600 small">Jordan Walke</span>
								<img class="img-profile rounded-circle" src="assets/images/jordan-walke.png" alt="Jordan Walke - Creador de React" width="60" />
							</a>
						</li>

					</ul>

				</nav>
				{/* End of Topbar */}

				{/* Content Row Top */}
				<div class="container-fluid">
					<div class="d-sm-flex align-items-center justify-content-between mb-4">
						<h1 class="h3 mb-0 text-gray-800">App Dashboard</h1>
					</div>
				
					{/* Content Row Movies*/}
					<div class="row">

						{/* Movies in Data Base */}
						<div class="col-md-4 mb-4">
							<div class="card border-left-primary shadow h-100 py-2">
								<div class="card-body">
									<div class="row no-gutters align-items-center">
										<div class="col mr-2">
											<div class="text-xs font-weight-bold text-primary text-uppercase mb-1">Movies in Data Base</div>
											<div class="h5 mb-0 font-weight-bold text-gray-800">21</div>
										</div>
										<div class="col-auto">
											<i class="fas fa-film fa-2x text-gray-300"></i>
										</div>
									</div>
								</div>
							</div>
						</div>

						{/* Total awards */}
						<div class="col-md-4 mb-4">
							<div class="card border-left-success shadow h-100 py-2">
								<div class="card-body">
									<div class="row no-gutters align-items-center">
										<div class="col mr-2">
											<div class="text-xs font-weight-bold text-success text-uppercase mb-1"> Total awards</div>
											<div class="h5 mb-0 font-weight-bold text-gray-800">79</div>
										</div>
										<div class="col-auto">
											<i class="fas fa-award fa-2x text-gray-300"></i>
										</div>
									</div>
								</div>
							</div>
						</div>

						{/* Actors quantity */}
						<div class="col-md-4 mb-4">
							<div class="card border-left-warning shadow h-100 py-2">
								<div class="card-body">
									<div class="row no-gutters align-items-center">
										<div class="col mr-2">
											<div class="text-xs font-weight-bold text-warning text-uppercase mb-1">Actors quantity
											</div>
											<div class="h5 mb-0 font-weight-bold text-gray-800">49</div>
										</div>
										<div class="col-auto">
											<i class="fas fa-user fa-2x text-gray-300"></i>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					{/* End movies in Data Base */}
					
	
					{/* Content Row Last Movie in Data Base */}
					<div class="row">
						{/* Last Movie in DB */}
						<div class="col-lg-6 mb-4">
							<div class="card shadow mb-4">
								<div class="card-header py-3">
									<h5 class="m-0 font-weight-bold text-gray-800">Last movie in Data Base</h5>
								</div>
								<div class="card-body">
									<div class="text-center">
										<img class="img-fluid px-3 px-sm-4 mt-3 mb-4" style={{width:"40rem"}} src="assets/images/mandalorian.jpg" alt=" Star Wars - Mandalorian " />
									</div>
									<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores, consequatur explicabo officia inventore libero veritatis iure voluptate reiciendis a magnam, vitae, aperiam voluptatum non corporis quae dolorem culpa citationem ratione aperiam voluptatum non corporis ratione aperiam voluptatum quae dolorem culpa ratione aperiam voluptatum?</p>
									<a class="btn btn-danger" target="_blank" rel="nofollow" href="/">View movie detail</a>
								</div>
							</div>
						</div>
						{/* End content row last movie in Data Base */}

						{/* Genres in DB */}
						<div class="col-lg-6 mb-4">						
							<div class="card shadow mb-4">
								<div class="card-header py-3">
									<h5 class="m-0 font-weight-bold text-gray-800">Genres in Data Base</h5>
								</div>
								<div class="card-body">
									<div class="row">
										<div class="col-lg-6 mb-4">
											<div class="card bg-dark text-white shadow">
												<div class="card-body">
													Acción
												</div>
											</div>
										</div>
										<div class="col-lg-6 mb-4">
											<div class="card bg-dark text-white shadow">
												<div class="card-body">
													Animación
												</div>
											</div>
										</div>
										<div class="col-lg-6 mb-4">
											<div class="card bg-dark text-white shadow">
												<div class="card-body">
													Aventura
												</div>
											</div>
										</div>
										<div class="col-lg-6 mb-4">
											<div class="card bg-dark text-white shadow">
												<div class="card-body">
													Ciencia Ficción
												</div>
											</div>
										</div>
										<div class="col-lg-6 mb-4">
											<div class="card bg-dark text-white shadow">
												<div class="card-body">
													Comedia
												</div>
											</div>
										</div>
										<div class="col-lg-6 mb-4">
											<div class="card bg-dark text-white shadow">
												<div class="card-body">
													Documental
												</div>
											</div>
										</div>
										<div class="col-lg-6 mb-4">
											<div class="card bg-dark text-white shadow">
												<div class="card-body">
													Drama
												</div>
											</div>
										</div>
										<div class="col-lg-6 mb-4">
											<div class="card bg-dark text-white shadow">
												<div class="card-body">
													Fantasia
												</div>
											</div>
										</div>
										<div class="col-lg-6 mb-4">
											<div class="card bg-dark text-white shadow">
												<div class="card-body">
													Infantiles
												</div>
											</div>
										</div>
										<div class="col-lg-6 mb-4">
											<div class="card bg-dark text-white shadow">
												<div class="card-body">
													Musical
												</div>
											</div>
										</div>

									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				{/*End Content Row Top*/}
			</div>
			{/* End of MainContent */}

			{/* Footer */}
			<footer class="sticky-footer bg-white">
				<div class="container my-auto">
					<div class="copyright text-center my-auto">
						<span>Copyright &copy; Dashboard 2021</span>
					</div>
				</div>
			</footer>
			{/* End of Footer */}

		</div>
		{/* End of Content Wrapper */}

	  {/* End of Page Wrapper */}
	</div>
  );
}

export default App;
