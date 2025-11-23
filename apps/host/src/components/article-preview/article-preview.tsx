import { RouterLink } from '../router-link';

type Props = {
  author: {
    image: string;
    username: string;
  };
  createdAt: string;
  favoritesCount: string;
  title: string;
  description: string;
  slug: string;
};

export const ArticlePreview = ({
  author,
  createdAt,
  favoritesCount,
  title,
  description,
  slug,
}: Props) => (
  <div className="article-preview">
    <div className="article-meta">
      <RouterLink
        href="/profile/$username"
        params={{ username: author.username }}
      >
        <img src={author.image} alt="" />
      </RouterLink>
      <div className="info">
        <RouterLink
          href="/profile/$username"
          params={{ username: author.username }}
          className="author"
        >
          {author.username}
        </RouterLink>
        <span className="date">{createdAt}</span>
      </div>
      <button className="btn btn-outline-primary btn-sm pull-xs-right">
        <i className="ion-heart" /> {favoritesCount}
      </button>
    </div>
    <a href={`/article?slug=${slug}`} className="preview-link">
      <h1>{title}</h1>
      <p>{description}</p>
      <span>Read more...</span>
    </a>
  </div>
);
