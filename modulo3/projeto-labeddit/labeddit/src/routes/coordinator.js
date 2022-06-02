
export const goToLoginPage = (navigate) => {
    navigate("/login")
}

export const goToFeedPage = (navigate) => {
    navigate("/")
}

export const goToSignUpPage = (navigate) => {
    navigate("/cadastro")
}

export const goToPostPage = (navigate, id) => {
    navigate(`/post-page/${id}`)
}

export const goBack = (navigate) => {
    navigate(-1)
}




