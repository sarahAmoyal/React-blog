import React from "react";
import withRouter from "./common/withRouter";
import cardService from "../services/cardService";

class DeleteCard extends React.Component {
  async componentDidMount() {
    const cardId = this.props.params.id;
    await cardService.deleteCard(cardId);
    this.props.navigate("/my-cards");
  }

  render() {
    return null;
  }
}

export default withRouter(DeleteCard);
