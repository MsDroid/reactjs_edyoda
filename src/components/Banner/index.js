import React from 'react';


const Banner = ({ user }) => {
    return (
        <>
            <div>
                <h1>Hello Friends! {user}</h1>
            </div>

            <div>
                <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
                    <div class="carousel-inner">
                        <div class="carousel-item active">
                            <img src="https://image.freepik.com/free-photo/close-up-calendar-design_23-2149239433.jpg" class="d-block w-100" width="500" height="500" alt="image_1" />
                        </div>
                        <div class="carousel-item">
                            <img src="https://image.freepik.com/free-photo/close-up-calendar-design_23-2149239457.jpg" class="d-block w-100" width="500" height="500" alt="image_2" />
                        </div>
                        <div class="carousel-item">
                            <img src="https://image.freepik.com/free-photo/close-up-calendar-design_23-2149239465.jpg" class="d-block w-100" width="500" height="500" alt="image_3" />
                        </div>
                    </div>
                    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Previous</span>
                    </button>
                    <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Next</span>
                    </button>
                </div>
            </div>
        </>
    );
}

export default Banner;