import { Octokit } from '@octokit/core';
import { OctokitResponse } from '@octokit/types';
import { serialize } from 'next-mdx-remote/serialize';
import matter from 'gray-matter';
import rehypePrettyCode, { Options } from 'rehype-pretty-code';

export interface IBlogMeta {
  title: string;
  date: string;
  tags?: string[];
  description: string;
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

export const ghRawUrl = 'https://raw.githubusercontent.com/ZeyarPaing/blogs/main';

const options: Partial<Options> = {
  theme: 'material-theme-darker',
  keepBackground: false,
  onVisitLine(node: any) {
    // Prevent lines from collapsing in `display: grid` mode, and
    // allow empty lines to be copy/pasted
    if (node.children.length === 0) {
      node.children = [{ type: 'text', value: ' ' }];
    }
  },
  onVisitHighlightedLine(node: any) {
    // Each line node by default has `class="line"`.
    node.properties.className.push('highlighted');
  },
  onVisitHighlightedWord(node: any) {
    // Each word node has no className by default.
    node.properties.className = ['word'];
  },
  tokensMap: {},
};
export class BlogService {
  static getBlogUrl(blogName: string) {
    return `${ghRawUrl}/${blogName}/index.md`;
  }

  static getBlogContent(blogName: string): Promise<IBlogContent> {
    return octokit
      .request('GET /repos/{owner}/{repo}/contents/{path}', {
        path: blogName + '/index.md',
        owner: 'zeyarpaing',
        repo: 'blogs',
      })
      .then(async (res) => {
        // @ts-expect-error - content is not in the type
        const base64 = res.data.content;
        const rawMd = Buffer.from(base64, 'base64').toString();
        const { data, content } = matter(rawMd);
        const metaData = data as IBlogMeta;
        const mdxSource = await serialize(content, {
          mdxOptions: {
            rehypePlugins: [[rehypePrettyCode, options]],
          },
        });
        return {
          ...metaData,
          date: metaData.date + '',
          name: blogName,
          image: `${ghRawUrl}/_cover-images/${blogName}.jpg`,
          content: mdxSource,
        };
      });
  }

  static async getBlogs() {
    let ghRequest: Promise<OctokitResponse<IRepoContent[]>> = octokit.request(
      'GET /repos/{owner}/{repo}/contents/',
      {
        owner: 'ZeyarPaing',
        repo: 'blogs',
      },
    );
    return ghRequest.then(async (response) => {
      let data = response.data.map((blog) => {
        if (blog.name[0] === '_') return;
        return fetch(`${ghRawUrl}/${blog.name}/index.md`)
          .then((res) => res.text())
          .then((res) => {
            const rawMd = res as string;
            const { data: metaData } = matter(rawMd);
            return {
              ...blog,
              ...metaData,
              date: '' + metaData.date,
              image: `${ghRawUrl}/_cover-images/${blog.name}.jpg`,
            };
          });
      });
      try {
        let dataList = await Promise.all(data);
        return Promise.resolve(dataList.filter(Boolean));
      } catch (e) {
        return Promise.reject(e);
      }
    });
  }
}
