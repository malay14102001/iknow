import { context } from "@/context/context";
import { useContext } from "react";

const Blog = () => {
  const blogs = [
    {
      id: 1,
      category: "Web Design",
      title: "How to create a website using WordPress",
      img: "/img/news/1.jpg",
    },
    {
      id: 2,
      category: "Branding",
      title: "Angular team streamlines requests",
      img: "/img/news/2.jpg",
    },
    {
      id: 3,
      category: "UI Design",
      title: "How to handle errors in React Javascript",
      img: "/img/news/3.jpg",
    },
  ];
  const { modalToggle, setBlogModal } = useContext(context);
  return (
    <div className="iknow_tm_news">
      <div className="iknow_tm_main_title">
        <span>Blog</span>
        <h3>Latest tips, tricks &amp; Updates</h3>
      </div>
      <div className="news_list">
        <ul>
          {blogs.map((blog) => (
            <li key={blog.id}>
              <div className="list_inner">
                <div className="image">
                  <img src="/img/thumbs/37-27.jpg" alt="image" />
                  <div className="main" data-img-url={blog.img} />
                  <a
                    className="iknow_tm_full_link"
                    href="#"
                    onClick={(e) => {
                      e.preventDefault();
                      modalToggle(true);
                      setBlogModal(blog);
                    }}
                  />
                </div>
                <div className="details">
                  <span className="category">
                    <a
                      href="#"
                      onClick={(e) => {
                        e.preventDefault();
                        modalToggle(true);
                        setBlogModal(blog);
                      }}
                    >
                      {blog.category}
                    </a>
                  </span>
                  <h3 className="title">
                    <a
                      href="#"
                      onClick={(e) => {
                        e.preventDefault();
                        modalToggle(true);
                        setBlogModal(blog);
                      }}
                    >
                      {blog.title}
                    </a>
                  </h3>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
export default Blog;
