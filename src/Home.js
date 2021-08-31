import BlogList from "./BlogList";
import useFetch from "./useFetch";

const Home = () => {
  const {
    data: blogs,
    isPending,
    error,
  } = useFetch(" http://localhost:8000/blogs");

  return (
    <>
      <div className="home">
        {error && <div>{error}</div>}
        {isPending && <div>Loading...</div>}
        {blogs && (
          <BlogList
            blogs={blogs}
            title="All Blogs!!"
            //handleDelete={handleDelete}
          />
        )}
      </div>
    </>
  );
};
/* 
<button className = "name-btn" onClick={() => setName("zoro")}>change name</button>
        <p>{name}</p>

<button onClick={handleClick}>Click Me</button>

<button
          onClick={(e) => {
            handleClickAgain("mario", e);
          }}
        >
          Click Again
        </button>
        
         <BlogList
          blogs={blogs.filter((blog) => blog.author === "mark")}
          title="Mark's blogs"
        />*/

//const [name, setName] = useState("mark");
/*
  const handleClick = (e) => {
    console.log("Clicked", e.target);
  };

  
  const handleClickAgain = (name, e) => {
    console.log("Hello" + name, e.target);
  };
  const handleDelete = (id) => {
    const newBlogs = blogs.filter((blog) => blog.id !== id);
    setBlogs(newBlogs);
  };
  */

export default Home;
