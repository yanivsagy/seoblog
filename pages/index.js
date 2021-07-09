import Layout from '../components/Layout';
import Link from 'next/link';

const Index = () => {
    return (
        <Layout>
            <div className="container-fluid">
                <h1 className="display-1 text-center pt-5 pb-5">Welcome to SEOBLOG</h1>
                <hr/>
                <p className="col-md-12 display-3 text-center pt-5 pl-4 pr-4 pb-5">
                    Feel free to read through the blogs and even post blogs yourself!
                </p>
                <div className="text-center">
                    <img
                        className="pt-5 img-fluid mx-auto"
                        src="https://t4.ftcdn.net/jpg/03/40/83/25/360_F_340832535_l8LFeRtUv7OcmPA7fhgc7SRo7IAU8Q6j.jpg"
                        alt="hello"
                    />
                </div>
            </div>
        </Layout>
    );
};

export default Index;