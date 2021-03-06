import React, { Component } from 'react';
import { Link } from 'react-router-dom';

const Overview = () => {
  return (
    <section className="overview-section ptb-100">
      <div className="container">
        <div className="overview-box">
          <div className="row h-100 justify-content-center align-items-center">
            <div className="col-lg-6 col-md-6 overview-img">
              <img
                src={require('@src/assets/images/marketing-1.png').default}
                alt="image"
              />
            </div>

            <div className="col-lg-6 col-md-6 overview-content">
              <div className="icon">
                <i className="icofont-power"></i>
              </div>
              <h3>Get Started With Our Software</h3>
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
              <Link to="/#">
                <a className="btn btn-primary">Read More</a>
              </Link>
            </div>
          </div>
        </div>

        <div className="overview-box">
          <div className="row h-100 justify-content-center align-items-center">
            <div className="col-lg-6 col-md-6 overview-content">
              <div className="icon">
                <i className="icofont-share-alt"></i>
              </div>
              <h3>Solve Your Problem With Very Faster</h3>
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
              <Link to="/#">
                <a className="btn btn-primary">Read More</a>
              </Link>
            </div>

            <div className="col-lg-6 col-md-6 overview-img">
              <img
                src={require('@src/assets/images/marketing-2.png').default}
                alt="image"
              />
            </div>
          </div>
        </div>

        <div className="overview-box">
          <div className="row h-100 justify-content-center align-items-center">
            <div className="col-lg-6 col-md-6 overview-img">
              <img
                src={require('@src/assets/images/marketing.png').default}
                alt="image"
              />
            </div>

            <div className="col-lg-6 col-md-6 overview-content">
              <div className="icon">
                <i className="icofont-ui-messaging"></i>
              </div>
              <h3>Engineered And Optimization By Conveying.</h3>
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
              <Link to="/#">
                <a className="btn btn-primary">Read More</a>
              </Link>
            </div>
          </div>
        </div>

        <div className="overview-box">
          <div className="row h-100 justify-content-center align-items-center">
            <div className="col-lg-6 col-md-6 overview-content">
              <div className="icon">
                <i className="icofont-users-social"></i>
              </div>
              <h3>Quick & Easy Process</h3>
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
              <Link to="/#">
                <a className="btn btn-primary">Read More</a>
              </Link>
            </div>

            <div className="col-lg-6 col-md-6 overview-img">
              <img
                src={require('@src/assets/images/marketing-3.png').default}
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
