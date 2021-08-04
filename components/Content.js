export default function Content() {
  return (
    <div className="content">
      <div className="card">
        <h1>Chris Lam</h1>

        <p>
          I am a determined problem-solver and software development provides me
          with many challenges to in find solutions for. I am always looking to
          provide the best usability, accessibility and performance in the
          solutions I implement with the goal of creating delightful experiences
          for the user.
        </p>

        <h3>Contact</h3>
        <div className="horizontal">
          <div className="horizontal-item">
            <a href="https://twitter.com/chrislamnz" rel="noopener noreferrer">
              Twitter
            </a>
          </div>
          <div className="horizontal-item">
            <a
              href="https://www.linkedin.com/in/chris-lam-a33a5568"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
          </div>
          <div className="horizontal-item">
            <a href="https://github.com/chrislam" rel="noopener noreferrer">
              GitHub
            </a>
          </div>
          <div className="horizontal-item">
            <a href="mailto:chris@lam.co.nz" rel="noopener noreferrer">
              Email
            </a>
          </div>
        </div>
        <h4>Work</h4>
        <div>
          <div>
            <a href="https://exitfilms.com" rel="noopener noreferrer">
              Exit Films
            </a>
          </div>
          <div>
            <a href="https://www.rexellighting.co.nz" rel="noopener noreferrer">
              Rexel Lighting
            </a>
          </div>
          <div>
            <a
              href="https://www.huffingtonpost.com/interactives/the-good-kind"
              rel="noopener noreferrer"
            >
              The Good Kind
            </a>
          </div>
          <div>
            <a
              href="https://www.thinkful.com/blog/what-is-data-science/"
              rel="noopener noreferrer"
            >
              WTF is Data Science
            </a>
          </div>
          <div>
            <a href="https://app.olympic.org.nz/" rel="noopener noreferrer">
              NZ Team App
            </a>
          </div>
          <div>
            <a
              href="https://highline.huffingtonpost.com/articles/en/poor-millennials/"
              rel="noopener noreferrer"
            >
              Millennials Are Screwed
            </a>
          </div>
          <div>
            <a href="https://allpressespresso.com/" rel="noopener noreferrer">
              Allpress Espresso
            </a>
          </div>
        </div>
      </div>
      <style jsx>{`
        .content {
          display: flex;
          text-align: right;
          margin: 0 1rem;
          justify-content: center;
          align-items: center;
          min-height: 100vh;
        }

        .card {
          flex: 0 1 auto;
          max-width: 1280px;
          width: 100%;
          margin: 0 0 1rem auto;
        }

        h1 {
          font-size: 4.209rem;
          margin-bottom: 0.333em;
        }

        h3 {
          font-size: 2.369rem;
          margin-bottom: 0.5em;
        }

        h4 {
          font-size: 1.777rem;
          margin-bottom: 0.666em;
        }

        @media screen and (min-width: 320px) {
          .content {
            margin-right: calc(1rem + 161.424 * ((100vw - 320px) / 1360));
            // margin-bottom: calc(1rem + 161.424 * ((100vw - 320px) / 1360));
            margin-left: calc(1rem + 161.424 * ((100vw - 320px) / 1360));
          }

          .card {
            margin-bottom: calc(1rem + 161.424 * ((100vw - 320px) / 1360));
          }

          h1 {
            font-size: calc(4.209rem + 110.08 * ((100vw - 320px) / 1360));
          }

          h3 {
            font-size: calc(2.369rem + 29.872 * ((100vw - 320px) / 1360));
          }

          h4 {
            font-size: calc(1.777rem + 13.456 * ((100vw - 320px) / 1360));
          }
        }

        @media screen and (min-width: 1680px) {
          .content {
            margin: 0 11.089rem;
          }

          .card {
            margin-bottom: 11.089rem;
          }

          h1 {
            font-size: 11.089rem;
          }

          h3 {
            font-size: 4.236rem;
          }

          h4 {
            font-size: 2.618rem;
          }
        }

        .container {
          display: flex;
          justify-content: flex-end;
        }

        p {
          margin-left: auto;
          max-width: 30rem;
        }

        .horizontal {
          display: flex;
          justify-content: flex-end;
          margin: 1rem 0;
        }

        .horizontal-item {
          margin-right: 1rem;
        }

        .horizontal-item:last-child {
          margin-right: 0;
        }

        .vertical {
          margin: 1rem 0;
        }

        a {
          display: inline-block;
          color: #ffffff;
        }

        a:hover {
          color: hotpink;
        }
      `}</style>
    </div>
  );
}
