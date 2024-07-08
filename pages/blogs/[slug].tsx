import { GetStaticProps, NextPage } from 'next';
import Layout from 'components/layout/Layout';
import { BlogService, IBlogContent } from 'helper/blog';
import { MDXRemote } from 'next-mdx-remote';
import styles from 'styles/Blogs.module.css';
import Image from 'next/image';

const BlogDetail: NextPage<{ blog: IBlogContent }> = ({ blog }) => {
  return (
    <Layout
      image={blog.image}
      keywords={blog.tags?.join(',')}
      title={blog.title}
      description={blog.description}
    >
      <picture className="mt-20 block h-64 w-full">
        <Image
          src={blog.image}
          alt={blog.title}
          className={'h-full w-full rounded-xl object-cover'}
          width={2500}
          height={1000}
          loading="eager"
        />
      </picture>
      <article className={`${styles.blogDetail} prose lg:prose-xl`}>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.4.0/styles/github-dark.min.css"
        ></link>
        <MDXRemote
          {...blog?.content}
          components={{
            img: (props: any) => <Image width={1500} height={1500} alt="blog image" {...props} />,
          }}
        />
      </article>
    </Layout>
  );
};

export const getStaticPaths = async () => {
  const data = await BlogService.getBlogs();
  const paths = data.map((blog) => ({
    params: { slug: blog?.name },
  }));
  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  if (!params?.slug) {
    return {
      notFound: true,
    };
  }
  const slug = params.slug as string;
  const blog = await BlogService.getBlogContent(slug);

  return {
    props: {
      blog,
    },
    revalidate: 60,
  };
};

export default BlogDetail;
