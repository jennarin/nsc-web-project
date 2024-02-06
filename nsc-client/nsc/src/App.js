import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';

import PublicHomePage from './pages/home/public/homepage/public_home_page';

import HomePage from './pages/home/member/homepage/home_page';
import ProjectInfoPage from './pages/home/member/project_info/project_info_page';
import MemberAnnouncementPage from './pages/home/member/annoucement/announcement_page';

import AdminHomePage from './pages/home/admin/homepage/admin_home_page';
import AdminProjectInfoPage from './pages/home/admin/project_info/project_info_page';
import AdminAnnouncementPage from './pages/home/admin/announcement/admin_announcement_page';

import Footer from './components/footer/footer';
import AdminProjectListPage from './pages/home/admin/project_list/project_list_page';
import LogInPage from './pages/home/public/log_in/login_page';
import NotFoundPage from './pages/home/public/not_found/not_found_page';



function App() {
  return (

    <Router>
      <div>
        <Switch>

          {/* public page */}
          <Route exact path='/'>
            <PublicHomePage />
          </Route>

          {/* log in page */}
          <Route exact path='/login'>
            <LogInPage />
          </Route>

          {/* member */}
          {/* main */}
          <Route exact path='/id/'>
            <HomePage />
          </Route>

          <Route exact path="/id/announcement/">
            <MemberAnnouncementPage />
          </Route>
          {/* member project info */}
          <Route exact path="/id/project_info">
            <ProjectInfoPage />
          </Route>

          {/* admin */}
          {/* main */}
          <Route exact path='/nsc-admin/'>
            <AdminHomePage />
          </Route>

          {/* announcement */}
          <Route exact path="/nsc-admin/announcement">
            <AdminAnnouncementPage />
          </Route>


          {/* project-info */}
          <Route exact path='/nsc-admin/id/project_info'>
            <AdminProjectInfoPage />
          </Route>

  
          {/* project-list */}
          <Route exact path="/nsc-admin/project_list">
            <AdminProjectListPage />
          </Route>

          {/* 404-not-found */}
          <Route component={NotFoundPage} />
        </Switch>

      </div>
      <Footer />
    </Router>


  );
}

export default App;
