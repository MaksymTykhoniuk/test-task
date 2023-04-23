import HomeLogo from '../assets/picture2_1.png';

const Home = () => {
  return (
    <main
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <h1>Welcome to tweets</h1>
      <img src={HomeLogo} alt="Logo" />
    </main>
  );
};

export default Home;
