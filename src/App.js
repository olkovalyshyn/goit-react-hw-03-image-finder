import { Component } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Loader from "react-loader-spinner";

import ImageGallery from "./components/ImageGallery";
import Searchbar from "./components/Searchbar";
import api from "./services/galleryApi";
import Button from "./components/Button";
import Modal from "./components/Modal";

// import "./App.css";

class App extends Component {
  state = {
    inputValue: "",
    images: [],
    status: "idle",
    pageNumber: 1,
    isloading: false,
    showModal: false,
    largeImage: {},
  };

  componentDidUpdate(prevProps, prevState) {
    if (
      prevState.inputValue !== this.state.inputValue ||
      prevState.pageNumber !== this.state.pageNumber
    ) {
      this.setState({ isloading: true });
      // setTimeout for a test (visible) compoent Loader
      setTimeout(() => {
        this.fetchImages();
      }, 1000);
    }

    // if (prevState.pageNumber !== this.state.pageNumber) {
    //   window.scrollTo({
    //     top: document.documentElement.scrollHeight,
    //     behavior: "smooth",
    //   });
    // }
  }

  fetchImages() {
    const { inputValue, pageNumber } = this.state;

    api
      .fetchGallery(inputValue, pageNumber)
      .then((img) => {
        this.setState({
          images: [...this.state.images, ...img],
          pageNumber: pageNumber,
        });
      })
      .finally(this.setState({ isloading: false }));
  }
  // if (prevState.inputValue !== this.state.inputValue) {
  //   this.setState({ status: "pending" });

  //   api
  //     .fetchGallery(this.state.inputValue, this.state.pageNumber)
  //     .then((base) => {
  //       if (base.total === 0) {
  //         return Promise.reject(
  //           new Error(
  //             `Sorry, виникла помилка.Немає інфо по запиту ${this.state.inputValue}`
  //           )
  //         );
  //       }
  //       this.setState((state) => {
  //         return {
  //           images: base.hits,
  //           status: "resolved",
  //           page: state.pageNumber + 1,
  //         };
  //       });
  //     })
  //     .catch((error) => this.setState({ error, status: "rejected" }));
  // }

  // {
  //   this.setState({ status: "pending" });
  //   fetch(
  //     `https://pixabay.com/api/?q=dog&page=11&key=19034439-608cc2a9f2617ed99a498289b&image_type=photo&orientation=horizontal&per_page=12`
  //   )
  //     .then((response) => {
  //       if (response.ok) {
  //         return response.json();
  //       }
  //       return Promise.reject(
  //         new Error(
  //           `Сорі, виникла помилка.Немає інфо по запиту ${this.state.inputValue}`
  //         )
  //       );
  //     })
  //     .then((images) =>
  //       this.setState({ images: images.hits, status: "resolved" })
  //     )
  //     .catch((error) => this.setState({ error, status: "rejected" }));
  // }

  incomingValueFromInput = (value) => {
    this.setState({ inputValue: value });
  };

  loadMore = () => {
    this.setState((prevState) => ({ pageNumber: prevState.pageNumber + 1 }));
    this.hundleScrollTo();
  };

  hundleScrollTo = () => {
    setTimeout(() => {
      window.scrollTo({
        top: document.documentElement.scrollHeight,
        behavior: "smooth",
      });
    }, 1000);
  };

  toggleModal = (event) => {
    this.setState(({ showModal, largeImage }) => ({
      showModal: !showModal,
      largeImage: event.target.dataset,
    }));
    console.log("!!!this.state.largeImage", this.state.largeImage);
  };

  // addLargeImgForModal = (event) => {
  //   console.log("!!!ВЕЛИКЕ зображення модалки", event.target.dataset);
  // };

  render() {
    // if (this.state.status === "idle") {
    //   return <div>Enter your request</div>;
    // }

    // if (this.state.status === "pending") {
    //   return <h1>ЗАВАНТАЖУЮ...</h1>;
    // }

    // if (this.state.status === "rejected") {
    //   return <h1>{this.state.error.message}</h1>;
    // }

    // if (this.state.status === "resolved") {
    //   return <ImageGallery images={this.state.images};
    // }

    return (
      <>
        <Searchbar onSubmit={this.incomingValueFromInput} />
        {/* if (this.state.status === "pending") */}
        {this.state.inputValue && (
          <ImageGallery
            images={this.state.images}
            onToggleModal={this.toggleModal}
          />
        )}
        {this.state.images.length > 0 && (
          <Button onClickButton={this.loadMore} />
        )}

        {this.state.isloading && (
          <Loader type="ThreeDots" color="#00BFFF" height={80} width={80} />
        )}

        {this.state.showModal && (
          <Modal onClose={this.toggleModal}>
            <img src={this.state.largeImage} alt="" />
          </Modal>
        )}

        <ToastContainer
          position="top-center"
          autoClose={3000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
      </>
    );
  }
}

export default App;
