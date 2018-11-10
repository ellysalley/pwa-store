import Head from "next/head";
import Link from "next/link";
import Header from "../components/Header"
import withLayout from "../lib/withLayout";

const Index = () => (
  <div>
    <head>
      <title>Home | Elly's Store</title>
    </head>
    <h1>Hello from the index</h1>{" "}
    <Link href={"/about"}>
      <a>About Page</a>
    </Link>
  </div>
);

export default withLayout(Index);