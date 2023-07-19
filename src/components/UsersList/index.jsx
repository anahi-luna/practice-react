import User from '../User';

const UserList = props =>{
    const {userArray } = props;
    return (
        <ul>
            {
                userArray.map(oneUser => <li key={oneUser.id}> <User {...oneUser} /> </li>)
            }
        </ul>
    )
}

export default UserList;