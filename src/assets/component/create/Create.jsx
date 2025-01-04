import React from 'react'

export default function Create() {
    return (
        <>
            <section className='mt-5 create'>
                <h2 className='text-center'>Create Product</h2>
                <div>
                    <form>
                        <div className='d-flex justify-content-center align-items-center flex-column gap-3'>
                            <div className="form-floating mb-3 w-50">
                                <input type="text" className="form-control" id="floatingInput" placeholder="name@example.com" />
                                <label htmlFor="floatingInput">Product Name</label>
                            </div>
                            <div className="form-floating mb-3 w-50">
                                <input type="number" className="form-control" id="floatingPassword" placeholder="Password" />
                                <label htmlFor="floatingPassword">Product Price</label>
                            </div>
                            <div className="form-floating mb-3 w-50">
                                <input type="number" className="form-control" id="floatingPassword" placeholder="Password" />
                                <label htmlFor="floatingPassword">Product Rating</label>
                            </div>
                            <div className="form-floating mb-3 w-50">
                                <input type="text" className="form-control" id="floatingPassword" placeholder="Password" />
                                <label htmlFor="floatingPassword">Product Stock</label>
                            </div>
                        </div>
                        <button type="submit" className="btn">Submit</button>
                    </form>
                </div>
            </section>
        </>
    )
}
