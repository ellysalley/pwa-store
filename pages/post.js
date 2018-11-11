import Head from "next/head";
import { withRouter } from "next/router";
import withLayout from "../lib/withLayout";

const Post = props => (
  <div>
    <Head>
      <title>{props.router.query.title} | Elly's Store</title>
    </Head>
    {JSON.stringify(props)}
    <h1>{props.router.query.title}</h1>
    <p>blahblahblah</p>
  </div>
);

export default withLayout(withRouter(Post));