import React from 'react';
import { SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, View, ScrollView } from 'react-native';

export default function App() {
  const [reaction, setReaction] = React.useState('');
  const [result, setResult] = React.useState('');

  async function submit() {
    try {
      const res = await fetch('https://your-domain-or-local-ngrok/api/reaction', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ reaction })
      });
      const json = await res.json();
      setResult(JSON.stringify(json, null, 2));
    } catch (e) {
      setResult('Error: ' + e.message);
    }
  }

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>TitusChem — Mobile</Text>
      <TextInput
        style={styles.input}
        placeholder="Type reaction e.g. H2 + O2 -> H2O"
        value={reaction}
        onChangeText={setReaction}
      />
      <TouchableOpacity style={styles.btn} onPress={submit}>
        <Text style={styles.btnText}>Calculate</Text>
      </TouchableOpacity>
      <ScrollView style={styles.output}>
        <Text style={styles.outputText}>{result || 'Result will appear here'}</Text>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 18, backgroundColor: '#07124b' },
  title: { fontSize: 20, color: '#fff', marginBottom: 12, fontWeight: '700' },
  input: { backgroundColor: '#fff', padding: 12, borderRadius: 8, marginBottom: 10 },
  btn: { backgroundColor: '#ffcc00', padding: 12, borderRadius: 8, alignItems: 'center', marginBottom: 12 },
  btnText: { fontWeight: '700' },
  output: { backgroundColor: '#0e1a3a', borderRadius: 8, padding: 12 },
  outputText: { color: '#dfe9ff' }
});