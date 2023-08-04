import React,{Component} from "react";
//component state
class Counter extends Component {
    //tambien podemos hacerlo asi y no seria necesario llamar al constructor y super
    /* state={
        count:0,
        loading:true,
        days:['saturday', 'sunday']
    } */
    //y si lo hacemos por constructo es necesario llamar al super(al padre)
    constructor (){
        super();
        this.state={
            count:0,
            loading:true,
            day:null
        }
    }
    //acá es donde pones el llamado a las apis en el componentDidMount cuando se monto
    componentDidMount(){
        console.log('Component Mounted');
    }
    //este component se ejecuta cuando se actualiza un estado o props
    componentDidUpdate(){
        const {day, count }= this.state;
        let p = document.querySelector('#dayParagraph');
        if(p){
            //removeAttribute le quita el atributo q tiene <p> en este caso style
            p.removeAttribute('style');
            if(day === 'Saturday'){
                p.style.backgroundColor = 'Orange'
            }
        }

        if(count === 20){
            window.alert('Llegaste a 20');
        }
        console.log('Component Updated!');
    }
    //este componente se ejecuta cuando se desmonta el componente
    componentWillUnmount(){
        console.log('Component willunmount');
    }
    //si al método no le hago un arrow function le agrego el arrow function al llamado
    changeDayHandler(){
            const weekDays = ['Monday', 'Tuesday', 'Wednesday','thursday','Friday','Saturday','Sunday']
            const choosenDay = weekDays[Math.floor(Math.random() * weekDays.length)]   //elige un dia random
            this.setState({day: choosenDay})
    }
    //en el caso que haga el arrow function en el método, solo hago el this.
    incremente = ()=>{
        this.setState({count: this.state.count + 1})
    }
    //método
    logInconsole(){
        console.log(Math.floor(Math.random()*10));
    }
    render (){
        const {count,day} = this.state;
        return (
            <div>
                <hr />
                <h2>Soy el Counter Component</h2>
                <p>El state <b>COUNT</b> tiene como valor:{count}</p>
                {/* <p>{ day == null ? 'Elegí un día por favor': day }</p> */}
                {/* si no tiene un dia imprimime la <p> */}
                {!day && <p>Elegí un día por favor</p> }  
                {/* También se puede hacer con "shortcircuito", donde donde si day es true me imprime <p> y si es false no imprime nada */}
                {day && <p id="dayParagraph">{day}</p> }
                <button 
                //setState necesita recibir un objeto literal, con el state q yo quiera manipular 
                    onClick={this.incremente}  //por defecto se tiene q dar por un evento
                    //entonces acá solo llamo al método por this.
                >Increment count!</button>
                <button
                    //acá le agrego el arrow function para q funcione el evento
                    onClick={ () => this.changeDayHandler() }  //por defecto se tiene q dar por un evento
                >Change day!</button>
                <hr />
                <button onClick={this.logInconsole}>Haceme click</button>
            </div>
        )
    }
}

export default Counter;