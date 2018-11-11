import Head from "next/head";
import withLayout from "../lib/withLayout";
import PostLink from "../components/PostLink";

export default () => (
  <div>
    <head>
      <title>Home | Elly's Store</title>
    </head>
    <h1>Posts:</h1>{" "}
    <ul>
      <li>
        <PostLink title={"Something"} />
      </li>
      <li>
      <PostLink title={"Something Else"} / >
      </li>
    </ul>
  </div>
);