import { ArticleList } from '../components/article-list';
import { TagList } from '../components/tag-list';

export const Home = () => (
  <div className="home-page">
    <div className="container page">
      <div className="row">
        <div className="col-md-9">
          <ArticleList />
        </div>
        <div className="col-md-3">
          <div className="sidebar">
            <p>Popular tags</p>
            <TagList tags={['programming', 'javascript', 'react']} />
          </div>
        </div>
      </div>
    </div>
  </div>
);
