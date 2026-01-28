import React, { useState } from "react";
import { SafeAreaView, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import { Calendar, CheckCircle2, Leaf, MapPin } from "lucide-react-native";

export default function App() {
  const [surface, setSurface] = useState("3000");
  const [saved, setSaved] = useState(false);

  return (
    <SafeAreaView style={styles.safe}>
      <ScrollView contentContainerStyle={styles.container}>
        <View style={styles.header}>
          <View style={styles.logo}>
            <Leaf color="#fff" size={24} />
          </View>
          <View>
            <Text style={styles.brand}>LoueUneChevre.com</Text>
            <Text style={styles.subtle}>Prototype terrain mobile</Text>
          </View>
        </View>

        <View style={styles.card}>
          <Text style={styles.title}>Nouvelle visite terrain</Text>
          <Text style={styles.label}>Commune</Text>
          <TextInput style={styles.input} placeholder="Ex: Saint-Amand-les-Eaux" />
          <Text style={styles.label}>Surface estimee</Text>
          <TextInput style={styles.input} value={surface} onChangeText={setSurface} keyboardType="numeric" />

          <View style={styles.row}>
            <MapPin color="#166534" size={20} />
            <Text style={styles.rowText}>GPS a integrer plus tard</Text>
          </View>
          <View style={styles.row}>
            <Calendar color="#166534" size={20} />
            <Text style={styles.rowText}>Planning berger non synchronise</Text>
          </View>

          <TouchableOpacity style={styles.button} onPress={() => setSaved(true)}>
            <Text style={styles.buttonText}>Enregistrer la pre-visite</Text>
          </TouchableOpacity>

          {saved && (
            <View style={styles.success}>
              <CheckCircle2 color="#166534" size={18} />
              <Text style={styles.successText}>Brouillon sauvegarde localement</Text>
            </View>
          )}
        </View>

        <View style={styles.warning}>
          <Text style={styles.warningTitle}>Dette connue</Text>
          <Text style={styles.warningText}>Pas encore d'auth, pas de mode offline robuste, pas de sync API. Prototype fait par l'ancien dev avant la levee de fonds.</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: "#fdfbf7" },
  container: { padding: 20, gap: 18 },
  header: { flexDirection: "row", alignItems: "center", gap: 12 },
  logo: { width: 44, height: 44, borderRadius: 22, backgroundColor: "#16a34a", alignItems: "center", justifyContent: "center" },
  brand: { fontSize: 22, fontWeight: "800", color: "#1c1917" },
  subtle: { color: "#78716c" },
  card: { backgroundColor: "#fff", borderRadius: 18, padding: 18, gap: 12, borderWidth: 1, borderColor: "#e7e5e4" },
  title: { fontSize: 22, fontWeight: "800", color: "#1c1917", marginBottom: 8 },
  label: { fontWeight: "700", color: "#44403c" },
  input: { borderWidth: 1, borderColor: "#d6d3d1", borderRadius: 10, padding: 12, backgroundColor: "#fff" },
  row: { flexDirection: "row", alignItems: "center", gap: 8, paddingVertical: 4 },
  rowText: { color: "#57534e" },
  button: { backgroundColor: "#166534", borderRadius: 12, padding: 14, alignItems: "center", marginTop: 8 },
  buttonText: { color: "#fff", fontWeight: "800" },
  success: { flexDirection: "row", alignItems: "center", gap: 8, backgroundColor: "#dcfce7", borderRadius: 10, padding: 10 },
  successText: { color: "#166534", fontWeight: "700" },
  warning: { backgroundColor: "#fef3c7", borderRadius: 16, padding: 16, borderWidth: 1, borderColor: "#f59e0b" },
  warningTitle: { fontWeight: "800", color: "#92400e", marginBottom: 6 },
  warningText: { color: "#78350f", lineHeight: 20 }
});
