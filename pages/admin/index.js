import Layout from '../../components/Layout';
import Admin from '../../components/auth/Admin';
import Link from 'next/link';

const AdminIndex = () => {
    return (
        <Layout>
            <Admin>
                <div className="row">
                    <div className="col-md-12 pt-5 pb-5 pl-4">
                        <h2>Admin Dashboard</h2>
                    </div>
                    <div className="col-md-4 pl-4">
                        <ul className="list-group">
                            <li className="list-group-item">
                                <Link href="/admin/crud/category-tag">
                                    <a>Create Category</a>
                                </Link>
                            </li>
                            <li className="list-group-item">
                                <Link href="/admin/crud/category-tag">
                                    <a>Create Tag</a>
                                </Link>
                            </li>
                            <li className="list-group-item">
                                <Link href="/admin/crud/blog">
                                    <a>Create Blog</a>
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div className="col-md-8 pl-4">
                        Right
                    </div>
                </div>
            </Admin>
        </Layout>
    );
};

export default AdminIndex;