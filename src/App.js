import React from 'react';
import './App.css';
import  Row from './Row';
import requests from './requests';
import Banner from "./Banner";
import Nav from "./Nav";
//
//import styled from 'styled-components';
//import { Modal } from './components/Modal';
//import { GlobalStyle } from './globalStyles';
//

function App() {
  return (
    <div className="App">
      < Nav />
      < Banner />
      <Row 
      title="NETFLIX ORIGINALS" 
      fetchUrl={requests.fetchNetflixOriginals}
      isLargeRow
      />
      <Row title="Trending Now" fetchUrl={requests.fetchTrending} />
      <Row title="Top Rated" fetchUrl={requests.fetchTopRated} />
      <Row title="Action Movies" fetchUrl={requests.fetchActionMovies} />
      <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies} />
      <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies} />
      <Row title="Romance Movies" fetchUrl={requests.fetchRomanceMovies} />
      <Row title="Documentaries" fetchUrl={requests.fetchDocumentaries} />
      

    </div>
  );
}

// export default App;





// const Container = styled.div`
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   height: 100vh;
// `;

// const Button = styled.button`
//   min-width: 100px;
//   padding: 16px 32px;
//   border-radius: 4px;
//   border: none;
//   background: #141414;
//   color: #fff;
//   font-size: 24px;
//   cursor: pointer;
// `;

// function App() {
//   const [showModal, setShowModal] = useState(false);

//   const openModal = () => {
//     setShowModal(prev => !prev);
//   };

//   return (
//     <>
//       <Container>
//         <Button onClick={openModal}>I'm a modal</Button>
//         <Modal showModal={showModal} setShowModal={setShowModal} />
//         <GlobalStyle />
//       </Container>
//     </>
//   );
// }

export default App;
