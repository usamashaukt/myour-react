import Layout from "@/src/layouts/Layout";
import Link from "next/link";
import { useEffect } from "react";

const Blog = () => {
  useEffect(() => {
    document.querySelector("body").classList.add("blog");
  }, []);

  return (
    <Layout>
      <div className="background-bg background-bg-inner">
        <div className="background-filter">
          <div className="background-img" />
        </div>
      </div>
      <div className="section started section-title">
        <div className="centrize full-width">
          <div className="vertical-center">
            <div className="started-content">
              <h1 className="h-title">Blog</h1>
              <div className="h-subtitles">
                <div className="h-subtitle">
                  All the most current news and events of my life
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="section blog with-sidebar">
        <div className="content">
         
          <div className="blog-items cols">
            <div className="blog-col">
              <div className="blog-item content-box">
                <div className="post">
                  <div className="image">
                    <Link href="single-post" className="post-thumbnail">
                      <img
                        src="images/blog/blog_1.jpg"
                        alt="Welcome to Jekyll!"
                      />
                    </Link>
                  </div>
                  <div className="desc">
                    <div className="date">08 August 2020</div>
                    <Link href="single-post" className="name">
                      Welcome to Jekyll!
                    </Link>
                    <div className="single-post-text">
                      <p>
                        You’ll find this post in your directory. Go ahead and
                        edit it and re-build the site to see your changes. You
                        can rebuild the site in many different ways, but the
                        most common way is to run, which launches a web server
                        and auto-regenerates your site when a file is updated.
                      </p>
                      <div>
                        <Link href="single-post" className="btn">
                          <span className="animated-button">
                            <span>Read More</span>
                          </span>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
           
          </div>
          <div className="content-sidebar">
            <aside id="secondary" className="widget-area">
              <div id="search" className="widget widget_search">
                <form className="search-form" method="GET">
                  <div className="search-form-label">
                    <input
                      type="search"
                      className="search-field"
                      id="search-input"
                      placeholder="Search ..."
                      defaultValue=""
                    />
                    <input
                      type="submit"
                      className="search-submit"
                      defaultValue="Search ..."
                    />
                  </div>
                </form>
              </div>
              <section className="widget widget_recent_entries">
                <h2 className="widget-title">Latest Posts</h2>
                <ul>
                  <li>
                    <Link href="single-post">Welcome to Jekyll!</Link>
                  </li>
                  <li>
                    <Link href="single-post">
                      By spite about do of do allow blush
                    </Link>
                  </li>
                  <li>
                    <Link href="single-post">Two Before Arrow Not Relied</Link>
                  </li>
                  <li>
                    <Link href="single-post">Design in Mobile Application</Link>
                  </li>
                </ul>
              </section>
              <section className="widget widget_categories">
                <h2 className="widget-title">Categories</h2>
                <ul>
                  <li>
                    <a href="#">Design</a> <small>(2)</small>
                  </li>
                  <li>
                    <a href="#">Mobile</a> <small>(1)</small>
                  </li>
                  <li>
                    <a href="#">Music</a> <small>(2)</small>
                  </li>
                  <li>
                    <a href="#">Video</a> <small>(1)</small>
                  </li>
                </ul>
              </section>
              <section className="widget widget_tags">
                <h2 className="widget-title">Tags</h2>
                <ul>
                  <li>
                    <a href="#">jekyll</a> <small>(1)</small>
                  </li>
                  <li>
                    <a href="#">app</a> <small>(1)</small>
                  </li>
                  <li>
                    <a href="#">mobile</a> <small>(1)</small>
                  </li>
                  <li>
                    <a href="#">code</a> <small>(1)</small>
                  </li>
                  <li>
                    <a href="#">rock</a> <small>(1)</small>
                  </li>
                  <li>
                    <a href="#">Jekyll</a> <small>(1)</small>
                  </li>
                </ul>
              </section>
            </aside>
          </div>
          <div className="clear" />
        </div>
      </div>
    </Layout>
  );
};

export default Blog;
