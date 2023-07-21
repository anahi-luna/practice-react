import  Types from 'prop-types'

import User from '../User';

const UserList = props =>{
    const {listado } = props;
    return (
        <div>
            <h2>{props.title}</h2>
        <ul>
            {
                listado.map(oneUser =><li key={oneUser.id}> <User {...oneUser} /> </li> )
            }
        </ul>
        </div>
    )
}

// los componentes cuentan con estas dos propiedades por defecto defaultProps y propTypes

UserList.defaultProps ={                          // le agrego lo valores q quiero por defecto esta prop
    /* title:'che no te olvides de mandar el title' */
}             

UserList.propTypes={                                   //le agrego los tipos de propTypes q puede tener esta prop
    listado: Types.arrayOf(Types.object).isRequired,   //acá defino el tipo de valor q espero recibir
    title:Types.string.isRequired        
}

export default UserList;