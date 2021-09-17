import React from 'react';
import Banner from './Banner';
import { Link } from 'react-router-dom';

const Features = () => {
  return (
    <section className="features-area saas-features download-area">
      <Banner />
      <div className="features-inner-area">
        <div className="container-fluid">
          <div className="row h-100 justify-content-center align-items-center">
            <div className="col-lg-6 col-md-12">
              <div className="features-image mobiles-image">
                <img
                  src={
                    require('@src/assets/images/mobile-template.png').default
                  }
                  alt="image feature"
                />
              </div>
            </div>

            <div className="col-lg-6 col-md-12">
              <div className="features-inner-content">
                <div className="features-title">
                  <span>
                    Siêu Trí Nhớ Học Đường - Biết Cách Học Khỏi Cực Nhọc
                  </span>
                </div>
                <div className="features-content">
                  <p>
                    Bộ công cụ hỗ trợ con học tập từ lớp 1 tới lớp 12, được đào
                    tạo bởi huấn luyện viên trưởng đội tuyển Siêu Trí Nhớ Việt
                    Nam thầy Nguyễn Phùng Phong cùng các thầy cô, với hơn
                    150.000 trẻ em đang học
                  </p>
                </div>
                <div className="features-download">
                  <div className="features-download__title">
                    <span>Download</span>
                  </div>
                  <div className="d-flex justify-content-between align-items-center">
                    <div className="frame__download">
                      <img
                        src={
                          require('@src/assets/images/appstore-download.png')
                            .default
                        }
                        alt="Appsotre"
                      />
                    </div>
                    <div className="frame__download">
                      <img
                        src={
                          require('@src/assets/images/chplay-download.png')
                            .default
                        }
                        alt="CHPlay"
                      />
                    </div>
                    <div className="frame__download">
                      <img
                        src={
                          require('@src/assets/images/desktop-download.png')
                            .default
                        }
                        alt="Desktop"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="shape7">
        <img
          src={require('@src/assets/images/shape7.png').default}
          alt="shape"
        />
      </div>
      <div className="shape3">
        <img src={require('@src/assets/images/shape3.png').default} alt="img" />
      </div>
      <div className="bg-gray shape-1"></div>
      <div className="shape6">
        <img src={require('@src/assets/images/shape6.png').default} alt="img" />
      </div>
      <div className="shape8 rotateme">
        <img
          src={require('@src/assets/images/shape8.svg').default}
          alt="shape"
        />
      </div>
      <div className="shape9">
        <img
          src={require('@src/assets/images/shape9.svg').default}
          alt="shape"
        />
      </div>
      <div className="shape10">
        <img
          src={require('@src/assets/images/shape10.svg').default}
          alt="shape"
        />
      </div>
      <div className="shape11 rotateme">
        <img
          src={require('@src/assets/images/shape11.svg').default}
          alt="shape"
        />
      </div>
    </section>
  );
};

export default Features;