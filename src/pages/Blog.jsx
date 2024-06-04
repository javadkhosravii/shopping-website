const Blogdata = [
  {
    id: 1,
    title: "Our Products",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam voluptatum odit officia nesciunt recusandae rem cumque provident possimus, vero nobis fugit sint! Debitis omnis hic laboriosam ullam consectetur aliquam sequi a itaque, ab est odio iure asperiores sit cumque esse neque reiciendis consequuntur praesentium? Iste corrupti repudiandae ut expedita suscipit?",
  },
  {
    id: 2,
    title: "Our Services",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam voluptatum odit officia nesciunt recusandae rem cumque provident possimus, vero nobis fugit sint! Debitis omnis hic laboriosam ullam consectetur aliquam sequi a itaque, ab est odio iure asperiores sit cumque esse neque reiciendis consequuntur praesentium? Iste corrupti repudiandae ut expedita suscipit?",
  },
  {
    id: 3,
    title: "Our Team",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam voluptatum odit officia nesciunt recusandae rem cumque provident possimus, vero nobis fugit sint! Debitis omnis hic laboriosam ullam consectetur aliquam sequi a itaque, ab est odio iure asperiores sit cumque esse neque reiciendis consequuntur praesentium? Iste corrupti repudiandae ut expedita suscipit?",
  },
  {
    id: 4,
    title: "Our Vision",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam voluptatum odit officia nesciunt recusandae rem cumque provident possimus, vero nobis fugit sint! Debitis omnis hic laboriosam ullam consectetur aliquam sequi a itaque, ab est odio iure asperiores sit cumque esse neque reiciendis consequuntur praesentium? Iste corrupti repudiandae ut expedita suscipit?",
  },
  {
    id: 5,
    title: "Our Mission",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam voluptatum odit officia nesciunt recusandae rem cumque provident possimus, vero nobis fugit sint! Debitis omnis hic laboriosam ullam consectetur aliquam sequi a itaque, ab est odio iure asperiores sit cumque esse neque reiciendis consequuntur praesentium? Iste corrupti repudiandae ut expedita suscipit?",
  },
];
const Blog = () => {
  return (
    <section className="container mx-auto flex flex-col gap-6 w-full h-full bg-[#3d2a2a37]">
      <h1 className="text-4xl font-bold p-4 text-[#37518b] slg:text-center smd:text-3xl">
        Welcome to our blog page
      </h1>
      <div className="flex flex-col gap-4 p-4">
        {Blogdata.map((post, index) => {
          return (
            <div className="flex flex-col gap-2" key={index}>
              <h2 className="text-2xl font-medium">{post.title}</h2>
              <p className="px-4">{post.content}</p>
              <hr />
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Blog;
