import Layout from '../../../components/Layout';
import Private from '../../../components/auth/Private';
import BlogUpdate from '../../../components/crud/BlogUpdate'
import Link from 'next/link';

const Blog = () => {
    return (
        <Layout>
            <Private>
                <div className="row">
                    <div className="col-md-12 pt-5 pb-5 pl-4">
                        <h2>Update blog</h2>
                    </div>
                    <div className="col-md-12 pl-4 pr-4">
                        <BlogUpdate />
                    </div>
                </div>
            </Private>
        </Layout>
    );
};

export default Blog;