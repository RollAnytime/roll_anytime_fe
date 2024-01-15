import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <>
      <footer>
        <div className="row">
          <div className="column">
            <h4>About Us</h4>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed in
              metus euismod, faucibus metus ut, semper nibh. Aenean euismod
              justo eu enim dapibus suscipit.
            </p>
          </div>
          <div className="column">
            <h4>Quick Links</h4>
            <ul>
              <li>
                <Link href="#">
                  <i className="fa fa-angle-right"></i> Subscription
                </Link>
              </li>
              <li>
                <Link href="#">
                  <i className="fa fa-angle-right"></i> Contact us
                </Link>
              </li>
              <li>
                <Link href="#">
                  <i className="fa fa-angle-right"></i> Bug report
                </Link>
              </li>
            </ul>
          </div>
          <div className="column">
            <h4>Connect with Us</h4>

            <ul className="social-icons">
              <li>
                <Link href="#">
                <svg xmlns="http://www.w3.org/2000/svg" height="16" width="16" viewBox="0 0 512 512"><path d="M64 112c-8.8 0-16 7.2-16 16v22.1L220.5 291.7c20.7 17 50.4 17 71.1 0L464 150.1V128c0-8.8-7.2-16-16-16H64zM48 212.2V384c0 8.8 7.2 16 16 16H448c8.8 0 16-7.2 16-16V212.2L322 328.8c-38.4 31.5-93.7 31.5-132 0L48 212.2zM0 128C0 92.7 28.7 64 64 64H448c35.3 0 64 28.7 64 64V384c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V128z"/></svg>
                </Link>
              </li>
              <li>
                <Link href="#">
                <svg xmlns="http://www.w3.org/2000/svg" height="16" width="16" viewBox="0 0 512 512">
                <path d="M160 368c26.5 0 48 21.5 48 48v16l72.5-54.4c8.3-6.2 18.4-9.6 28.8-9.6H448c8.8 0 16-7.2 16-16V64c0-8.8-7.2-16-16-16H64c-8.8 0-16 7.2-16 16V352c0 8.8 7.2 16 16 16h96zm48 124l-.2 .2-5.1 3.8-17.1 12.8c-4.8 3.6-11.3 4.2-16.8 1.5s-8.8-8.2-8.8-14.3V474.7v-6.4V468v-4V416H112 64c-35.3 0-64-28.7-64-64V64C0 28.7 28.7 0 64 0H448c35.3 0 64 28.7 64 64V352c0 35.3-28.7 64-64 64H309.3L208 492z"/></svg>
                </Link>
              </li>
              <li>
                <Link href="#">
                <svg xmlns="http://www.w3.org/2000/svg" height="16" width="16" viewBox="0 0 512 512">
                <path d="M323.8 34.8c-38.2-10.9-78.1 11.2-89 49.4l-5.7 20c-3.7 13-10.4 25-19.5 35l-51.3 56.4c-8.9 9.8-8.2 25 1.6 33.9s25 8.2 33.9-1.6l51.3-56.4c14.1-15.5 24.4-34 30.1-54.1l5.7-20c3.6-12.7 16.9-20.1 29.7-16.5s20.1 16.9 16.5 29.7l-5.7 20c-5.7 19.9-14.7 38.7-26.6 55.5c-5.2 7.3-5.8 16.9-1.7 24.9s12.3 13 21.3 13L448 224c8.8 0 16 7.2 16 16c0 6.8-4.3 12.7-10.4 15c-7.4 2.8-13 9-14.9 16.7s.1 15.8 5.3 21.7c2.5 2.8 4 6.5 4 10.6c0 7.8-5.6 14.3-13 15.7c-8.2 1.6-15.1 7.3-18 15.2s-1.6 16.7 3.6 23.3c2.1 2.7 3.4 6.1 3.4 9.9c0 6.7-4.2 12.6-10.2 14.9c-11.5 4.5-17.7 16.9-14.4 28.8c.4 1.3 .6 2.8 .6 4.3c0 8.8-7.2 16-16 16H286.5c-12.6 0-25-3.7-35.5-10.7l-61.7-41.1c-11-7.4-25.9-4.4-33.3 6.7s-4.4 25.9 6.7 33.3l61.7 41.1c18.4 12.3 40 18.8 62.1 18.8H384c34.7 0 62.9-27.6 64-62c14.6-11.7 24-29.7 24-50c0-4.5-.5-8.8-1.3-13c15.4-11.7 25.3-30.2 25.3-51c0-6.5-1-12.8-2.8-18.7C504.8 273.7 512 257.7 512 240c0-35.3-28.6-64-64-64l-92.3 0c4.7-10.4 8.7-21.2 11.8-32.2l5.7-20c10.9-38.2-11.2-78.1-49.4-89zM32 192c-17.7 0-32 14.3-32 32V448c0 17.7 14.3 32 32 32H96c17.7 0 32-14.3 32-32V224c0-17.7-14.3-32-32-32H32z"/></svg>
                </Link>
              </li>
              <li>
                <Link href="#">
                <svg xmlns="http://www.w3.org/2000/svg" height="16" width="16" viewBox="0 0 512 512">
                <path d="M323.8 34.8c-38.2-10.9-78.1 11.2-89 49.4l-5.7 20c-3.7 13-10.4 25-19.5 35l-51.3 56.4c-8.9 9.8-8.2 25 1.6 33.9s25 8.2 33.9-1.6l51.3-56.4c14.1-15.5 24.4-34 30.1-54.1l5.7-20c3.6-12.7 16.9-20.1 29.7-16.5s20.1 16.9 16.5 29.7l-5.7 20c-5.7 19.9-14.7 38.7-26.6 55.5c-5.2 7.3-5.8 16.9-1.7 24.9s12.3 13 21.3 13L448 224c8.8 0 16 7.2 16 16c0 6.8-4.3 12.7-10.4 15c-7.4 2.8-13 9-14.9 16.7s.1 15.8 5.3 21.7c2.5 2.8 4 6.5 4 10.6c0 7.8-5.6 14.3-13 15.7c-8.2 1.6-15.1 7.3-18 15.2s-1.6 16.7 3.6 23.3c2.1 2.7 3.4 6.1 3.4 9.9c0 6.7-4.2 12.6-10.2 14.9c-11.5 4.5-17.7 16.9-14.4 28.8c.4 1.3 .6 2.8 .6 4.3c0 8.8-7.2 16-16 16H286.5c-12.6 0-25-3.7-35.5-10.7l-61.7-41.1c-11-7.4-25.9-4.4-33.3 6.7s-4.4 25.9 6.7 33.3l61.7 41.1c18.4 12.3 40 18.8 62.1 18.8H384c34.7 0 62.9-27.6 64-62c14.6-11.7 24-29.7 24-50c0-4.5-.5-8.8-1.3-13c15.4-11.7 25.3-30.2 25.3-51c0-6.5-1-12.8-2.8-18.7C504.8 273.7 512 257.7 512 240c0-35.3-28.6-64-64-64l-92.3 0c4.7-10.4 8.7-21.2 11.8-32.2l5.7-20c10.9-38.2-11.2-78.1-49.4-89zM32 192c-17.7 0-32 14.3-32 32V448c0 17.7 14.3 32 32 32H96c17.7 0 32-14.3 32-32V224c0-17.7-14.3-32-32-32H32z"/></svg>
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <p className="copyright">© 2023 All Rights Reserved</p>
      </footer>
      <style jsx ='true'>{`
        footer {
          color: #333;
          background-color: #3e60948a;
          
        }

        .row {
          display: flex;
          padding: 1rem;
        }

        .column {
          width: calc(100% / 3);
          padding: 0 0.9375rem;
        }

        h4 {
          margin-bottom: 0.9375rem;
          font-size: 1.5rem;
        }

        p {
          font-size: 1rem;
          line-height: 1.3rem;
        }

        ul {
          list-style: none;
          margin: 0;
          padding: 0;
        }

        ul li {
          margin-bottom: 0.625rem;
        }

        ul li a {
          color: #333;
          font-size: 1rem;
        }

        ul li i {
          color: #6faaff;
        }

        ul li a:hover {
          color: #6faaff;
        }

        ul.social-icons {
          display: flex;
          column-gap: 0.625rem;
        }

        .social-icons i {
          color: white;
        }

        ul.social-icons li {
          margin-bottom: 0rem;
        }

        ul.social-icons li a {
          display: grid;
          place-content: center;
          width: 2.5rem;
          height: 2.5rem;
          border-radius: 100%;
          background-color: #6faaff;
        }

        ul.social-icons li:hover a {
          background-color: #6fdeff;
        }

        .copyright {
          text-align: center;
          color: #fff;
          background-color: black;
          padding: 0.6rem 0;
        }

        /* Responsive adjustments */

        @media screen and (max-width: 768px) {
          .column {
            margin: 0.4rem 0;
            width: 100%;
            padding: 0;
          }

          .row {
            display: flex;
            flex-wrap: wrap;
          }

          h4 {
            font-size: 1.3125rem;
          }

          p {
            font-size: 0.9375rem;
          }

          ul li a {
            font-size: 0.9375rem;
          }

          ul.social-icons li a {
            width: 1.875rem;
            height: 1.875rem;
          }
        }
      `}</style>
    </>
  );
}
