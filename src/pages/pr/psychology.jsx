import SEO from '../../components/seo';
import Psychology from '../../components/psychology';
import { Wrapper } from '../../layout';

export default function index() {
  return (
    <Wrapper>
      <SEO pageTitle={'Psychology'} />
      <Psychology />
    </Wrapper>
  );
}
