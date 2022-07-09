import React from "react";
import axios  from "axios"


class CarrosApi extends React.Component{
  state = {
    carros: []
  }

  componentDidMount(){
    axios.get('https://api-cfb.lauriciomalek.repl.co')
    .then(res=>{
        const dadosCarro = res.data
          this.setState(
            {carros:dadosCarro}
          )

    })
  }

    render(){
        return(
            
            <table border="2" style={{borderCollapse:"collapse"}}>
                <thead>
                    <tr>
                    <td>carros usados</td>
                    <td>modelo</td>
                    </tr>
                </thead>
                <tbody>

            {this.state.carros.map(
                carro=><tr key={carro.id}>
                   <td> {carro.marca }</td>
                    <td>{carro.modelo}</td>
                    </tr>
            )}

             </tbody>

            </table>
        )
    }    
}

export default CarrosApi;
