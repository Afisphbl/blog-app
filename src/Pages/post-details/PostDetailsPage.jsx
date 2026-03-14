import { Bookmark, Share2, UserRound, Clock, Calendar } from "lucide-react";
import { detailSections } from "../../Data/blogData";
import "./PostDetailsPage.css";

function PostDetailsPage() {
  return (
    <main className="page-shell">
      <article className="detail-post">
        <header className="detail-header">
          <p className="badge">Technology & Future</p>
          <h1>The Future of Decentralized Web: Beyond the Hype</h1>
          <div className="detail-meta">
            <span>
              <UserRound size={18} color="var(--acc-blue)" /> Alex Rivers
            </span>
            <span>
              <Calendar size={18} /> Oct 24, 2024
            </span>
            <span>
              <Clock size={18} /> 8 min read
            </span>
            <div className="detail-meta-actions">
              <button className="icon-btn" aria-label="Share article">
                <Share2 size={18} />
              </button>
              <button className="icon-btn" aria-label="Save article">
                <Bookmark size={18} />
              </button>
            </div>
          </div>
        </header>

        <img
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuADlTiboTChsqcECOOuJ0Fs8unfnht294UQVzIOt50fHathPn3ENbcpIgCK0Jj2sXH6NTufSHCwNRVSdA8ioaNExzJuo-sH7WwXXIrUWtvVG0ZExqgGLQ6GXauprg5Fgspd1WmrrCelvDvMVxqJn1dk5WuTC8d9uJltj9752QU5-3ihtP8q6w_EhybuFnAH2dlTFIuiaNQ-L0Envd9CZzyhPwAsYf_nMy393uIoVlWBiNEuX9bqc4XSap64j7898bftFkiognx3DsWz"
          alt="Future of Web"
          className="detail-image"
        />

        <div className="detail-body">
          <p className="lead-copy">
            We are standing at the precipice of a digital revolution. For
            decades, the internet trended toward centralization, but a new
            paradigm is shifting power back to users, creators, and communities.
          </p>

          {detailSections.map((section) => (
            <section key={section.heading}>
              <h2>{section.heading}</h2>
              <p>{section.body}</p>
            </section>
          ))}

          <blockquote>
            Decentralization is not just a feature; it is the foundation of a
            truly open and democratic digital future where ownership is the
            default.
          </blockquote>

          <p>
            As we look towards the next decade, the integration of these
            technologies will become seamless, moving from experimental niches
            to the everyday infrastructure of our digital lives.
          </p>
        </div>
      </article>
    </main>
  );
}

export default PostDetailsPage;
