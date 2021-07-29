import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import { Picker } from '@react-native-picker/picker'
import { Input, Icon, Button } from 'react-native-elements'
import { LinearGradient } from 'expo-linear-gradient'
import styles from './style'
export default class CriarOcorrencia extends React.Component {
  state: {
    titulo: String,
    desc: String,
    prioridade: String,
    instituicao: String,
    filial: String,
    predio: String,
    espacoOuComodo: String,

    instituicoes: Array,
    filiais: Array,
    predios: Array,
    espacoOuComodo: Array,
  }

  constructor(props: Props) {
    super(props)

    this.state = {
      titulo: '',
      desc: '',
      prioridade: '',
      instituicao: -1,
      filial: -1,
      predio: -1,
      espacoOuComodo: -1,

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
      espacosOuComodos: []
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
      
    var espacosOuComodos = [
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
    espacosOuComodos.unshift(nenhum)

    this.setState({instituicoes: instituicoes})
    this.setState({predios: predios})
    this.setState({filiais: filiais})
    this.setState({espacosOuComodos: espacosOuComodos})
  }

  isEnabled (value) {
    switch (value) {
      case 'instituicao':
        return true
      
      case 'filial':
        if (this.state.instituicao != -1) return true
        else return false

      case 'predio':
        if (this.state.instituicao != -1 && this.state.filial != -1) return true
        else return false
      
      case 'ec':
        if (this.state.instituicao != -1 && this.state.filial != -1 && this.state.predio != -1) return true
        else return false

      case 'button':
        if (this.state.instituicao != -1 && this.state.filial != -1 && this.state.predio != -1 && this.state.espacoOuComodo != -1) return true
        else return false        
    }
  }

  changeInstituicao (value) {
    this.setState({ instituicao: value })

  }

  render () {
    return (
      <View style={styles.container}>
        <View style={styles.inputDiv}>
          <Input containerStyle={styles.inputBox} inputContainerStyle={styles.inputContainer} labelStyle={styles.label} label="Título"/>
          <Input multiline containerStyle={styles.inputBox} inputContainerStyle={styles.inputContainer} inputStyle={{ height: '100px' }} labelStyle={styles.label} label="Descrição" />
          <View style={styles.pickerDiv}>
            <Text style={ styles.pickerTitle }>Prioridade</Text>
            <Picker
              style={styles.picker}
              selectedValue={this.state.prioridade}
              placeholder="Selecione a prioridade da ocorrência"
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
              placeholder="Selecione a instituição da ocorrência"
              onValueChange={(value) => this.setState({ instituicao: value })}
              enabled={true}
            >
              {this.state.instituicoes.map(obj => {
                return (
                  <Picker.Item key={obj.value} label={obj.label} value={obj.value}/>
                )
              })}
            </Picker>
          </View>
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
          <View style={styles.pickerDiv}>
            <Text style={ this.isEnabled('ec') ? styles.pickerTitle : styles.pickerTitleDisabled }>Espaço aberto ou cômodo</Text>
            <Picker
              style={styles.picker}
              selectedValue={this.state.espacoOuComodo}
              onValueChange={(value) => this.setState({ espacoOuComodo: value })}
              enabled={this.isEnabled('ec')}
            >
              {this.state.espacosOuComodos.map(obj => {
                return (
                  <Picker.Item key={obj.value} label={obj.label} value={obj.value}/>
                )
              })}
            </Picker>
          </View>
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
          <Button title="Criar ocorrência" ViewComponent={LinearGradient}
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