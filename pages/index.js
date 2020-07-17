import Head from "next/head";
import Header from "../components/header";
import ContentCard from "../components/contentCard";

export default function Home() {
  return (
    <>
      <Head>
        <title>
          How to earn money online - The new world covid-19 forces us into
        </title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <body>
        <Header />
        <ContentCard />
      </body>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          width: 100vw;
          overflow-x: hidden;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }

        * {
          box-sizing: border-box;
        }
      `}</style>
    </>
  );
}

{
  /* <div id="mc_embed_signup">
              <form
                action="https://gmail.us10.list-manage.com/subscribe/post?u=30daa631debe9c059299c8e7a&amp;id=bb6e405363"
                method="post"
                id="mc-embedded-subscribe-form"
                name="mc-embedded-subscribe-form"
                class="validate"
                target="_blank"
                novalidate
              >
                <div id="mc_embed_signup_scroll">
                  <h2>Subscribe</h2>
                  <div class="indicates-required">
                    <span class="asterisk">*</span> indicates required
                  </div>
                  <div class="mc-field-group">
                    <label for="mce-EMAIL">
                      Email Address <span class="asterisk">*</span>
                    </label>
                    <input
                      type="email"
                      value=""
                      name="EMAIL"
                      class="required email"
                      id="mce-EMAIL"
                    />
                  </div>
                  <div class="mc-field-group">
                    <label for="mce-FNAME">First Name </label>
                    <input
                      type="text"
                      value=""
                      name="FNAME"
                      class=""
                      id="mce-FNAME"
                    />
                  </div>
                  <div class="mc-field-group">
                    <label for="mce-LNAME">Last Name </label>
                    <input
                      type="text"
                      value=""
                      name="LNAME"
                      class=""
                      id="mce-LNAME"
                    />
                  </div>
                  <div id="mce-responses" class="clear">
                    <div class="response" id="mce-error-response"></div>
                    <div class="response" id="mce-success-response"></div>
                  </div>
                  <div aria-hidden="true">
                    <input
                      type="text"
                      name="b_30daa631debe9c059299c8e7a_bb6e405363"
                      tabindex="-1"
                      value=""
                    />
                  </div>
                  <div class="clear">
                    <input
                      type="submit"
                      value="Subscribe"
                      name="subscribe"
                      id="mc-embedded-subscribe"
                      class="button"
                    />
                  </div>
                </div>
              </form>
            </div> */
}
