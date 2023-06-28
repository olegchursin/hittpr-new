import SEO from '../../components/seo';
import Fashion from '../../components/fashion';
import { Wrapper } from '../../layout';

export default function index() {
  return (
    <Wrapper>
      <SEO pageTitle={'PR в СМИ'} />
      <Fashion />
    </Wrapper>
  );
}
