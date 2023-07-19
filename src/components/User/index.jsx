const User = props=>{
    const {name, bio, email} = props || {};
    return(
        <div>
            <h3>{ name}</h3>
            {bio? <p>{bio}</p>:'' }
            <a href="/">{email}</a>
        </div>
    )
}

export default User;