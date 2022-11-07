import Head from "next/head";
import Link from "next/link";
import Date from "../components/date";
import Layout, { siteTitle } from "../components/layout";
import utilStyles from "../styles/utils.module.scss";
import { getSortedPostsData } from "../lib/posts";
import { GetStaticProps } from 'next'

export const getStaticProps: GetStaticProps = async () => {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}

export default function Home({ allPostsData }) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>
          The giant panda (Ailuropoda melanoleuca), also known as the panda bear
          (or simply the panda), is a bear species endemic to China. It is
          characterised by its bold black-and-white coat and rotund body. The
          name "giant panda" is sometimes used to distinguish it from the red
          panda, a neighboring musteloid. Though it belongs to the order
          Carnivora, the giant panda is a folivore, with bamboo shoots and
          leaves making up more than 99% of its diet. Giant pandas in the wild
          occasionally eat other grasses, wild tubers, or even meat in the form
          of birds, rodents, or carrion. In captivity, they may receive honey,
          eggs, fish, yams, shrub leaves, oranges, or bananas along with
          specially prepared food.
        </p>
        <p>
          (If you want to learn more - please visit{" "}
          <a href="https://en.wikipedia.org/wiki/Giant_panda">Wiki-page</a>{" "}
          about pandas.)
        </p>
      </section>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
              <Link href={`/posts/${id}`}>{title}</Link>
              <br />
              <small className={utilStyles.lightText}>
                <Date dateString={date} />
              </small>
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  );
}
