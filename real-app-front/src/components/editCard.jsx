import React from "react";
import Joi from "joi";
// import Form from "./common/form";
import FormCard from "./common/formCard";
import cardService from "../services/cardService";
import withRouter from "./common/withRouter";
import "../styles/editCard.css";

class EditCard extends FormCard {
  state = {
    form: {
      title: "",
      description: "",
      cardImage: "",
    },
    errors: {},
  };
  schema = {
    _id: Joi.string(),
    title: Joi.string().min(2).max(255).required().label("Name"),
    description: Joi.string().min(2).max(1024).required().label("Description"),
    cardImage: Joi.string().min(11).max(1024).label("Image").uri().allow(""),
  };

  async componentDidMount() {
    const cardId = this.props.params.id;
    const { data } = await cardService.getCards(cardId);
    this.setState({ form: this.mapToViewModel(data) });
  }
  mapToViewModel(card) {
    return {
      _id: card._id,
      title: card.title,
      description: card.description,
      cardImage: card.cardImage,
    };
  }

  doSubmit = async () => {
    const { form } = this.state;
    await cardService.editCard(form);
    this.props.navigate("/my-cards");
  };
  handleCancel = () => {
    this.props.navigate("/my-cards");
  };
  render() {
    const { form } = this.state;
    return (
      <div className=''>
        <p className='headingEdit'>Edit Your Card</p>

        <form onSubmit={this.handleSubmit} autoComplete='off' method='POST'>
          <div className='writeEdit'>
            {this.renderInput({
              name: "title",
              label: "Name",
              value: form.title,
            })}
           {this.renderDescriptionInput({
              name: "description",
              label: "Description",
            })}

            {this.renderInput({
              name: "cardImage",
              label: "Image",
              value: form.cardImage,
            })}

            <div className='btnDive'>
              {this.renderButton("Update Card")}

              <button className='cancelBtn ' onClick={this.handleCancel}>
                Cancel
              </button>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default withRouter(EditCard);
