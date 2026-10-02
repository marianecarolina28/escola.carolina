import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
} from 'react-native';

export default function CadastrosScreen({ navigation }) {
  const telas = [
    { nome: 'Alunos', tela: 'Alunos' },
    { nome: 'Professores', tela: 'Professores' },
    { nome: 'Responsáveis', tela: 'Responsaveis' },
    { nome: 'Cursos', tela: 'Cursos' },
    { nome: 'Disciplinas', tela: 'Disciplinas' },
    { nome: 'Matrículas', tela: 'Matriculas' },
    { nome: 'Turmas', tela: 'Turmas' },
    { nome: 'Avaliações', tela: 'Avaliacoes' },
    { nome: 'Coordenadores', tela: 'Coordenadores' },
    { nome: 'Boletim', tela: 'Boletim' },
  ];

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.titulo}>Cadastros</Text>

      <Text style={styles.subtitulo}>
        Selecione uma opção abaixo
      </Text>

      <View style={styles.lista}>
        {telas.map((item) => (
          <TouchableOpacity
            key={item.tela}
            style={styles.opcao}
            onPress={() => navigation.navigate(item.tela)}
          >
            <Text style={styles.nome}>{item.nome}</Text>
            <Text style={styles.seta}>→</Text>
          </TouchableOpacity>
        ))}
      </View>

      <TouchableOpacity
        style={styles.voltar}
        onPress={() => navigation.goBack()}
      >
        <Text style={styles.textoVoltar}>Voltar</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 24,
    paddingTop: 45,
  },

  titulo: {
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'left',
    marginBottom: 8,
  },

  subtitulo: {
    fontSize: 15,
    opacity: 0.6,
    marginBottom: 30,
  },

  lista: {
    width: '100%',
  },

  opcao: {
    minHeight: 60,
    borderBottomWidth: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 5,
    marginBottom: 4,
  },

  nome: {
    fontSize: 17,
    fontWeight: '600',
  },

  seta: {
    fontSize: 22,
    opacity: 0.5,
  },

  voltar: {
    marginTop: 30,
    alignSelf: 'flex-start',
    paddingVertical: 10,
  },

  textoVoltar: {
    fontSize: 15,
    fontWeight: 'bold',
  },
});
