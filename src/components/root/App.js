import React from "react";
import "./App.css";
import { getNews } from "../../api/News/provider";
import Modal from "react-modal";
import News from "../News/News";
import NewsFooter from "../News/Footer/NewsFooter";
import Button from "../Button/Button";
import { useOrientation } from "../../common/hooks/useOrientation";

function App() {
  const [results, setResults] = React.useState([]);
  const [modalIsOpen, setIsOpen] = React.useState(false);
  const [modalData, setModalData] = React.useState({});

  console.log(useOrientation());

  getNews().then(setResults);

  const openNewsModal = (modalData) => {
    setModalData(modalData);
    setIsOpen(true);
  };

  const closeNewsModal = () => {
    setModalData({});
    setIsOpen(false);
  };

  return (
    <div className="App_wrapper">
      <h1 className="App_title">
        Фейк на Фейке и Фейком погоняет)))<br></br> Ребята, прошу не обижаться))</h1>
      <div className="App_all-news">
        {results.map((result) => (
          <div
            key={result.id}
            className="App_news-block"
            onClick={() => openNewsModal(result)}
          >
            <h3 className="App_news__title">
              <a href={result.url}>{result.title}</a>
            </h3>

            <div className="App_image-block">
              <img
                className="App_image"
                src={result.image}
                alt={result.title}
              />
            </div>
            <NewsFooter
              author={result.author}
              category={result.category}
              releaseDate={result.releaseDate}
            />
          </div>
        ))}
      </div>
      <Modal isOpen={modalIsOpen}>
        <News {...modalData}></News>
        <Button onClick={() => closeNewsModal()}>Закрыть</Button>
      </Modal>
    </div>
  );
}

export default App;
