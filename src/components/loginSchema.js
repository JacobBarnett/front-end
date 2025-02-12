import * as yup from 'yup';

const loginSchema = yup.object().shape({
    username: yup
        .string()
        .trim()
        .required('Username is required')
        .min(3, 'Username must be at least 3 characters'),
    email: yup
        .string()
        .trim()
        .required('Email is required')
        .email('Proper email format is required'),
    password: yup
        .string()
        .trim()
        .required('Password is required')
        .min(4, 'Password must be at least 4 characters')
})

export default loginSchema