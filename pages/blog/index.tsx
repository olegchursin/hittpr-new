/* eslint-disable @next/next/no-img-element */
import Link from 'next/link';
import Cta from '../../components/elements/Cta';
import Layout from '../../components/layout/Layout';

function Blog() {
  return (
    <>
      <Layout>
        <div>
          <section className="section-box">
            <div className="banner-hero banner-breadcrums">
              <div className="container text-center">
                <h1 className="text-heading-2 color-gray-1000 mb-20">Блог</h1>
                <p className="text-body-text color-gray-500">
                  Делаем бизнес привлекательным для партнеров и инвесторов.
                </p>
              </div>
            </div>
          </section>

          <section className="section-box">
            <div className="container mt-90">
              <div className="row">
                <div className="col-lg-4 col-sm-12 pr-30 mb-50">
                  <div className="card-grid-style-4">
                    <span className="tag-dot">Спорт</span>
                    <Link href="/blog/carl-hagelin">
                      <a className="text-heading-4">hittpr и Карл Хагелин</a>
                    </Link>

                    <div className="grid-4-img color-bg-9">
                      <Link href="/blog/carl-hagelin">
                        <a>
                          <img
                            src="/assets/imgs/hittpr/blog-carl-hagelin.png"
                            alt="Hittpr"
                          />
                        </a>
                      </Link>
                    </div>
                  </div>
                </div>

                <div className="col-lg-4 col-sm-12 pr-30 mb-50">
                  <div className="card-grid-style-4">
                    <span className="tag-dot">Спорт</span>
                    <Link href="/blog/deontay-wilder">
                      <a className="text-heading-4">hittpr и Деонтей Уайлдер</a>
                    </Link>

                    <div className="grid-4-img color-bg-6">
                      <Link href="/blog/deontay-wilder">
                        <a>
                          <img
                            src="/assets/imgs/hittpr/blog-wilder.png"
                            alt="Hittpr"
                          />
                        </a>
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-sm-12 pr-30 mb-50">
                  <div className="card-grid-style-4">
                    <span className="tag-dot">Спорт</span>
                    <Link href="/blog/sport">
                      <a className="text-heading-4">hittpr — Спорт</a>
                    </Link>

                    <div className="grid-4-img color-bg-4">
                      <Link href="/blog/sport">
                        <a>
                          <img
                            src="/assets/imgs/hittpr/blog-klitchko-1.jpg"
                            alt="Hittpr"
                          />
                        </a>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <Cta bgColorVariant={4} />
        </div>
      </Layout>
    </>
  );
}

export default Blog;
