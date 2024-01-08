import { type ReactNode, useEffect, useState } from "react";
import { z } from "zod";
import { get } from "./utils/http";
import BlogPosts, { BlogPost } from "./components/BlogPosts";
import fetchingImg from "./assets/data-fetching.png";

const rawDataBlogPostSchema = z.object({
  id: z.number(),
  body: z.string(),
  title: z.string(),
  userId: z.number(),
});

const expectedResponseDataSchema = z.array(rawDataBlogPostSchema);

type RawDataBlogPost = {
  id: number;
  body: string;
  title: string;
  userId: number;
};

function App() {
  const [fetchedPosts, setFetchedPosts] = useState<BlogPost[]>();

  useEffect(() => {
    async function fetchPosts() {
      try {
        const data = await get("https://jsonplaceholder.typicode.com/posts");
        // )) as RawDataBlogPost[]; // this is not needed since Zod takes care of it and TypeScript would hence know that parsedData will be an array

        const parsedData = expectedResponseDataSchema.parse(data);

        // const blogPosts: BlogPost[] = data.map((post) => ({
        //   id: post.id,
        //   text: post.body,
        //   title: post.title,
        // }));

        const blogPosts: BlogPost[] = parsedData.map((rawPost) => {
          return {
            id: rawPost.id,
            title: rawPost.title,
            text: rawPost.body,
          };
        });

        setFetchedPosts(blogPosts);
      } catch (error) {
        if (error instanceof Error) {
          console.error(error.message);
        }
      }
    }

    fetchPosts();
  }, []);

  let content: ReactNode;

  if (!fetchedPosts) {
    content = <p>Loading...</p>;
  } else {
    content = <BlogPosts posts={fetchedPosts} />;
  }

  return (
    <main>
      <img src={fetchingImg} alt="Fetching image" />
      {content}
    </main>
  );
}

export default App;
