import React from 'react';
import { Link } from 'react-router-dom';

export const Overview = () => {
  return (
    <section className="overview-section ptb-100 bg-gray">
      <div className="container">
        <div className="section-title">
          <h2>More to Discover</h2>
          <div className="bar"></div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>

        <div className="overview-box">
          <div className="row h-100 justify-content-center align-items-center">
            <div className="col-lg-6 col-md-6 overview-img">
              <img
                src={require('@src/assets/images/overview-1.png').default}
                alt="image"
              />
            </div>

            <div className="col-lg-6 col-md-6 overview-content">
              <div className="icon">
                <i className="icofont-power"></i>
              </div>
              <h3>Getting started page</h3>
              <p>
                Plan ahead by day, week, or month, and see project status at a
                glance. Search and filter to focus in on anything form a single
                project to an individual person's workload.
              </p>

              <ul>
                <li>Unimited Video Call</li>
                <li>Add Favourite contact</li>
                <li>Camera Filter</li>
              </ul>
              <Link to="/project-details">
                <a className="btn btn-primary">Read More</a>
              </Link>
            </div>
          </div>
        </div>

        <div className="overview-box">
          <div className="row h-100 justify-content-center align-items-center">
            <div className="col-lg-6 col-md-6 overview-content">
              <div className="icon">
                <i className="icofont-anchor"></i>
              </div>
              <h3>Outdated comments toggling</h3>
              <p>
                Plan ahead by day, week, or month, and see project status at a
                glance. Search and filter to focus in on anything form a single
                project to an individual person's workload.
              </p>

              <ul>
                <li>Unimited Video Call</li>
                <li>Add Favourite contact</li>
                <li>Camera Filter</li>
              </ul>
              <Link to="/project-details">
                <a className="btn btn-primary">Read More</a>
              </Link>
            </div>

            <div className="col-lg-6 col-md-6 app-fetured-item">
              <div className="app-item item-one">
                <i className="icofont-wink-smile"></i>
                <h6>Community</h6>
              </div>

              <div className="app-item item-two">
                <i className="icofont-ebook"></i>
                <h6>Honest pricing</h6>
              </div>

              <div className="app-item item-three">
                <i className="icofont-wink-smile"></i>
                <h6>Management</h6>
              </div>

              <div className="app-item item-four">
                <i className="icofont-stock-mobile"></i>
                <h6>Mobile Design</h6>
              </div>
            </div>
          </div>
        </div>

        <div className="overview-box">
          <div className="row h-100 justify-content-center align-items-center">
            <div className="col-lg-6 col-md-6 overview-img">
              <img
                src={require('@src/assets/images/overview-3.png').default}
                alt="image"
              />
            </div>

            <div className="col-lg-6 col-md-6 overview-content">
              <div className="icon">
                <i className="icofont-users-social"></i>
              </div>
              <h3>Code review illustrations</h3>
              <p>
                Plan ahead by day, week, or month, and see project status at a
                glance. Search and filter to focus in on anything form a single
                project to an individual person's workload.
              </p>

              <ul>
                <li>Unimited Video Call</li>
                <li>Add Favourite contact</li>
                <li>Camera Filter</li>
              </ul>
              <Link to="/project-details">
                <a className="btn btn-primary">Read More</a>
              </Link>
            </div>
          </div>
        </div>

        <div className="overview-box">
          <div className="row h-100 justify-content-center align-items-center">
            <div className="col-lg-6 col-md-6 overview-content">
              <div className="icon">
                <i className="icofont-ui-messaging"></i>
              </div>
              <h3>We provide proffesional staff</h3>
              <p>
                Plan ahead by day, week, or month, and see project status at a
                glance. Search and filter to focus in on anything form a single
                project to an individual person's workload.
              </p>

              <ul>
                <li>Unimited Video Call</li>
                <li>Add Favourite contact</li>
                <li>Camera Filter</li>
              </ul>
              <Link to="/project-details">
                <a className="btn btn-primary">Read More</a>
              </Link>
            </div>

            <div className="col-lg-6 col-md-6 overview-img">
              <img
                src={require('@src/assets/images/overview-4.png').default}
                alt="image"
              />
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

export default Overview;
