export const checkValidData = (email, password, confirmPassword,name) => {

    const isEmailValid = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email);

    const isPasswordValid = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);

    const isConfirmPasswordValid = password.equals(confirmPassword);

    const isNameValid = /\b([A-ZÀ-ÿ][-,a-z. ']+[ ]*)/.test(name);
    if (!isEmailValid) {
        return 'Email is invalid';
    }
    if (!isPasswordValid) {
        return 'Password is invalid';
    }

    if(!isNameValid){
        return 'Name is not valid';
    }
    if(!isConfirmPasswordValid)
    return null;
}