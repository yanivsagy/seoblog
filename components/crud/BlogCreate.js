import Link from 'next/Link';
import { useState, useEffect } from 'react';
import Router from 'next/router';
import dynamic from 'next/dynamic';
import { withRouter } from 'next/router';
import { getCookie, isAuth } from '../../actions/auth';
import { getCategories } from '../../actions/category';
import { getTags } from '../../actions/tag';
import { createBlog } from '../../actions/blog';

const CreateBlog = () => {
    return (
        <div>
            <h2>Create blog form</h2>
        </div>
    );
}

export default CreateBlog;