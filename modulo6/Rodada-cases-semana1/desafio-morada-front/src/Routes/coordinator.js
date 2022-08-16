export const goToInitialPage = (navigate) =>{
    navigate('/')
}

export const goToFeed = (navigate) =>{
    navigate('/feed')
}

export const goToComment = (navigate, id) =>{
    navigate(`/feed/${id}`)
}