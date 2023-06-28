import { Wrapper } from "../layout";
import SEO from "../components/seo";
import ServiceMain from "../components/services/pr";

export default function index() {
  return (
    <Wrapper>
      <SEO pageTitle={'Service'} />
      <ServiceMain/>
    </Wrapper>
  )
}
