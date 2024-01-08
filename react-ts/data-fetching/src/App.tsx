import { type ReactNode, useEffect, useState } from "react";
import { z } from "zod";
import { get } from "./utils/http";
import BlogPosts, { BlogPost } from "./components/BlogPosts";
import fetchingImg from "./assets/data-fetching.png";
import ErrorMessage from "./components/ErrorMessage";

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
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string>();

  useEffect(() => {
    async function fetchPosts() {
      setIsLoading(true);
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
        // setError((error as Error).message);
        if (error instanceof Error) {
          console.error(error.message);
          setError(error.message);
        }
      }
      setIsLoading(false);
    }

    fetchPosts();
  }, []);

  let content: ReactNode;

  if (error) {
    content = <ErrorMessage text={error} />;
  }

  if (fetchedPosts) {
    content = <BlogPosts posts={fetchedPosts} />;
  }

  if (isLoading) {
    content = <p id="loading-fallback">Fetching posts...</p>;
  }

  return (
    <main>
      <img src={fetchingImg} alt="Fetching image" />
      {content}
    </main>
  );
}

export default App;
