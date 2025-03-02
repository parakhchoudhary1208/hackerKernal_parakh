"use client"
import { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const News = () => {
    useEffect(() => {
        gsap.to(".news-carousel", {
            scrollTrigger: {
                trigger: "#news",
                start: "top top",
                end: () => `+=${document.querySelector(".news-carousel").offsetWidth}`,
                scrub: true,
                pin: true,
            },
            x: "-100%",
        });
    }, []);

    return (
        <section className="news" id="news">
            <div className="section-head-wrapper">
                <h4 className="section-head">News</h4>
            </div>
            <div className="news-carousel">
                <div className="news-card">
                    <div className="news-img-wrapper">
                        <img src="/assets/N1.png" alt="N1" />
                    </div>
                    <p className="news-content">White Architectures work was mentioned as best in one of the spacious interior as well clean design in UNI - COS Magazine of the year 2020.</p>
                    <p className="publish-date">20 Jun 2020</p>
                </div>
                <div className="news-card">
                    <div className="news-img-wrapper">
                        <img src="/assets/N2.png" alt="N2" />
                    </div>
                    <p className="news-content">D&D Magazine 2020 added an article on our work of "Space and Light" saying about the design trend that we are setting out there.</p>
                    <p className="publish-date">20 Mar 2020</p>
                </div>
                <div className="news-card">
                    <div className="news-img-wrapper">
                        <img src="/assets/N3.png" alt="N3" />
                    </div>
                    <p className="news-content">Architecture & Design 2020 added article on our Edge Building and mentioned it as most beautiful Architectural work of Jan 2020.</p>
                    <p className="publish-date">20 Jan 2020</p>
                </div>
                <div className="news-card">
                    <div className="news-img-wrapper">
                        <img src="/assets/N4.png" alt="N4" />
                    </div>
                    <p className="news-content">The SS House is inserted between the rows of an olive grove, and its layout develops from the central axis of the entrance on the east side</p>
                    <p className="publish-date">22 Jul 2020</p>
                </div>
                <div className="news-card">
                    <div className="news-img-wrapper">
                        <img src="/assets/N5.png" alt="N5" />
                    </div>
                    <p className="news-content">Design approach is a courageous step within Berlins rigid public design policy, which added in April 2020 and describe the use of stone and glass</p>
                    <p className="publish-date">20 Apr 2020</p>
                </div>
            </div>
        </section>
    );
};

export default News;