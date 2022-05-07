import { Route, Routes } from "react-router-dom";
import About from "./components/about";
import userService from "./services/userService";
import Footer from "./components/footer";
import Home from "./components/home";
import Navbar from "./components/navbar";
import SignUp from "./components/Signup";
import SignIn from "./components/Signin";
import React from "react";
import LogOut from "./components/logout";
import CreateCards from "./components/createCards";
import MyCards from "./components/myCards";
import EditCard from "./components/editCard";
import DeleteCard from "./components/deleteCard";
import MyFavorite from "./components/MyFavorite";
class App extends React.Component {
  state = {
    user: null,
  };

  componentDidMount() {
    this.setState({
      user: userService.getUser(),
    });
  }
  render() {
    const { user } = this.state;
    return (
      <div className='App d-flex flex-column min-vh-100'>
        <header>
          <Navbar user={user} />
        </header>
        <main className='container flex-fill'>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/signup' element={<SignUp />} />
            <Route path='/signin' element={<SignIn />} />
            <Route path='/logout' element={<LogOut />} />
            <Route path='/create-cards' element={<CreateCards />} />
            <Route path='/my-cards' element={<MyCards />} />
            <Route path='/my-cards/edit/:id' element={<EditCard />} />
            <Route path='/my-cards/delete/:id' element={<DeleteCard />} />
            <Route path='/my-favorite' element={<MyFavorite />} />
          </Routes>
        </main>
        <footer>
          <Footer />
        </footer>
      </div>
    );
  }
}

export default App;
