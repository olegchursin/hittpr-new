import { Wrapper } from '../layout';
import SEO from '../components/seo';
import PRSmi from '../components/pr-smi';

export default function index() {
  return (
    <Wrapper>
      <SEO pageTitle={'PR в СМИ'} />
      <PRSmi />
    </Wrapper>
  );
}
