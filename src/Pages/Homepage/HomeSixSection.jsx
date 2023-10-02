const technologies = [
    "https://techspawn.com/wp-content/uploads/2023/04/HTML-1.png",
    "https://techspawn.com/wp-content/uploads/2023/04/python-1.png",
    "https://techspawn.com/wp-content/uploads/2023/04/odoo_logo_inverted-1-200x63.png",
    "https://techspawn.com/wp-content/uploads/2023/04/CSS-1.png",
    "https://techspawn.com/wp-content/uploads/2023/04/Angular-1.png",
    "https://techspawn.com/wp-content/uploads/2023/04/Amazon-1.png",
    "https://techspawn.com/wp-content/uploads/2023/04/Bootstrap-1.png",
    "https://techspawn.com/wp-content/uploads/2023/04/NodeJS-1.png",
    "https://techspawn.com/wp-content/uploads/2023/04/PHP-1.png",
    "https://techspawn.com/wp-content/uploads/2023/04/wordpress-logo-1.png"
]
const HomeSixSection = () => {
    return (
        <>
            <div className="mainBackground Sixsection">
                <section className="wrapper">
                    <div className="col-md-9 mx-auto">
                        <div className="row">
                            <h1 className="heading text-white">
                                Technologies we work on!
                            </h1>

                            <p className="paragraphs text-white">
                                Turn your ideas into reality through qualified and scalable digital products.
                            </p>

                            <div className="mainsix">
                                {technologies.map((tech, key) => (
                                    <div className="sectiondiv" key={key}>
                                        <img className="imagesp" src={tech} alt="broken" />
                                    </div>
                                ))}

                            </div>

                        </div>
                    </div>
                </section>
            </div>
        </>
    )
}

export default HomeSixSection;