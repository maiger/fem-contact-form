function ContactForm() {
  return (
    <form className="w-140 bg-neutral-white m-10 p-6 rounded-md">
      <h2 className="mb-6">Contact Us</h2>
      <div className="flex justify-between gap-3 mb-4">
        <div className="flex flex-col w-full">
          <label>
            First Name <span className="required">*</span>
          </label>
          <input type="text" />
          <p className="error">This field is required</p>
        </div>
        <div className="flex flex-col w-full">
          <label>
            Last Name <span className="required">*</span>
          </label>
          <input type="text" />
          <p className="error">This field is required</p>
        </div>
      </div>

      <div className="flex flex-col mb-4">
        <label>
          Email Address <span className="required">*</span>
        </label>
        <input type="text" />
        <p className="error">Please enter a valid email address</p>
        <p className="error">This field is required</p>
      </div>

      <div className="flex flex-col mb-4">
        <p className="mb-2">
          Query Type <span className="required">*</span>
        </p>
        <div className="flex justify-between gap-3">
          <div className="query-type-box flex w-full p-2 ">
            <input type="radio" />
            <label className="ml-2">General Enquiry</label>
          </div>
          <div className="query-type-box flex w-full p-2">
            <input type="radio" />
            <label className="ml-2">Support Request</label>
          </div>
        </div>
        <p className="error">Please select a query type</p>
      </div>

      <div className="flex flex-col mb-4">
        <label>
          Message <span className="required">*</span>
        </label>
        <textarea rows={2} />
        <p className="error">This field is required</p>
      </div>

      <div className="flex flex-col mb-4">
        <div>
          <input type="checkbox" />
          <label className="ml-4">
            I consent to being contacted by the team{" "}
            <span className="required">*</span>
          </label>
        </div>
        <p className="error">
          To submit this form, please consent to being contacted
        </p>
      </div>

      <button>Submit</button>

      <p>Message Sent!</p>
      <p>Thanks for completing the form. We'll be in touch soon!</p>
      {/* <div>
        Challenge by{" "}
        <a href="https://www.frontendmentor.io?ref=challenge">
          Frontend Mentor
        </a>
        . Coded by <a href="www.github.com/maiger">Maiger</a>.
      </div> */}
    </form>
  );
}

export default ContactForm;
