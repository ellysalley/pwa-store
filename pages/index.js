import Head from "next/head";
import Header from "../components/Header";
import Button from "../components/Button";
import { Layout } from "antd";
const { Content } = Layout;

export default ({ data }) => (
  <>
    <Head>
      <title>Home | Elly's store</title>
    </Head>
    <Header
      centerColumn={<h4>Elly's store</h4>}
      rightColumn={
        <Button href="/cart" text="Cart" btnIcon={"shopping-cart"} />
      }
      leftColumn={<Button href="/search" text="Search" btnIcon={"search"} />}
    />
    <Content style={{ padding: "0 50px" }}>
      <div
        style={{
          display: "grid",
          gridGap: "10px",
          gridTemplateColumns: "repeat(auto-fit, minmax(100px, 1fr))",
          width: "100%"
        }}
      >
        <Button
          href={`/category?name=men`}
          hrefAs={`/category/men`}
          text={"Men"}
        />
        <Button
          href={`/category?name=women`}
          hrefAs={`/category/women`}
          text={"Women"}
        />
        <Button
          href={`/category?name=shoes`}
          hrefAs={`/category/shoes`}
          text={"Shoes"}
        />
        <Button
          href={`/category?name=dresses`}
          hrefAs={`/category/dresses`}
          text={"Dresses"}
        />
        <Button
          href={`/category?name=suits`}
          hrefAs={`/category/suits`}
          text={"Suits"}
        />
      </div>
    </Content>
  </>
);
