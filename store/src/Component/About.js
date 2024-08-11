import{Component} from 'react';

class About extends Component{
  render(){
    return(
      <>
      <div className="container col-xxl-8 px-4 py-5">
    <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
      <div className="col-10 col-sm-8 col-lg-6">
        <img src="https://images.pexels.com/photos/1566837/pexels-photo-1566837.jpeg?auto=compress&cs=tinysrgb&w=600" className="d-block mx-lg-auto img-fluid" alt="Bootstrap Themes" width="700" height="500" loading="lazy"/>
      </div>
      <div className="col-lg-6">
        <h1 className="display-5 fw-bold text-body-emphasis lh-1 mb-3">Welcome to Pizza Store</h1>
        <p className="lead">This is the pizza store used to deliver or bake the delicious pizza of different types of flavors which will hit your taste buds with the good amount of flavors.</p>
        <div className="d-grid gap-2 d-md-flex justify-content-md-start">
          <button type="button" className="btn btn-primary btn-lg px-4 me-md-2" fdprocessedid="ujzv2">Pizza</button>
          <button type="button" className="btn btn-outline-secondary btn-lg px-4" fdprocessedid="teibil">Contact Us</button>
        </div>
      </div>
    </div>
  </div>
  <div className="row row-cols-1 row-cols-md-3 g-4">
  <div className="col">
    <div className="card h-100">
      <img src="https://images.pexels.com/photos/1049620/pexels-photo-1049620.jpeg?auto=compress&cs=tinysrgb&w=600" height="300" className="card-img-top" alt="..."/>
      <div className="card-body">
        <h5 className="card-title">Pizza</h5>
        <p className="card-text">Some delicious pizza for your taste buds.</p>
      </div>
    </div>
  </div>
  <div className="col">
    <div className="card h-100">
      <img src="https://images.pexels.com/photos/2714722/pexels-photo-2714722.jpeg?auto=compress&cs=tinysrgb&w=600" height={300} className="card-img-top" alt="..."/>
      <div className="card-body">
        <h5 className="card-title">Pizza</h5>
        <p className="card-text">Some delicious pizza for your taste buds..</p>
      </div>
    </div>
  </div>
  <div className="col">
    <div className="card h-100">
      <img src="https://images.pexels.com/photos/2619967/pexels-photo-2619967.jpeg?auto=compress&cs=tinysrgb&w=600" height={300} className="card-img-top" alt="..."/>
      <div className="card-body">
        <h5 className="card-title">Pizza</h5>
        <p className="card-text">Some delicious pizza for your taste buds.</p>
      </div>
    </div>
  </div>
  <div className="col">
    <div className="card h-100">
      <img src="https://images.pexels.com/photos/13814644/pexels-photo-13814644.jpeg?auto=compress&cs=tinysrgb&w=600" height={300} className="card-img-top" alt="..."/>
      <div className="card-body">
        <h5 className="card-title">Pizza</h5>
        <p className="card-text">Some delicious pizza for your taste buds.</p>
      </div>
    </div>
  </div>
</div>
      </>
    )
  }
}
export default About;