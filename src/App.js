import { Component } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ImageGallery from "./components/ImageGallery/ImageGallery";
import Searchbar from "./components/Searchbar";

// import "./App.css";

class App extends Component {
  state = {
    inputValue: "",
    // images: [],
    // loading: false,
  };

  // componentDidMount() {
  //   this.setState({ loading: true });

  //   fetch(
  //     `https://pixabay.com/api/?q=dog&page=1&key=19034439-608cc2a9f2617ed99a498289b&image_type=photo&orientation=horizontal&per_page=12`
  //   )
  //     .then((response) => response.json())
  //     .then((images) => this.setState({ images: images }))
  //     .finally(() => this.setState({ loading: false }));
  // }

  incomingValueFromInput = (value) => {
    this.setState({ inputValue: value });
  };

  render() {
    return (
      <>
        <Searchbar onSubmit={this.incomingValueFromInput} />
        {/* <div>
          {this.state.inputValue && <p>{this.state.images.webformatURL}</p>}
        </div>

        <div>{this.state.loading && <h1>ЗАВАНТАЖУЮ...</h1>}</div>
 */}
        <ImageGallery inputValue={this.state.inputValue} />
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
