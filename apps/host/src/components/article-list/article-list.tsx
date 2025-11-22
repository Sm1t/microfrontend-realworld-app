import { ArticlePreview } from '../article-preview';

export const ArticleList = () => {
  const articles = [
    {
      author: {
        username: 'eric-simons',
        image:
          'https://raw.githubusercontent.com/gothinkster/node-express-realworld-example-app/refs/heads/master/src/assets/images/smiley-cyrus.jpeg',
      },
      createdAt: 'January 20th',
      favoritesCount: '29',
      title: 'How to build webapps that scale',
      description: 'This is the description for the post.',
      slug: 'how-to-build-webapps-that-scale',
    },
  ];

  return (
    articles.length > 0 && (
      <div>
        {articles.map((article) => (
          <ArticlePreview {...article} key={article.slug} />
        ))}
      </div>
    )
  );
};
