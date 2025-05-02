"use client"
export default function LatestBlog() {
  

  return (
    <div className="latest-blog section pt-0">
                <div className="container mx-auto px-md-1">
                    <div className="row">
                        <div className="col-12 col-sm-12 col-md-12 col-lg-12">
                            <div className="section-header text-center">
                                <h2 className="h2">Latest From our Blog</h2>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12 col-sm-12 col-md-6 col-lg-6">
                            <div className="wrap-blog">
                                <a href="blog-left-sidebar.html" className="article__grid-image">
                                    <img src="/images/blog/post-img1.jpg" alt="It's all about how you wear"
                                        title="It's all about how you wear" className="blur-up lazyloaded" />
                                </a>
                                <div className="article__grid-meta article__grid-meta--has-image">
                                    <div className="wrap-blog-inner">
                                        <h2 className="h3 article__title">
                                            <a href="blog-left-sidebar.html">It's all about how you wear</a>
                                        </h2>
                                        <span className="article__date">May 02, 2017</span>
                                        <div className="rte article__grid-excerpt">
                                            I must explain to you how all this mistaken idea of denouncing pleasure and
                                            praising pain was born and I will give you a complete account...
                                        </div>
                                        <ul className="list--inline article__meta-buttons">
                                            <li><a href="blog-article.html">Read more</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-sm-12 col-md-6 col-lg-6">
                            <div className="wrap-blog">
                                <a href="blog-left-sidebar.html" className="article__grid-image">
                                    <img src="/images/blog/post-img2.jpg" alt="27 Days of Spring Fashion Recap"
                                        title="27 Days of Spring Fashion Recap" className="blur-up lazyloaded" />
                                </a>
                                <div className="article__grid-meta article__grid-meta--has-image">
                                    <div className="wrap-blog-inner">
                                        <h2 className="h3 article__title">
                                            <a href="blog-right-sidebar.html">27 Days of Spring Fashion Recap</a>
                                        </h2>
                                        <span className="article__date">May 02, 2017</span>
                                        <div className="rte article__grid-excerpt">
                                            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium
                                            doloremque laudantium, totam rem aperiam, eaque ipsa quae ab...
                                        </div>
                                        <ul className="list--inline article__meta-buttons">
                                            <li><a href="blog-article.html">Read more</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
  )
}
