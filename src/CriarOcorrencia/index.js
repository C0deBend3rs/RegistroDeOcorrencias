import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { Input, Icon, Button } from 'react-native-elements';
import { LinearGradient } from 'expo-linear-gradient';
import axios from 'axios';
import styles from './style';

export default class CriarOcorrencia extends React.Component {
  state: {
    titulo: String,
    desc: String,
    prioridade: Number,
    instituicao: Number,
    filial: Number,
    predio: Number,
    espaco: Number,
    comodo: Number,

    instituicoes: Array,
    filiais: Array,
    predios: Array,
    espacos: Array,
    comodos: Array,
  }

  constructor(props: Props) {
    super(props)

    this.state = {
      titulo: '',
      desc: '',
      prioridade: 1,
      instituicao: -1,
      filial: -1,
      predio: -1,
      espaco: -1,
      comodo: -1,

      //ENUMS
      prioridades: [
        {
          label: "Alta",
          value: 1
        },
        {
          label: "Média",
          value: 2
        },
        {
          label: "Baixa",
          value: 3
        }
      ],

      instituicoes: [],
      filiais: [],
      predios: [],
      espacos: [],
      comodos: []
    }
  }

  async componentDidMount () {
    const nenhum = {
      label: 'Nenhum',
      value: -1
    }

    var instituicoes = [
        {
          label: "A",
          value: 1
        },
        {
          label: "B",
          value: 2
        }
    ]

    var filiais = [
        {
          label: "C",
          value: 1
        },
        {
          label: "D",
          value: 2
        }
    ]
      
    var predios = [
      {
        label: "E",
        value: 1
      },
      {
        label: "F",
        value: 2
      }
    ]
      
    var espacos = [
      {
        label: "1",
        value: 1
      },
      {
        label: "2",
        value: 2
      }
    ]
      
    var comodos = [
      {
        label: "1",
        value: 1
      },
      {
        label: "2",
        value: 2
      }
    ]

    instituicoes.unshift(nenhum)
    filiais.unshift(nenhum)
    predios.unshift(nenhum)
    espacos.unshift(nenhum)
    comodos.unshift(nenhum)

    this.setState({instituicoes: instituicoes})
    this.setState({predios: predios})
    this.setState({filiais: filiais})
    this.setState({espacos: espacos})
    this.setState({comodos: comodos})
  }

  renderFilial () {
    return (
      <View style={styles.pickerDiv}>
        <Text style={ this.isEnabled('filial') ? styles.pickerTitle : styles.pickerTitleDisabled }>Filial</Text>
        <Picker
          style={styles.picker}
          selectedValue={this.state.filial}
          onValueChange={(value) => this.setState({ filial: value })}
          enabled={this.isEnabled('filial')}
        >
          {this.state.filiais.map(obj => {
            return (
              <Picker.Item key={obj.value} label={obj.label} value={obj.value}/>
            )
          })}
        </Picker>
      </View>
    )
  }

  renderPredio () {
    return (
      <View style={styles.pickerDiv}>
        <Text style={ this.isEnabled('predio') ? styles.pickerTitle : styles.pickerTitleDisabled }>Prédio</Text>
        <Picker
          style={styles.picker}
          selectedValue={this.state.predio}
          onValueChange={(value) => this.setState({ predio: value })}
          enabled={this.isEnabled('predio')}
        >
          {this.state.predios.map(obj => {
            return (
              <Picker.Item key={obj.value} label={obj.label} value={obj.value}/>
            )
          })}
        </Picker>
      </View>
    )
  }
  
  renderEspaco () {
    return (
      <View style={styles.pickerDiv}>
        <Text style={ this.isEnabled('espaco') ? styles.pickerTitle : styles.pickerTitleDisabled }>Espaço aberto</Text>
        <Picker
          style={styles.picker}
          selectedValue={this.state.espaco}
          onValueChange={(value) => this.setState({ espaco: value })}
          enabled={this.isEnabled('espaco')}
        >
          {this.state.espacos.map(obj => {
            return (
              <Picker.Item key={obj.value} label={obj.label} value={obj.value}/>
            )
          })}
        </Picker>
      </View>
    )
  }

  renderComodo () {
    return (
      <View style={styles.pickerDiv}>
        <Text style={ this.isEnabled('comodo') ? styles.pickerTitle : styles.pickerTitleDisabled }>Comodo</Text>
        <Picker
          style={styles.picker}
          selectedValue={this.state.comodo}
          onValueChange={(value) => this.setState({ comodo: value })}
          enabled={this.isEnabled('comodo')}
        >
          {this.state.comodos.map(obj => {
            return (
              <Picker.Item key={obj.value} label={obj.label} value={obj.value}/>
            )
          })}
        </Picker>
      </View>
    )
  }

  instituicaoChange (value) {
    this.setState({instituicao: value})
    /* if (value != -1) {
      axios.get('http://localhost:3333/filiais/' + this.props.params.userId)
        .then(res => {
          this.setState({filiais: res.data}) 
        }).catch(err => alert(err))
    } else {
      this.setState({
        filial: -1,
        predio: -1,
        comodo: -1,
        espaco: -1
      })
    } */
  }
  
  filialChange (value) {
    this.setState({filial: value})
    /* if (value != -1) {
      axios.get('http://localhost:3333/predios/' + this.props.params.userId)
        .then(res => {
          this.setState({filiais: res.data}) 
        }).catch(err => alert(err))
    } else {
      this.setState({
        filial: -1,
        predio: -1,
        comodo: -1,
        espaco: -1
      })
    } */
  }

  predioChange (value) {
    this.setState({predio: value})
    /* if (value != -1) {
      axios.get('http://localhost:3333/comodos/' + this.props.params.userId)
        .then(res => {
          this.setState({filiais: res.data}) 
        }).catch(err => alert(err))
    } else {
      this.setState({
        filial: -1,
        predio: -1,
        comodo: -1,
        espaco: -1
      })
    } */
  }

  espacoChange (value) {
    this.setState({espaco: value})
  }

  comodoChange (value) {
    this.setState({comodo: value})
  }

  isEnabled (value) {
    switch (value) {
      case 'instituicao':
        return true
      
      case 'filial':
        if (this.state.instituicao != -1) return true
        else return false

      case 'predio':
        if (this.state.instituicao != -1 && this.state.filial != -1 && this.state.espaco == -1) return true
        else return false

      case 'espaco':
        if (this.state.instituicao != -1 && this.state.filial != -1 && this.state.predio == -1) return true
        else return false
      
      case 'comodo':
        if (this.state.instituicao != -1 && this.state.filial != -1 && this.state.predio != -1) return true
        else return false

      case 'button':
        if (this.state.instituicao != -1 && this.state.filial != -1 && this.state.titulo.length != 0 &&
          ((this.state.predio != -1 &&this.state.comodo != -1) || (this.state.espaco != -1))) return true
        else return false        
    }
  }

  criarOcorrencia () {
    const ocorrencia = {
      titulo: this.state.titulo,
      desc: this.state.desc,
      comodo: this.state.comodo,
      espaco: this.state.espaco,
      userId: this.props.params.userId
    }

    axios.post('http://localhost:3333/ocorrencias/' + this.props.params.userId)
  }

  render () {
    return (
      <View style={styles.container}>
        <View style={styles.inputDiv}>
          <Input
            containerStyle={styles.inputBox}
            inputContainerStyle={styles.inputContainer}
            labelStyle={styles.label}
            label="Título"
            onChangeText={value => this.setState({ titulo: value })}
          />
          <Input
            multiline
            containerStyle={styles.inputBox}
            inputContainerStyle={styles.inputContainer}
            inputStyle={{ height: '100px' }}
            labelStyle={styles.label}
            label="Descrição"
            onChangeText={value => this.setState({ desc: value })}
          />
          <View style={styles.pickerDiv}>
            <Text style={ styles.pickerTitle }>Prioridade</Text>
            <Picker
              style={styles.picker}
              selectedValue={this.state.prioridade}
              onValueChange={(value) => this.setState({ prioridade: value })}
              enabled={true}
            >
              {this.state.prioridades.map(obj => {
                return (
                  <Picker.Item key={obj.value} label={obj.label} value={obj.value}/>
                )
              })}
            </Picker>
          </View>
          <View style={styles.pickerDiv}>
            <Text style={ styles.pickerTitle }>Instituição</Text>
            <Picker
              style={styles.picker}
              selectedValue={this.state.instituicao}
              onValueChange={(value) => this.instituicaoChange(value)}
              enabled={true}
            >
              {this.state.instituicoes.map(obj => {
                return (
                  <Picker.Item key={obj.value} label={obj.label} value={obj.value}/>
                )
              })}
            </Picker>
          </View>

          {this.renderFilial()}
          {this.renderPredio()}
          {this.renderComodo()}
          {this.renderEspaco()}
        </View>

        <View style={styles.buttonsDiv}>
          <View style={styles.photosButtons}>
            <LinearGradient style={styles.buttonGrad}  colors={['#6C92F4', '#1A73E9']} start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }}>
            <TouchableOpacity style={styles.button} onPress={() => this.props.navigation.navigate('CriarOcorrencia')}>
              <Icon name="paperclip" type="font-awesome-5" color="white" size="20px" />
            </TouchableOpacity>
            </LinearGradient>
            <LinearGradient style={styles.buttonGrad}  colors={['#6C92F4', '#1A73E9']} start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }}>
            <TouchableOpacity style={styles.button} onPress={() => this.props.navigation.navigate('CriarOcorrencia')}>
              <Icon name="camera" type="font-awesome-5" color="white" size="20px" />
            </TouchableOpacity>
            </LinearGradient>
          </View>
          <Button onPress={this.criarOcorrencia} disabled={!this.isEnabled('button')} title="Criar ocorrência" ViewComponent={LinearGradient}
              linearGradientProps={{
                colors: ['#6C92F4', '#1A73E9'],
                start: { x: 0, y: 0 },
                end: { x: 1, y: 0 }
              }}
              buttonStyle={{width: '95vw', borderRadius: '10px'}} />
        </View>
      </View>
    )
  }

}