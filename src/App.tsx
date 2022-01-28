import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import NotFound from './pages/NotFound';
import { navigationRoutes } from './routes';

function App() {

  return (
    <BrowserRouter>
      <div className={"tm-row pt-4"}>
        <div className={"tm-col-left"}>
            <div className={"tm-site-header media"}>
                <div className={"media-body"}>
                    <h1 className={"tm-sitename text-uppercase"}>sanyogorbunov</h1>
                    <p className={"tm-slogon"}>Personal Website</p>
                </div>        
            </div>
        </div>
        <div className={"tm-col-right"}>
            <nav className={"navbar navbar-expand-lg"} id="tm-main-nav">
                <button className={"navbar-toggler toggler-example mr-0 ml-auto"} type="button" 
                    data-toggle="collapse" data-target="#navbar-nav" 
                    aria-controls="navbar-nav" aria-expanded="false" aria-label="Toggle navigation">
                    <span><i className={"fas fa-bars"}></i></span>
                </button>
                <div className={"collapse navbar-collapse tm-nav"} id="navbar-nav">
                  <ul className={"navbar-nav text-uppercase"}>
                    { navigationRoutes.map(route => (
                        <li className={"nav-item"}>
                            <Link className={"nav-link tm-nav-link"} to={route.href}>{route.label}</Link>
                        </li>                
                    )) }
                </ul>
              </div>                        
            </nav>
        </div>
      </div>
            
      <div className={"tm-row"}>
          <div className={"tm-col-left"}></div>
          <main className={"tm-col-right tm-contact-main"} id="root">
            <Routes>
              { navigationRoutes.map(route => (
                <Route path={route.href} element={<route.page/>} />
              )) }
              <Route path="*" element={<NotFound/>} />
            </Routes>
          </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
