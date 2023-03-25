import React from 'react'

export default function Contact() {
  return (
    <div>
      <center>
        <h3>My Contact Details</h3>

        <p>Moible No.: +917064365479</p>
        <p>Email-Id: himansusharma564@gmail.com</p>
        <p>Address: Bhiwani,Haryana PIN: 756032</p>

        <p>
          Join Me At{" "}
          <a
            href="https://www.linkedin.com/in/himansu-sharma-79a6021b7/?lipi=urn%3Ali%3Apage%3Ad_flagship3_feed%3B8S%2BGi%2FVcRDyd%2F5Gxh6DZ9w%3D%3D"
            rel="noreferrer"
            target="_blank"
          >
            LinkedIn
          </a>
        </p>
        <h3>Contact Me!</h3>
        <form
          class=""
          action="mailto:himansusharma564@gmail.com"
          method="post"
          enctype="text/plain"
        >
          <label>Name:</label>
          <input type="text" name="Your Name" value="" />
          <br />
          <label>Email:</label>
          <input type="email" name="Your Email-Id" value="" />
          <br />
          <label>Message:</label>
          <br />
          <textarea name="Your Message" rows="5" cols="29"></textarea>
          <br />
          <input type="submit" name="" value="submit" />
        </form>
      </center>
    </div>
  );
}
