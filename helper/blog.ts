import { Octokit } from '@octokit/core';
import { OctokitResponse } from '@octokit/types';
import axios from 'axios';
import { serialize } from 'next-mdx-remote/serialize';
import matter from 'gray-matter';

export interface IBlogMeta {
  title: string;
  date: string;
  tags?: string[];
  description: string;
  content: string;
}
export interface IRepoContent extends IBlogMeta {
  type: string;
  encoding: string;
  size: number;
  name: string;
  image: string;
  path: string;
  sha: string;
  url: string;
  git_url: string;
  html_url: string;
  download_url: string;
  _links: {
    git: string;
    self: string;
    html: string;
  };
}
export interface IBlogContent extends IBlogMeta {
  name: string;
  image: string;
  content: any;
}
const octokit = new Octokit({
  auth: process.env.GH_TOKEN,
});

export const ghRawUrl =
  'https://raw.githubusercontent.com/ZeyarPaing/blogs/main';

// async function responseWrapper<T>(fn: () => Promise<T>): Promise<T> {
//      return fn().then((data) => )
// }

export class BlogService {
  getBlogUrl(blogName: string) {
    return `${ghRawUrl}/${blogName}/index.md`;
  }

  getBlogContent(blogName: string): Promise<IBlogContent> {
    return axios.get(this.getBlogUrl(blogName)).then(async (res) => {
      const rawMd = res.data as string;
      const { data, content } = matter(rawMd);
      const metaData = data as IBlogMeta;
      console.log('META_DATA', metaData);
      const mdxSource = await serialize(
        content.replace(/!\[([^\]]*)]\(([^)]*)\)/g, (match, p1, p2) => {
          return `![${p1}](${ghRawUrl}/${encodeURI(blogName)}/${p2})`;
        }),
      );
      return {
        ...metaData,
        name: blogName,
        image: `${ghRawUrl}/_cover-images/${blogName}.jpg`,
        content: mdxSource,
      };
    });
  }

  async getBlogs() {
    let a: Promise<OctokitResponse<IRepoContent[]>> = octokit.request(
      'GET /repos/{owner}/{repo}/contents/',
      {
        owner: 'ZeyarPaing',
        repo: 'blogs',
      },
    );
    return a.then((response) => {
      let data = response.data.map(async (blog) => {
        if (blog.name[0] === '_') return;
        console.log('BLOG_NAME', blog);
        return await axios
          .get(`${ghRawUrl}/${blog.name}/index.md`)
          .then((res) => {
            const rawMd = res.data as string;
            const { data: metaData } = matter(rawMd);
            return {
              ...blog,
              ...metaData,
              image: `${ghRawUrl}/_cover-images/${blog.name}.jpg`,
            };
          });
      });
      return Promise.all(data);
    });
    //    },
    // );
  }
}
