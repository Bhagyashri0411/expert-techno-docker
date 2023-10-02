import React from 'react'
import { Slide } from 'react-slideshow-image';

const proprietes = {
    duration: 5000,
    transitionDuration: 500,
    infinite: true,
    indicators: true,
    arrows: false
}

const records = [
    {
        img: "https://www.mintformations.co.uk/blog/wp-content/uploads/2020/05/shutterstock_583717939.jpg",
        para: "As a small business owner, I was looking for a reliable web development team that could bring my vision to life. Expert Digital Web did just that and more. Their friendly approach and constant communication made the whole process enjoyable. The website they created not only looks stunning but also performs seamlessly. They've become an integral part of my business growth.",
        name: "Mike Johnson",
        company: " Small Business Owner"
    },
    {
        img: "https://static.vecteezy.com/system/resources/previews/007/794/715/original/construction-logo-template-suitable-for-construction-company-brand-format-and-easy-to-edit-free-vector.jpg",
        para: "Expert Digital Web truly understands the ever-changing landscape of digital marketing. Their strategic insights and innovative ideas have helped us achieve remarkable results. From designing captivating landing pages to optimizing our SEO strategy, they have consistently exceeded our expectations. We're thrilled to have them as our digital partners.",
        name: "Jane Smith",
        company: " Marketing Director"
    },
    {
        img: "https://d1csarkz8obe9u.cloudfront.net/posterpreviews/business-logo-design-template-78655edda18bc1196ab28760f1535baa_screen.jpg?ts=1617645324",
        para: "Working with Expert Digital Web has been an exceptional experience. Their team is highly skilled and dedicated, delivering top-notch web solutions that have greatly enhanced our online presence. Their attention to detail and commitment to understanding our unique needs has resulted in a seamless collaboration. I highly recommend their services!",
        name: "John Doe",
        company: 'CEO of XYZ Company'
    }
]

const HomefifthSection = () => {
    return (
        <div className="fifthsection">
            <section className="wrapper">
                <div className="col-md-9 mx-auto">
                    <div className="row">
                        <h1 className="heading">
                            What Our Clients Say!
                        </h1>
                        <p className="paragraphs">Our clients spread over countries including the USA, Australia, France, Germany, Hong Kong, India, Japan, Norway, Singapore, South Africa, Spain, United Arab Emirates, United Kingdom — and cities of Georgia, New York, Washington, California, Texas, Florida, Colorado, New Jersey in the United States of America.</p>

                        <div className='card'>
                            <div className='card-body fifthcard'>
                                <Slide {...proprietes}>
                                    {records.map((record, key) => (

                                        <div className="each-slide" key={key}>
                                            <img alt='broken' src={record.img} />
                                            <p className='paragraphs'>"{record.para}"                                            </p>
                                            <h3>{record.name}</h3>
                                            <h5>{record.company}
                                            </h5>
                                        </div>
                                    ))}
                                </Slide>

                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default HomefifthSection;