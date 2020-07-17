import MailchimpSubscribe from "react-mailchimp-subscribe";
import Head from "next/head";

const url =
  "https://gmail.us10.list-manage.com/subscribe/post?u=30daa631debe9c059299c8e7a&amp;id=bb6e405363";

const CustomForm = () => {
  return (
    <div>
      <Head></Head>
      <MailchimpSubscribe url={url} />
    </div>
  );
};

export default CustomForm;
