import { GetServerSideProps, NextPage } from 'next';
import Layout from 'components/layout/Layout';
import React from 'react';
import { BlogService, IRepoContent } from 'helper/blog';
import Image from 'next/image';
import Link from 'next/link';

const Blogs: NextPage<{ blogs: IRepoContent[] }> = ({ blogs }) => {
  return (
    <Layout
      title="Blogs by Zeyar Paing"
      description="Articles and blogs related to software development, web development and frontend development"
    >
      <h1 className="text-white font-black text-center mt-24 mb-2 md:mb-4 text-3xl md:text-5xl">
        Blogs <code className="bg-blue-500">beta</code>
      </h1>
      <p className="text-center mb-6">
        (These blogs are just for testing purpose.)
      </p>

      <section className="grid grid-cols-1 lg:grid-cols-2 gap-4 py-4">
        {blogs.map((blog, idx) => (
          <Link
            aria-labelledby="blog-name"
            href={`/blogs/${blog.name}`}
            key={idx}
          >
            <article className=" h-56 relative rounded-lg overflow-hidden">
              <Image
                className={' w-full h-full object-cover'}
                src={blog.image}
                width={600}
                height={300}
                alt={blog.name}
                loading={'eager'}
              />
              <div
                id="blog-name"
                className="absolute top-0 w-full h-full p-6 bg-gradient-to-tr from-secondary-dark to-transparent flex flex-col justify-end"
              >
                <h2 className="font-bold text-xl">{blog.title}</h2>
                <p className="text-sm">{blog.description}</p>
              </div>
            </article>
          </Link>
        ))}
      </section>
    </Layout>
  );
};

export const getStaticProps: GetServerSideProps = async () => {
  const data = await BlogService.getBlogs();

  return {
    props: {
      blogs: data,
    },
  };
};

export default Blogs;
