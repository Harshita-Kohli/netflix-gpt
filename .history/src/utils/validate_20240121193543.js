export const checkValidData = (email, password) => {

    const isEmailValid = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email);

    const isPasswordValid = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);


    if (!isEmailValid) {
        return 'Email is invalid';
    }
    if (!isPasswordValid) {
        return 'Password is invalid';
    }


    return null;
}

export const checkSignUpData = ( password, confirmPassword, name) => {
    const isConfirmPasswordValid = password=== confirmPassword);

    const isNameValid = /\b([A-ZÀ-ÿ][-,a-z. ']+[ ]*)/.test(name);
    if (!isNameValid) {
        return 'Name is not valid';
    }
    if (!isConfirmPasswordValid) {
        return 'Passwords do not match';
    }
}