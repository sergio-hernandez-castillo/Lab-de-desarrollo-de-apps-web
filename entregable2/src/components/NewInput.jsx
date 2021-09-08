import { React, useState, useEffect } from "react";
import { useParams } from "react-router";

function Home() {
    const [date, setDate] = useState(new Date());
    const [seconds, setSeconds] = useState(0);
    const [minutos, setMinutos] = useState(0);
    const [horas, setHoras] = useState(0);

    useEffect(() => {
        let interval = null;
        
        interval = setInterval(() => {
            if (seconds > 59){
            setMinutos(minutos => minutos + 1);  
            setSeconds(0);
            }
            else if (minutos>59){
            setHoras(horas => horas + 1);  
            setMinutos(0);  
            setSeconds(0);

            }
            else{
            setSeconds(seconds => seconds + 1);
            }
        }, 100);
        
        return () => clearInterval(interval);
    });

    return (
      <div>
        <h2>Esta pagina es la del timer</h2>
        <h3>Tiempo que ha pasado: {horas} - {minutos} - {seconds}</h3>
      </div>
    );
}
  
function About() {
    const [users, setUsers] = useState([{ id: 0, name: "Sergio" }]);
    const onClick = () => {
        setUsers([...users, {id: users.length, name: "Sergio"}])
    }; 
    
    var dataComponent = {
        type: 'button',
        value: 'Update',
        hidden: false
    }

    return (
        <div>
            <h2>Esta es la pagina del boton con un incremento</h2>
            <input type="button" onClick={onClick} value="Update" />
            <div>
                {users.map((e) => (
                <div>
                    {e.id} - {e.name}
                </div>
                ))}
            </div>
        </div>
    );
}

function Child() {
    let { id } = useParams();

  return (
    <div>
        <h2>Esta es la pagina con el ejemplo basico de useParams()</h2>
        <h3>ID: {id}</h3>
    </div>
  );
}

export {Home,About,Child} ;
