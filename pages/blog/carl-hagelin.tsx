import Layout from '../../components/layout/Layout';

const CarlHagelin = () => {
  return (
    <>
      <Layout>
        <div>
          <section className="section-box">
            <div className="banner-hero banner-head-image">
              <div className="container">
                <div className="text-center">
                  <span className="tag-1 bg-6 color-green-900">СПОРТ</span>
                  <h1 className="text-heading-1 color-white mt-30">
                    hittpr и Карл Хагелин
                  </h1>
                </div>
              </div>
            </div>
          </section>
          <section className="section-box mt-50 mb-50">
            <div className="container">
              <div className="row">
                <div className="col-lg-2" />
                <div className="col-lg-8">
                  <div className="row">
                    <div className="col-lg-6 col-md-7 col-sm-7 col-7">
                      <div className="blog-img-user">
                        <div className="img-user img-user-round">
                          <img
                            src="../assets/imgs/hittpr/hittpr-logo-circle.png"
                            alt="Hittpr"
                          />
                        </div>
                        <h4 className="text-body-lead color-gray-900">
                          Marina Hitt
                        </h4>
                        <p className="text-body-small color-gray-500">
                          19 сентября 2021
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-lg-2" />
                <div className="col-lg-8">
                  <div className="single-detail mt-50">
                    <img
                      className="img-responsive bdr-16"
                      src="../assets/imgs/hittpr/blog-carl-hagelin.png"
                      alt="Hittpr"
                    />
                    <p />
                    <p>
                      Профессиональный шведский хоккеист, нападающий клуба
                      «Washington Capitals», выступающий в NHL
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </Layout>
    </>
  );
};

export default CarlHagelin;
