import FormCard from "./common/formCard";
import Joi from "joi";
import cardService from "../services/cardService";
import "../styles/createCards.css";

class CreateCards extends FormCard {
  state = {
    form: {
      title: "",
      description: "",
      cardImage: "",
    },
  };

  schema = {
    title: Joi.string().min(2).max(255).required().label("Name"),
    description: Joi.string().min(2).max(1024).required().label("Description"),
    cardImage: Joi.string().min(11).max(1024).label("Image").allow(""),
    cardFavorite: Joi.boolean(),
  };

  doSubmit = async () => {
    const {
      form: { cardImage, ...body },
    } = this.state;
    if (cardImage) {
      body.cardImage = cardImage;
    }
    try {
      await cardService.createCard(body);
      window.location = "/my-cards";
    } catch ({ response }) {
      if (response && response.status === 400) {
        this.setState({ errors: { cardImage: response.data } });
      }
    }
  };

  render() {
    return (
      <div className='container'>
        <p className='heading'>Share Your Meals with us</p>

        <form
          onSubmit={this.handleSubmit}
          noValidate='novalidate'
          autoComplete='off'
        >
          <div className='write'>
            {this.renderInput({ name: "title", label: "Title" })}
            {this.renderDescriptionInput({
              name: "description",
              label: "Description",
            })}
            {this.renderInput({ name: "cardImage", label: "Image" })}

            <div className='writeSubmit'>{this.renderButton("Publish")} </div>
          </div>
        </form>
      </div>
    );
  }
}

export default CreateCards;
