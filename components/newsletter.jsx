import Mailchimp from "./subscribe";

const CustomForm = () => {
  return (
    <div>
      <Mailchimp
        action="https://gmail.us10.list-manage.com/subscribe/post?u=30daa631debe9c059299c8e7a&amp;id=bb6e405363"
        fields={[
          {
            name: "EMAIL",
            placeholder: "Email",
            type: "email",
            required: true,
          },
          {
            name: "FNAME",
            placeholder: "Your Name?",
            type: "text",
            required: true,
          },
        ]}
        className="myForm"
      />
      <style jsx>{`
        .myForm {
          width: 100%;
        }
        .myInput {
          border: 3px solid #c90859;
          background: rgba(0, 0, 0, 0.8);
          width: 40%;
          height: 50px;
          color: #c90859;
          font-size: 20px;
          padding: 10px;
        }
        button {
          border: 1px solid #c90859;
          color: #c90859;
          text-decoration: none;
          padding: 20px 50px;
          background: black;
          transition: all 0.5s ease-in-out;
        }

        button:hover {
          background: #c90859;
          color: black;
          font-size: 18px;
        }
      `}</style>
    </div>
  );
};

export default CustomForm;

{
  /* 
<div id="mce-responses" class="clear">
		<div class="response" id="mce-error-response" style="display:none"></div>
		<div class="response" id="mce-success-response" style="display:none"></div>
	</div> 
    <div style="position: absolute; left: -5000px;" aria-hidden="true"><input type="text" name="b_30daa631debe9c059299c8e7a_bb6e405363" tabindex="-1" value=""></div>
    <div class="clear"><input type="submit" value="Subscribe" name="subscribe" id="mc-embedded-subscribe" class="button"></div>
    </div> */
}
{
  /* <Mailchimp
action="https://gmail.us10.list-manage.com/subscribe/post?u=30daa631debe9c059299c8e7a&amp;id=bb6e405363"
fields={[
  {
    name: "EMAIL",
    placeholder: "Email",
    type: "email",
    required: true,
  },
  {
    name: "FNAME",
    placeholder: "Your Name?",
    type: "text",
    required: true,
  },
]}
className="myForm"
/> 

 <form method="post" name="newsletter-subscribe" className="myForm">
          <input type="hidden" name="form-name" value="contact" />
          <label for="mce-EMAIL">
            <input
              type="email"
              name="EMAIL"
              className="myInput"
              placeholder="Your e-Mail?"
              required
            />
          </label>
          <br />
          <br />
          <label for="mce-FNAME">
            <br />
            <input
              type="text"
              name="FNAME"
              placeholder="Your name?"
              className="myInput"
              id="mce-FNAME"
              required
            />
          </label>
          <br />
          <br />
          <button type="submit">
            <b>Subscribe</b>
          </button>
        </form>*/
}
