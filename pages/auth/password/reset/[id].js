import { useState } from 'react';
import Layout from '../../../../components/Layout';
import { withRouter } from 'next/router';
import { resetPassword } from '../../../../actions/auth';

const ResetPassword = ({ router }) => {
    const [values, setValues] = useState({
        name: '',
        newPassword: '',
        error: '',
        message: '',
        showForm: true
    });

    const { name, newPassword, error, message, showForm } = values;

    const handleSubmit = (e) => {
        e.preventDefault();

        resetPassword({ resetPasswordLink: router.query.id, newPassword: newPassword }).then(data => {
            if (data.error) {
                setValues({ ...values, error: data.error, showForm: false, newPassword: '' });
            } else {
                setValues({
                    ...values,
                    message: data.message,
                    showForm: false,
                    newPassword: '',
                    error: false
                });
            }
        });
    };

    const passwordResetForm = () => {
        return (
            <div className="container">
                <form onSubmit={ handleSubmit }>
                    <div className="form-group pt-4">
                        <input
                            type="password"
                            onChange={ e => setValues({ ...values, newPassword: e.target.value }) }
                            className="form-control"
                            value={ newPassword }
                            placeholder="Enter new password"
                            required
                        />
                    </div>
                    <div>
                        <button className="btn btn-primary">Change Password</button>
                    </div>
                </form>
            </div>
        );
    };

    const showError = () => {
        return error ? <div className="alert alert-danger">{ error }</div> : '';
    };

    const showMessage = () => {
        return message ? <div className="alert alert-success">{ message }</div> : '';
    };

    return (
        <Layout>
            <div className="container-fluid pt-5">
                <h2>Reset Password</h2>
                <hr/>
                { showError() }
                { showMessage() }
                { passwordResetForm() }
            </div>
        </Layout>
    );
};

export default withRouter(ResetPassword);