import LandingPage from './pages/LandingPage';

import Layout from './components/layout/Layout';

import classes from './App.module.scss';

function App() {
  return (
    <Layout className={classes.layout}>
      <LandingPage />
    </Layout>
  );
}

export default App;
