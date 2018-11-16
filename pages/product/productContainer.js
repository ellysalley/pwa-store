import { withRouter } from "next/router";
import ProductPresenter from "./productPresenter";

class ProductContainer extends React.Component {
  static async getInitialProps(props) {
    console.log(props);
  }
  render() {
    return <ProductPresenter />;
  }
}

export default withRouter(ProductContainer);
