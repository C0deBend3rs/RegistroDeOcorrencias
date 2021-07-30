import React from 'react'
import { View } from 'react-native'
import { Text, Button } from 'react-native-elements';
import styles from './style'
import { ActivityIndicator } from 'react-native';
import { Image } from 'react-native-elements';
import axios from 'axios'

export default class VerOcorrencia extends React.Component {
    state: {
        ocorrencia: Object
    }

    constructor(props: Props) {
        super(props)

        this.state = {
            ocorrencia: {}
        }
    }
    
    async componentDidMount () {
    // Função que pega lista de ocorrências vai aqui
    // Por hora vamos fazer hardcoded mesmo

    await axios.get('http://localhost:3333/ocorrencias/' + this.props.route.params.ocorrId)
        .then(res => {
        this.setState({ocorrencia: res.data})
        })
        .catch(err => alert("Erro ao receber ocorrência"))
    }
    
    render () {
        return (
            <View style={styles.container}>
                <View style={styles.imageDiv}>
                <Image
                    source={ this.state.ocorrencia.url ? { uri: this.state.ocorrencia.url } : require('../../assets/placeholder.png')}
                    style={{ width: 400, height: 300 }}
                    PlaceholderContent={<ActivityIndicator />}
                />
                </View>
                <View style={styles.textDiv}>
                    <Text style={styles.t_status}>Status: { this.state.ocorrencia.status }</Text>
                    <Text style={styles.t_priori}>Prioridade: { this.state.ocorrencia.prioridade }</Text>
                    <Text style={styles.t_descri_t}>Descrição da Ocorrência:</Text>
                    <Text style={styles.t_descri}>
                        { this.state.ocorrencia.descricao }
                    </Text>
                </View>
                <View style={styles.buttonDiv}>
                    <Button 
                    title="REMOVER OCORRÊNCIA"
                    type="outline"
                    titleStyle={{color: '#000000',  fontWeight: 'bold'}}
                    buttonStyle={{borderColor: '#CCCCCC' , width: '95vw', borderRadius: '10px'}}/>
                </View>
            </View>
        )
    }
}