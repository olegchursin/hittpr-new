import SEO from '../../components/seo';
import Sport from '../../components/sport';
import { Wrapper } from '../../layout';

export default function index() {
  return (
    <Wrapper>
      <SEO pageTitle={'PR в СМИ'} />
      <Sport />
    </Wrapper>
  );
}
