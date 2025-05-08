"use client"

import { useState, useEffect } from 'react';

const BlogPage = () => {
  const [categories, setCategories] = useState<Array<{ name: string, link: string }>>([]);
  const [recentPosts, setRecentPosts] = useState<Array<{ title: string, date: string, image: string, link: string }>>([]);
  const [recentComments, setRecentComments] = useState<Array<{ author: string, post: string, comment: string, image: string, link: string }>>([]);
  const [tags, setTags] = useState<string[]>([]);

  useEffect(() => {
    // Example data fetching simulation
    setCategories([
      { name: 'Beauty', link: 'http://annimexweb.com/' },
      { name: 'Fashion', link: '#' },
      { name: 'Summer', link: '#' },
      { name: 'Trend', link: '#' },
      { name: 'Winter', link: '#' },
    ]);

    setRecentPosts([
      {
        title: "It's all about how you wear",
        date: "May 02, 2017",
        image: "/images/blog/blog-post-1.jpg",
        link: "#"
      },
      {
        title: "27 Days of Spring Fashion Recap",
        date: "May 02, 2017",
        image: "/images/blog/blog-post-2.jpg",
        link: "#"
      },
      // Add more posts here
    ]);

    setRecentComments([
      {
        author: 'Tim',
        post: 'Lorem Ipsum',
        comment: 'On sait depuis longtemps que travailler avec...',
        image: '/images/recent-commnet-img.jpg',
        link: '#'
      },
      {
        author: 'Joy',
        post: 'Lorem Ipsum',
        comment: 'On sait depuis longtemps que travailler avec...',
        image: '/images/recent-commnet-img.jpg',
        link: '#'
      },
      // Add more comments here
    ]);

    setTags([
      'Fashion', 'Clothes', 'Shoes', 'Jeans', 'Furniture', 'Sun Glasses', 'Winter', 'Autoparts'
    ]);
  }, []);

  return (
    <>
      <div className="page section-header text-center mb-0">
        <div className="page-title">
          <div className="wrapper"><h1 className="page-width">Blogs</h1></div>
        </div>
      </div>

      <div className="bredcrumbWrap">
        <div className="container breadcrumbs">
          <a href="/" title="Back to the home page">Home</a><span aria-hidden="true">›</span><span>Blogs</span>
        </div>
      </div>

      <div className="container">
        <div className="row">
          <div className="col-12 col-sm-12 col-md-3 col-lg-3 sidebar">
            <div className="sidebar_tags">
              <div className="sidebar_widget categories">
                <div className="widget-title"><h2>Category</h2></div>
                <div className="widget-content">
                  <ul className="sidebar_categories">
                    {categories.map((category, index) => (
                      <li key={index} className={category.name === 'Fashion' ? 'lvl-1 active' : 'lvl-1'}>
                        <a href={category.link} className="site-nav lvl-1">{category.name}</a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="sidebar_widget">
                <div className="widget-title"><h2>Recent Posts</h2></div>
                <div className="widget-content">
                  <div className="list list-sidebar-products">
                    <div className="grid">
                      {recentPosts.map((post, index) => (
                        <div key={index} className="grid__item">
                          <div className="mini-list-item">
                            <div className="mini-view_image">
                              <a className="grid-view-item__link" href={post.link}>
                                <img className="grid-view-item__image blur-up lazyload" data-src={post.image} src={post.image} alt="" />
                              </a>
                            </div>
                            <div className="details">
                              <a className="grid-view-item__title" href={post.link}>{post.title}</a>
                              <div className="grid-view-item__meta">
                                <span className="article__date"><time dateTime="2017-05-02T14:33:00Z">{post.date}</time></span>
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              <div className="sidebar_widget">
                <div className="widget-title"><h2>Recent Comments</h2></div>
                <div className="widget-content">
                  <div className="list list-sidebar-products">
                    <div className="grid">
                      {recentComments.map((comment, index) => (
                        <div key={index} className="grid__item">
                          <div className="mini-list-item">
                            <div className="mini-view_image">
                              <a className="grid-view-item__link" href={comment.link}>
                                <img className="grid-view-item__image blur-up lazyload" data-src={comment.image} src={comment.image} alt="" />
                              </a>
                            </div>
                            <div className="details">
                              <div className="grid-view-item__meta"><strong>{comment.author}</strong> On <a href={comment.link}>{comment.post}</a></div>
                              <a className="grid-view-item__title" href={comment.link}>{comment.comment}</a>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              <div className="sidebar_widget tags-clouds">
                <div className="widget-title"><h2>Tags Cloud</h2></div>
                <div className="widget-content">
                  <ul>
                    {tags.map((tag, index) => (
                      <li key={index}><a href="#">{tag}</a></li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="col-12 col-sm-12 col-md-9 col-lg-9 main-col">
            <div className="custom-search">
              <form action="http://annimexweb.com/search" method="get" className="input-group search-header search" role="search" style={{ position: 'relative' }}>
                <input className="search-header__input search__input input-group__field" type="search" name="q" placeholder="Search" aria-label="Search" autoComplete="off" />
                <span className="input-group__btn"><button className="btnSearch" type="submit"><i className="icon anm anm-search-l"></i></button></span>
              </form>
            </div>

            <div className="blog--list-view">
              <div className="row">
                {recentPosts.map((post, index) => (
                  <div key={index} className="col-12 col-sm-12 col-md-4 col-lg-4 article">
                    <a className="article_featured-image" href={post.link}>
                      <img className="blur-up lazyload" data-src={post.image} src={post.image} alt={post.title} />
                    </a>
                    <h2 className="h3"><a href={post.link}>{post.title}</a></h2>
                    <ul className="publish-detail">
                      <li><i className="anm anm-user-al" aria-hidden="true"></i> User</li>
                      <li><i className="icon anm anm-clock-r"></i> <time dateTime="2017-05-02">{post.date}</time></li>
                    </ul>
                    <div className="rte">
                      <p>{post.title}</p>
                    </div>
                    <p><a href={post.link} className="btn btn-secondary btn--small">Read more <i className="fa fa-caret-right" aria-hidden="true"></i></a></p>
                  </div>
                ))}
              </div>

              <hr />
              <div className="pagination">
                <ul>
                  <li className="active"><a href="#">1</a></li>
                  <li><a href="#">2</a></li>
                  <li className="next"><a href="#"><i className="fa fa-caret-right" aria-hidden="true"></i></a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default BlogPage;
