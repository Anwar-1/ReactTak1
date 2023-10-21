import React from 'react'

const Book = () => {
  return (
    <div className="container">
  <div className="card-deck mb-3 text-center d-flex justify-content-evenly">
    <div className="card mb-4 shadow-sm border-primary">
      <div className="card-header border-primary">
        <h4 className="my-0 font-weight-normal">Free</h4>
      </div>
      <div className="card-body ">
        <h1 className="card-title ">$0 
          <small className="text-muted">/ mo</small></h1>
        <ul className="list-unstyled mt-3 mb-4">
          <li>10 users included</li>
          <li>2 GB of storage</li>
          <li>Email support</li>
          <li>Help center access</li>
        </ul>
        <button type="button" className="btn btn-lg btn-block 
        btn-outline-primary">Sign up for free</button>
      </div>



      
    </div>
    <div className="card mb-4 shadow-sm border-primary">
      <div className="card-header border-primary">
        <h4 className="my-0 font-weight-normal">Pro</h4>
      </div>
      <div className="card-body">
<h1 className="card-title pricing-card-title">$15 
  <small className="text-muted">/ mo</small></h1>
        <ul className="list-unstyled mt-3 mb-4">
          <li>20 users included</li>
          <li>10 GB of storage</li>
          <li>Priority email support</li>
          <li>Help center access</li>
        </ul>
        <button type="button" className="btn btn-lg btn-block btn-primary">Get started</button>
      </div>
    </div>
    <div className="card mb-4 shadow-sm border-primary">
      <div className="card-header border-primary">
        <h4 className="my-0 font-weight-normal">Enterprise</h4>
      </div>
      <div className="card-body">
        <h1 className="card-title pricing-card-title">$29 <small className="text-muted">/ mo</small></h1>
        <ul className="list-unstyled mt-3 mb-4">
          <li>30 users included</li>
          <li>15 GB of storage</li>
          <li>Phone and email support</li>
          <li>Help center access</li>
        </ul>
        <button type="button" className="btn btn-lg btn-block btn-primary">Contact us</button>
      </div>
    </div>
  </div>
</div>
  )
}

export default Book