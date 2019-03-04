import { Article } from "../Article";
import Head from "next/head";

function Home() {
  return (
    <>
      <Head>
        <link href="https://rsms.me/inter/inter.css" rel="stylesheet" />
      </Head>
      <style jsx global>
        {`
          html,
          body {
            background-color: #313;
            color: white;
            padding: 0;
            margin: 0;
            margin-bottom: 6em;
          }

          a {
            color: #7fffd4;
          }
          hr {
            display: block;
            height: 1px;
            border: 0;
            border-top: 1px solid #ccc;
            margin: 1em 0;
            padding: 0;
          }
          h1 {
            background: #ff0074;
            font-family: "Inter";
            font-weight: 300;
            font-size: 2rem;
            text-align: center;
            height: 3rem;
            color: #5d0f44;
            margin-bottom: 3rem;
            padding-top: 1.5rem;
            margin-top: 0;
            letter-spacing: 0.25em; /* Fallback if the cap unit isn't supported  */
            line-height: 1.2;
            text-transform: uppercase;
          }
          h2 {
            font-family: "Inter";
            font-weight: 700;
            color: #ff0074;
            font-size: 4rem;
          }
          body {
             {
              /* font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
              Helvetica, Arial, sans-serif;
               */
            }
            font-family: "Inter";
            font-weight: 200;
            text-align: center;
            font-size: 16px;
          }
          .article {
            max-width: 957px;
            margin: 0 auto;
          }
          .article__body {
            text-align: left;
            text-align: left;
            line-height: 2;
            font-size: 1.6rem;
            color: #fef;
            font-weight: 500;
            letter-spacing: 0.15ex;
            margin-left: 2rem;
            margin-right: 2rem;
          }
          .article__body p {
            margin-top: 2rem;
            margin-bottom: 2rem;
          }
          .article__image {
            z-index: 10;
            max-width: 100vw;
          }
        `}
      </style>
      <div class="top">
        <h1>{"{jimthedev / blog}"}</h1>
      </div>

      <Article
        publishedAt={"1 March 2019 9:00 CST"}
        header={<h2>diving into .dev domains</h2>}
        image="/static/dive-in.gif"
      >
        <p>
          I remember reading about{" "}
          <a href="https://www.theregister.co.uk/2015/03/13/google_developer_gtld_domain_icann/">
            google buying the .dev top level domain (tld)
          </a>{" "}
          but am actually a bit surprised they are sharing it with the world
          given that it seemed to be used by some developers as a synonym for
          the .local reserved tld.
        </p>
        <p>
          Anyhow I jumped on the bandwagon and snagged jimthe.dev. I already own
          devj.im which has a url shortener on it, jimthedev.com which has an
          old blog to be shut down. At this point I feel like I'm basically
          still that teenage jerk writing my name on all the bathroom stalls and
          tagging train cars.
        </p>
        <p>
          Yesterday I gave a tech talk at the SPS Commerce Tech Meetup. The
          title was "Introduction to React Components" but as sometimes happens
          when I prepare a talk I ended up reflecting more on the philosophical
          parts of our craft and end up pointing out the obvious: we're doomed
          to repeat ourselves over and over again.
        </p>
        <p>
          Our job often ends up being to create an array of complex products
          over our lifetime. We come up with fancy patterns to name the
          complexity. We justify it to ourselves and our customers. We are
          solving hard problems. Spending more time on reliability and
          simplicity isn't often on the product roadmap. Bugs can wait, we've
          got things to create! /s The spectrum of simplicity and perfectionism
          is an interesting one. Sometimes it is hard to know if you're being a
          perfectionist or if you're really digging in to reliability so that
          simplicity can hopefully follow.
        </p>
      </Article>
    </>
  );
}

export default Home;
