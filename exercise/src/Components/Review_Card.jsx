import React from 'react'
import './ReviewCard.css'
const Review_Card = () => {
  return (
    <section>
  <div className="container">
    <div className="row">
      <div className="col-md-4">
        <div className="card profile-card-1">
          <img
            src="https://images.pexels.com/photos/946351/pexels-photo-946351.jpeg?w=500&h=650&auto=compress&cs=tinysrgb"
            alt="profile-sample1"
            className="background"
          />
          <img
            src="https://randomuser.me/api/portraits/women/20.jpg"
            alt="profile-image"
            className="profile"
          />
          <div className="card-content">
            <h2>
              Savannah Fields<small>Engineer</small>
            </h2>
            <div className="icon-block">
              <a href="#">
                <i className="fa fa-facebook" />
              </a>
              <a href="#">
                {" "}
                <i className="fa fa-twitter" />
              </a>
              <a href="#">
                {" "}
                <i className="fa fa-google-plus" />
              </a>
            </div>
          </div>
        </div>
        <p className="mt-3 w-100 float-left text-center">
          <strong>Basic Profile Card</strong>
        </p>
      </div>
      <div className="col-md-4">
        <div className="card profile-card-2">
          <div className="card-img-block">
            <img
              className="img-fluid"
              src="https://images.unsplash.com/photo-1605296867724-fa87a8ef53fd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8Z3ltJTIwbW90aXZhdGlvbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=2000&q=60"
              alt="Card image cap"
            />
          </div>
          <div className="card-body pt-5">
            <img
              src="https://randomuser.me/api/portraits/men/64.jpg"
              alt="profile-image"
              className="profile"
            />
            <h5 className="card-title">Landon Hunt</h5>
            <p className="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
            <div className="icon-block">
              <a href="#">
                <i className="fa fa-facebook" />
              </a>
              <a href="#">
                {" "}
                <i className="fa fa-twitter" />
              </a>
              <a href="#">
                {" "}
                <i className="fa fa-google-plus" />
              </a>
            </div>
          </div>
        </div>
        <p className="mt-3 w-100 float-left text-center">
          <strong>Social Profile Card</strong>
        </p>
      </div>
      {/*Profile Card 3*/}
      <div className="col-md-4">
        <div className="card profile-card-3">
          <div className="background-block">
            <img
              src="https://images.pexels.com/photos/459225/pexels-photo-459225.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
              alt="profile-sample1"
              className="background"
            />
          </div>
          <div className="profile-thumb-block">
            <img
              src="https://randomuser.me/api/portraits/men/41.jpg"
              alt="profile-image"
              className="profile"
            />
          </div>
          <div className="card-content">
            <h2>
              Justin Mccoy<small>Designer</small>
            </h2>
            <div className="icon-block">
              <a href="#">
                <i className="fa fa-facebook" />
              </a>
              <a href="#">
                {" "}
                <i className="fa fa-twitter" />
              </a>
              <a href="#">
                {" "}
                <i className="fa fa-google-plus" />
              </a>
            </div>
          </div>
        </div>
        <p className="mt-3 w-100 float-left text-center">
          <strong>Modren Profile Card</strong>
        </p>
      </div>
      {/*Profile Card 4*/}
      <div className="col-md-4 mt-4">
        <div className="card profile-card-4">
          <div className="card-img-block">
            <div className="info-box">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </div>
            <img
              className="img-fluid"
              src="https://images.unsplash.com/photo-1593104547489-5cfb3839a3b5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2053&q=80"
              alt="Card image cap"
            />
          </div>
          <div className="card-body pt-5">
            <img
              src="https://randomuser.me/api/portraits/women/14.jpg"
              alt="profile-image"
              className="profile"
            />
            <h5 className="card-title text-center">Gail Schmidt</h5>
            <p className="card-text text-center">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
            <div className="icon-block text-center">
              <a href="#">
                <i className="fa fa-facebook" />
              </a>
              <a href="#">
                {" "}
                <i className="fa fa-twitter" />
              </a>
              <a href="#">
                {" "}
                <i className="fa fa-google-plus" />
              </a>
            </div>
          </div>
        </div>
        <p className="mt-3 w-100 float-left text-center">
          <strong>Info block with hover</strong>
        </p>
      </div>
      {/*Profile Card 5*/}
      <div className="col-md-4 mt-4">
        <div className="card profile-card-5">
          <div className="card-img-block">
            <img
              className="card-img-top"
              src="https://images.unsplash.com/photo-1517832207067-4db24a2ae47c"
              alt="Card image cap"
            />
          </div>
          <div className="card-body pt-0">
            <h5 className="card-title">Florence Garza</h5>
            <p className="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
          </div>
        </div>
        <p className="mt-3 w-100 float-left text-center">
          <strong>Card with Floting Picture</strong>
        </p>
      </div>
    </div>
  </div>
</section>

  )
}

export default Review_Card