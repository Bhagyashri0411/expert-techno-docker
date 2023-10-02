const HomethirdSection = () => {
    return (
        <>
            <div className="thirdSection">
                <div className="col-md-10 mx-auto">

                    <h1 className="text-center text-white text-5xl mb-6">Our Services</h1>
                    <div className="row" style={{color:'white'}}>
                        <ServiceCard  
                            imageSrc="https://www.searchenginejournal.com/wp-content/uploads/2021/10/responsive-web-design-1-61f01c4b64c5f-sej.png"
                            title="Responsive Web Design"
                            description="Responsive Web Design (RWD) involves creating web pages that render well across a variety of devices and screen sizes.In this way, web designers are able to create a website experience that accommodates the many different ways users access and interact with websites."
                        />
                        <ServiceCard
                            imageSrc="https://cdn.dribbble.com/users/1615584/screenshots/15571949/web_1920___346_4x.jpg"
                            title="Mobile Application"
                            description="Most mobile devices are sold with several apps bundled as pre-installed software, such as a web browser, email client, calendar, mapping program, and an app for buying music, other media, or more apps. Some pre-installed apps can be removed by an ordinary uninstall process, thus leaving more storage space for desired ones. Where the software does not allow this, some devices can be rooted to eliminate the undesired apps."
                        />
                        <ServiceCard
                            imageSrc="https://cdn.dribbble.com/userupload/8127472/file/original-aa608bd11e5a9f07a1ade674a191245b.png?resize=1200x900&vertical=center"
                            title="Admin Dashboard"
                            description="Dashboards are useful for monitoring, measuring, and analyzing relevant data in key areas. They take raw data from many sources and clearly present it in a way that's highly tailored to the viewer's needs whether you're a business leader, line of business analyst, sales representative, marketer, and more. source Google"
                        />
                        <ServiceCard
                            imageSrc="https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://coursera-course-photos.s3.amazonaws.com/bf/d0c2f03cf211e5a922adc5eaf6c043/MOOC-4.png?auto=format%2Ccompress&dpr=1"
                            title="Web Application"
                            description="A web application development is a process of creating a web application. A client-server application (or web app) is the app the main part of which is contained on a remote server, and the user interface (UI) is displayed in the browser as web pages."
                        />
                        <ServiceCard
                            imageSrc="https://www.scouttg.com/wp-content/uploads/2019/04/iStock-963131214.jpg"
                            title="Cloud Computing"
                            description="Building your information and communication systems for your business no longer requires a significant capital outlay in physical equipment. With a range of software as a service (SasS) vendors to choose from, entire business infrastructures can be built, and operational, within a short period"
                        />
                        <ServiceCard
                            imageSrc="https://media.geeksforgeeks.org/wp-content/uploads/20230216170349/What-is-an-API.png"
                            title="Application Programming Interface"
                            description="API is an abbreviation for Application Programming Interface which is a collection of communication protocols and subroutines used by various programs to communicate between them. "
                        />
                    </div>
                </div>
            </div>
        </>
    )
}


const ServiceCard = ({ imageSrc, title, description }) => {
    return (
        <div className="col-md-4">

            <div className="cardthird">
                <img
                    src={imageSrc}
                    alt={title}
                    className="w-full h-60 object-cover rounded-xl"
                />
                <h3 className="text-2xl text-white font-semibold my-3">{title}</h3>
                <p className="text-1xl text-cyan-50">{description}</p>

            </div>
        </div>
    );
};

export default HomethirdSection