import SEO from '../../components/seo';
import PersonalBrand from '../../components/presonal-brand';
import { Wrapper } from '../../layout';

export default function index() {
  return (
    <Wrapper>
      <SEO pageTitle={'Personal Brand'} />
      <PersonalBrand />
    </Wrapper>
  );
}
