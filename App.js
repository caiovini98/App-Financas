import Slider from '@react-native-community/slider';
import React, { Component } from 'react';
import {View, Text, StyleSheet, TextInput, Modal, TouchableOpacity} from 'react-native';
import ContaAberta from './src/ContaAberta/ContaAberta';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nomeInput: '',
      slider: 0,
      gastoInput: 0,
      modal: false
    }

    this.abrirConta = this.abrirConta.bind(this);
    this.resetarDados = this.resetarDados.bind(this);
    this.sair = this.sair.bind(this);
  }

  abrirConta() {
    if(this.state.nomeInput === '' || this.state.gastoInput > 4001 || this.state.gastoInput < 0) {
      alert("Por favor, informe os dados corretos:\nNome ou limite invalidos.")
    } else {
      this.setState({modal: true})
    }
  }

  resetarDados() {
    this.setState({
      nomeInput: '',
      slider: 0,
      gastoInput: 0,
    })
  }

  sair(valor) {
    this.setState({modal: valor})
  }

  render() {
    return(
      <View style={styles.container}>
        <Text style={styles.textTitle}>App - Finanças</Text>

        <View style={styles.container1}>
          <Text style={styles.text}>Nome: </Text>
          <TextInput 
          placeholder="Digite um nome..."
          onChangeText = { (texto) => this.setState({nomeInput: texto})}
          style={styles.textInput}
          />
        </View>

        <View style={styles.slider}>
        <Text style={styles.textLimite}>Limite: {this.state.slider.toFixed(0)}</Text>
          <Slider 
          minimumValue={0}
          maximumValue={4000}
          onValueChange = {(valor) => this.setState({slider: valor})}
          style={styles.sliderMargin}
          value={this.state.valor}
          />
        </View>

        <View style={styles.container1}>
          <Text style={styles.text}>Já gastei (em R$): </Text>
          <TextInput 
          keyboardType="numeric"
          placeholder="R$"
          onChangeText = { (texto) => this.setState({gastoInput: texto})}
          style={styles.numberInput}
          
          />
        </View>

        <View style={styles.areaBtn}>
          <TouchableOpacity style={styles.btn} onPress={this.abrirConta}>
            <Text style={styles.textBtn}>Conta</Text>
          </TouchableOpacity>

          <Modal visible={this.state.modal} animationType='slide' style={styles.modal}>
            <ContaAberta fechar={() => this.sair(false)}
            nome={this.state.nomeInput}
            valor={this.state.slider}
            gasto={this.state.gastoInput}
            ></ContaAberta>
          </Modal>

          <TouchableOpacity style={styles.btn} onPress={this.resetarDados}>
            <Text style={styles.textBtn}>Resetar conta</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.created}>
          <Text style={styles.textCreated}>Created by: Caio Alves</Text>
        </View>

      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor: '#4F628E'
  },
  textTitle: {
    color: '#FFF',
    fontWeight: 'bold',
    fontSize: 40,
    marginTop: 10,
    textAlign: 'center',
  },
  container1: {
    marginTop: 15,
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 20,
  },
  text: {
    color: '#FFF',
    fontWeight: 'bold',
    fontSize: 25
  },
  textInput: {
    color: '#fff',
    width: 295,
    marginLeft: 4,
    fontSize: 25,
    paddingLeft: 15,
    borderWidth: 1,
    borderRadius: 30,
    borderColor: 'black'
  },
  slider: {
    marginTop: 15,
  },
  textLimite: {
    color: '#FFF',
    fontWeight: 'bold',
    fontSize: 25,
    marginLeft: 20,
  },
  sliderMargin: {
    marginTop: 10,
  },
  numberInput: {
    color: '#fff',
    width: 100,
    marginLeft: 4,
    fontSize: 25,
    paddingLeft: 15,
    borderWidth: 1,
    borderRadius: 30,
    borderColor: 'black'
  },
  areaBtn: {
    marginTop: 80,
    flexDirection: 'row',
    justifyContent: 'space-around'
  },
  btn: {
    height: 45,
    width: 140,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#7887AB',
    borderRadius: 20,
  },
  textBtn: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#FFF'
  },
  created: {
    marginTop: 60
  },
  textCreated: {
    color: '#FFF',
    fontWeight: 'bold',
    fontSize: 20,
    marginTop: 10,
    textAlign: 'center',
  },
  modal: {
    margin: 10
  }
})

export default App;
