"use client"
const Projects = () => {
    return (
        <section className="projects slider" id="projects">
            <div className="bg-img-slide active">
                <img src="/assets/P1.jpg" alt="project-1" />
            </div>
            <div className="bg-img-slide">
                <img src="/assets/P2.jpg" alt="project-2" />
            </div>
            <div className="bg-img-slide">
                <img src="/assets/P3.jpg" alt="project-3" />
            </div>
            <div className="bg-img-slide">
                <img src="/assets/P4.jpg" alt="project-4" />
            </div>
            <div className="bg-img-slide">
                <img src="/assets/P5.jpg" alt="project-5" />
            </div>

            <div className="content-slider">
                <div className="slide-descriptions">
                    <div className="slide-title-wrapper">
                        <div className="slide-title active">
                            <h1>Sharp & Beautiful The Edge Building</h1>
                        </div>
                        <div className="slide-title">
                            <h1>Futuristic & Innovative Building</h1>
                        </div>
                        <div className="slide-title">
                            <h1>Simple & Aesthetic Of Building</h1>
                        </div>
                        <div className="slide-title">
                            <h1>Next Generative & Imapctful Building</h1>
                        </div>
                        <div className="slide-title">
                            <h1>Feel & Heal The Environment</h1>
                        </div>
                    </div>
                    <div className="slide-location-wrapper">
                        <div className="slide-location active">
                            <p>Madrid, Spain</p>
                        </div>
                        <div className="slide-location">
                            <p>Hawkins, US</p>
                        </div>
                        <div className="slide-location">
                            <p>Dubai, UAE</p>
                        </div>
                        <div className="slide-location">
                            <p>London, UK</p>
                        </div>
                        <div className="slide-location">
                            <p>Rio, Africa</p>
                        </div>
                    </div>
                </div>
                <div className="slide-images">
                    <div className="slide-img-wrapper active">
                        <img src="/assets/P1.jpg" alt="project-1" />
                    </div>
                    <div className="slide-img-wrapper">
                        <img src="/assets/P2.jpg" alt="project-2" />
                    </div>
                    <div className="slide-img-wrapper">
                        <img src="/assets/P3.jpg" alt="project-3" />
                    </div>
                    <div className="slide-img-wrapper">
                        <img src="/assets/P4.jpg" alt="project-4" />
                    </div>
                    <div className="slide-img-wrapper">
                        <img src="/assets/P5.jpg" alt="project-5" />
                    </div>
                </div>
            </div>

            <div className="slide-counter">
                <div className="slide-count-wrapper">
                    <p className="active">1</p>
                    <p>2</p>
                    <p>3</p>
                    <p>4</p>
                    <p>5</p>
                </div>
                <p>5</p>
            </div>
        </section>
    );
};

export default Projects;