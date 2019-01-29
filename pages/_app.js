import { Layout } from "antd";
import App, { Container } from "next/app";
import React from "react";
import withApollo from "../lib/withApollo";
import { ApolloProvider } from "react-apollo";
const { Footer } = Layout;

class MyApp extends App {
  static async getInitialProps({ Component, ctx }) {
    let pageProps = {};
    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }
    return { pageProps };
  }

  componentDidCatch() {
    if ("serviceWorker" in navigator) {
      navigator.serviceWorker
        .register("sw.js")
        .then(result => console.log("SW Registered :", result))
        .catch(error => console.log("Can't register SW :", error));
    }
  }
  render() {
    const { Component, pageProps, apollo } = this.props;
    return (
      <ApolloProvider client={apollo}>
        <Container>
          <Layout>
            <Component {...pageProps} />
            <Footer>This is footer</Footer>
          </Layout>
        </Container>
      </ApolloProvider>
    );
  }
}

export default withApollo(MyApp);
