import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import sanityClient from "../client.js";
import Masonry from "react-masonry-css"
import {Container} from "@material-ui/core"

export default function Post() {
  const [postData, setPost] = useState(null);

  const breakpoints = {
    default: 3,
    1100: 2,
    700: 1 
  }

  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "post"]{
                title,
                slug,
                mainImage{
                    asset->{
                        _id,
                        url
                    },
                    alt
                }
            }`
      )
      .then((data) => setPost(data))
      .catch(console.error);
  }, []);

  return (
    <main className="bg-green-100 min-h-screen p-12">
      <section className="container mx-auto">
        <h1 className="text-5xl flex justify-center cursive">
          My Illustrations
        </h1>
        <h2 className="text-lg text-gray-600 flex justify-center mb-12 ">
          Discover my universe
        </h2>
        <div class="container flex justify-between items-center mx-auto px-9 md:px-14 lg:px-24 w-full">
        <section  class="w-full" id="cta">
        <Container>
          <Masonry
            breakpointCols={breakpoints}
            className="my-masonry-grid"
            columnClassName="my-masonry-grid_column"
          >
          {postData &&
            postData.map((post, index) => (
                <div key={post.slug.current}>
                <Link to={"/post/" + post.slug.current} key={post.slug.current}>
                  <span
                    className="flex relative h-64 w-64 rounded shadow leading-snug bg-white"
                    key={index}
                  >
                    <img
                      src={post.mainImage.asset.url}
                      alt={post.mainImage.alt}
                      className="w-full h-full rounded-r object-cover absolute"
                    />
                    <span className="block relative h-full flex justify-end items-end pr-4 pb-4">
                      <h3 className="text-gray-800 text-sm font-blog px-3 py-2 bg-red-700 text-red-100 bg-opacity-75 rounded">
                        {post.title}
                      </h3>
                    </span>
                  </span>
                </Link>
                </div>
            ))}
            </Masonry>
        </Container>
        </section>
        </div>
      </section>
    </main>
  );
}
/*    <main className="min-h-screen p-12">
      <section className="container mx-auto">
        <h1 className="text-5xl flex justify-center cursive">
          My Illustrations
        </h1>
        <h2 className="text-lg text-gray-600 flex justify-center mb-12">
          Discover my universe
        </h2>
        <div className="grid-container">
          { postData && postData.map((post, index) =>(
            <Link
              to={"/post/" + postData.slug.current}
              key={postData.slug.current}
            >
              <span className="block h-64 relative rounded shadow leading-snug bg-white border-l-8 border-green-400">
                <img
                  src={post.mainImage.asset.url}
                  alt={post.mainImage.alt}
                  className="w-full h-full rounded-r object-cover absolute"
                />
                <span className="block relative h-full flex justify-end items-ends pr-4 pb-4">
                  <h3 className="text-gray-800 text-lg font-blog px-3 py-4 bg-red-700 text-red-100 bg-opacity-75 rounded">
                    {post.title}
                  </h3>
                </span>
              </span>
            </Link>
          ))}
          </Masonry>
        </div>
      </section>
    </main>*/