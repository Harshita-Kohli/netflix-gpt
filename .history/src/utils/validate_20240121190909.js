export const checkValidData = (email, password, confirmPassword) => {

    const isEmailValid = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email);

    const isPasswordValid = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);

    const is
    if (!isEmailValid) {
        return 'Email is invalid';
    }
    if (!isPasswordValid) {
        return 'Password is invalid';
    }

    if()
    return null;
}