import { GetServerSideProps, NextPage } from 'next';
import Layout from 'components/layout/Layout';
import React from 'react';
import { BlogService, IRepoContent } from 'helper/blog';
import Image from 'next/image';
import Link from 'next/link';
import localFont from '@next/font/local';

const MyanmarEthnicSans = localFont({
  src: '../../styles/fonts/MyanmarEthnicSans.woff2',
  variable: '--font-myan',
  fallback: ['sans-serif'],
});

const Blogs: NextPage<{ blogs: IRepoContent[] }> = ({ blogs }) => {
  return (
    <Layout
      title="Blogs by Zeyar Paing"
      description="Articles and blogs related to software development, web development and frontend development"
    >
      <h1 className="mb-2 mt-24 text-center text-3xl font-black text-white md:mb-4 md:text-5xl">
        Blogs
      </h1>

      <section
        className={`${MyanmarEthnicSans.variable} font-blog grid grid-cols-1 gap-4 py-4 lg:grid-cols-2`}
      >
        {blogs.map((blog, idx) => (
          <Link aria-labelledby="blog-name" href={`/blogs/${blog.name}`} key={idx}>
            <article className="relative h-56 overflow-hidden rounded-lg">
              <Image
                className={'h-full w-full object-cover'}
                src={blog.image}
                width={600}
                height={300}
                alt={blog.name}
                loading={'eager'}
              />
              <div
                id="blog-name"
                className="absolute top-0 flex h-full w-full flex-col justify-end bg-gradient-to-tr from-black/60 to-transparent p-6"
              >
                <h2 className="text-xl font-bold">{blog.title}</h2>
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
      revalidate: 60,
    },
  };
};

export default Blogs;
