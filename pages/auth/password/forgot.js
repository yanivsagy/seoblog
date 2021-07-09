import { useState } from 'react';
import Layout from '../../../components/Layout';
import { forgotPassword } from '../../../actions/auth';

const ForgotPassword = () => {
    const [values, setValues] = useState({
        email: '',
        message: '',
        error: '',
        showForm: true
    });

    const { email, message, error, showForm } = values;

    const handleChange = (name) => (e) => {
        setValues({ ...values, message: '', error: '', [name]: e.target.value });
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setValues({ ...values, message: '', error: '' });

        forgotPassword({ email }).then(data => {
            if (data.error) {
                setValues({ ...values, error: data.error });
            } else {
                setValues({ ...values, message: data.message, showForm: false });
            }
        });
    };

    const showError = () => {
        return error ? <div className="alert alert-danger">{ error }</div> : '';
    };

    const showMessage = () => {
        return message ? <div className="alert alert-success">{ message }</div> : '';
    };

    const passwordForgotForm = () => {
        return (
            <div className="container">
                <form onSubmit={ handleSubmit }>
                    <div className="form-group pt-4">
                        <input
                            type="email"
                            onChange={ handleChange('email') }
                            className="form-control"
                            value={ email }
                            placeholder="Type your email address"
                            required
                        />
                    </div>
                    <div>
                        <button className="btn btn-primary">Send Password Resent Link</button>
                    </div>
                </form>
            </div>
        );
    };

    return (
        <Layout>
            <div className="container-fluid pt-5">
                <h2>Forgot Password</h2>
                <hr/>
                { showError() }
                { showMessage() }
                { showForm && passwordForgotForm() }
            </div>
        </Layout>
    );
};

export default ForgotPassword;