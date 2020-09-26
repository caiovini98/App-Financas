import React, {Component} from 'react';
import {StyleSheet, View, Button, Text} from 'react-native';

export default class App extends Component {
    render() {
        const gastar = this.props.valor - this.props.gasto;
        return(
            <View style={styles.container}>
                <Text style={styles.titulo}>Olá, {this.props.nome}...</Text>
                <Text style={styles.mostraDados}>Você ainda tem e pode gastar R$ {gastar.toFixed(0)} de R$ {this.props.valor.toFixed(0)}
                </Text>
                <Text style={styles.back}>Volte para continuar editando seus limites ou zerar sua conta</Text>
                <Button title="Voltar" onPress={ this.props.fechar}/>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#4F628E'
    },
    titulo: {
        fontSize: 40,
        color: '#FFF'
    },
    mostraDados: {
        marginTop: 12,
        fontSize: 23,
        color: '#FFF',
        textAlign: 'center'
    },
    back: {
        marginTop: 12,
        marginBottom: 15,
        fontSize: 18,
        color: '#FFF',
        textAlign: 'center'
    }
})