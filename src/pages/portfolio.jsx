import { Wrapper } from '../layout';
import SEO from '../components/seo';
import PortfolioMain from '../components/portfolios/portfolio';

export default function index() {
  return (
    <Wrapper>
      <SEO pageTitle={'Материалы'} />
      <PortfolioMain />
    </Wrapper>
  );
}
