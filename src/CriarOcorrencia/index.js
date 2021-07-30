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
    prioridade: String,
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

    nenhum: Object,
  }

  constructor(props: Props) {
    super(props)

    this.state = {
      titulo: '',
      desc: '',
      prioridade: 'Alta',
      instituicao: -1,
      filial: -1,
      predio: -1,
      espaco: -1,
      comodo: -1,

      nenhum: {
        id: -1,
        nome: 'Nenhum'
      },

      //ENUMS
      prioridades: ['Alta', 'Média', 'Baixa'],

      instituicoes: [
        {
          id: -1,
          nome: 'Nenhum'
        }
      ],

      filiais: [
        {
          id: -1,
          nome: 'Nenhum'
        }
      ],
      
      predios: [
        {
          id: -1,
          nome: 'Nenhum'
        }
      ],
      
      espacos: [
        {
          id: -1,
          nome: 'Nenhum'
        }
      ],
      
      comodos: [
        {
          id: -1,
          nome: 'Nenhum'
        }
      ]
    }
  }

  async componentDidMount () {
    await axios.get('http://localhost:3333/instituicoes/' + this.props.route.params.userId)
        .then(res => {
          res.data.unshift(this.state.nenhum)
          this.setState({
            instituicoes: res.data
          })
        }).catch(err => alert(err))
  }

  renderFilial () {
    return (
      <View style={styles.pickerDiv}>
        <Text style={ this.isEnabled('filial') ? styles.pickerTitle : styles.pickerTitleDisabled }>Filial</Text>
        <Picker
          style={styles.picker}
          selectedValue={this.state.filial}
          onValueChange={(value) => this.filialChange(value)}
          enabled={this.isEnabled('filial')}
        >
          {this.state.filiais.map(obj => {
            return (
              <Picker.Item key={obj.id} label={obj.nome} value={obj.id}/>
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
          onValueChange={(value) => this.predioChange(value)}
          enabled={this.isEnabled('predio')}
        >
          {this.state.predios.map(obj => {
            return (
              <Picker.Item key={obj.id} label={obj.nome} value={obj.id}/>
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
          onValueChange={(value) => this.espacoChange(value)}
          enabled={this.isEnabled('espaco')}
        >
          {this.state.espacos.map(obj => {
            return (
              <Picker.Item key={obj.id} label={obj.nome} value={obj.id}/>
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
          onValueChange={(value) => this.comodoChange(value)}
          enabled={this.isEnabled('comodo')}
        >
          {this.state.comodos.map(obj => {
            return (
              <Picker.Item key={obj.id} label={obj.nome} value={obj.id}/>
            )
          })}
        </Picker>
      </View>
    )
  }

  async instituicaoChange (value) {
    await this.setState({ instituicao: value })
    
    if (value != -1) {
      await axios.get('http://localhost:3333/filiais/' + this.state.instituicao)
        .then(res => {
          res.data.unshift(this.state.nenhum)
          this.setState({
            filiais: res.data
          })
        }).catch(err => alert(err))
    } else {
      this.setState({
        filial: -1,
        predio: -1,
        comodo: -1,
        espaco: -1
      })
    }
  }
  
  async filialChange (value) {
    await this.setState({ filial: value })
    
    if (value != -1) {
      await axios.get('http://localhost:3333/predios/' + this.state.filial)
        .then(res => {
          res.data.unshift(this.state.nenhum)
          this.setState({predios: res.data}) 
        }).catch(err => alert(err))
      
      
      await axios.get('http://localhost:3333/espaco-aberto/' + this.state.filial)
        .then(res => {
          res.data.unshift(this.state.nenhum)
          this.setState({espacos: res.data}) 
        }).catch(err => alert(err))
    } else {
      this.setState({
        predio: -1,
        comodo: -1,
        espaco: -1
      })
    }
  }

  async predioChange (value) {
    await this.setState({ predio: value })
    
    if (value != -1) {
      await axios.get('http://localhost:3333/comodos/' + this.state.predio)
        .then(res => {
          res.data.unshift(this.state.nenhum)
          this.setState({comodos: res.data}) 
        }).catch(err => alert(err))
    } else {
      this.setState({
        comodo: -1
      })
    }
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

  async criarOcorrencia () {
    const ocorrencia = {
      titulo: this.state.titulo,
      desc: this.state.desc,
      prioridade: this.state.prioridade,
      comodo: this.state.comodo,
      espaco: this.state.espaco,
      userId: this.props.route.params.userId
    }
    console.log(ocorrencia)
    await axios.post('http://localhost:3333/ocorrencias/', ocorrencia)
      .then(res => {
        alert("Ocorrência criada com sucesso")
    }).catch(err => alert('Falha ao criar ocorrência'))
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
                  <Picker.Item key={obj} label={obj} value={obj}/>
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
                  <Picker.Item key={obj.id} label={obj.nome} value={obj.id}/>
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
          <Button onPress={() => this.criarOcorrencia()} disabled={!this.isEnabled('button')} title="Criar ocorrência" ViewComponent={LinearGradient}
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