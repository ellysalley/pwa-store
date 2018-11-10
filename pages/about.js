import Head from "next/head";
import withLayout from "../lib/withLayout";

const About = () => (
  <div>
    <head>
      <title>About | Elly's Store</title>
    </head>
    <h1>
      About page
    </h1>
  </div>
);

export default withLayout(About);