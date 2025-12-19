# Google Analytics 4 (GA4) Konfiguration

Damit die benutzerdefinierten Daten (Versicherung, CO2, Abo, Trinkgeld) in deinen Google Analytics Berichten sichtbar werden, musst du sie als **Benutzerdefinierte Dimensionen** (Custom Dimensions) und **Benutzerdefinierte Messwerte** (Custom Metrics) anlegen.

Die Standard-Daten (Umsatz, Produkte, Versandkosten) werden automatisch erfasst.

## 1. Custom Dimensions (Benutzerdefinierte Dimensionen) anlegen
Für die "Ja/Nein"-Optionen.

1. Gehe in Google Analytics auf **Verwaltung** (Zahnrad-Icon unten links).
2. Klicke unter **Datenanzeige** auf **Benutzerdefinierte Definitionen**.
3. Klicke auf **"Benutzerdefinierte Dimension erstellen"**.
4. Erstelle folgende 3 Dimensionen:

| Dimensionsname | Umfang (Scope) | Ereignisparameter (Event Parameter) | Beschreibung |
| :--- | :--- | :--- | :--- |
| **Versicherung gebucht** | Ereignis | `has_insurance` | Ob die Lieferversicherung gewählt wurde |
| **CO2-Neutral** | Ereignis | `is_co2_neutral` | Ob CO2-neutrale Lieferung gewählt wurde |
| **Abonnement** | Ereignis | `has_subscription` | Ob das Abo abgeschlossen wurde |

## 2. Custom Metrics (Benutzerdefinierte Messwerte) anlegen
Für das Trinkgeld (da es eine Zahl/Währung ist).

1. Bleibe unter **Benutzerdefinierte Definitionen**.
2. Klicke auf den Tab **"Benutzerdefinierte Messwerte"**.
3. Klicke auf **"Benutzerdefinierten Messwert erstellen"**.
4. Erstelle folgende Messwerte:

| Messwertname | Umfang (Scope) | Ereignisparameter | Maßeinheit |
| :--- | :--- | :--- | :--- |
| **Trinkgeld Prozent** | Ereignis | `tip_percentage` | Standard (Zahl) |
| **Gesamtwert (Custom)** | Ereignis | `total_cart_value` | Währung |

## 3. Ergebnis
Nach ca. 24-48 Stunden kannst du diese Daten in deinen Berichten nutzen, z.B. im "Explore"-Bereich, um zu sehen:
- "Wie viel Trinkgeld wurde durchschnittlich gegeben?"
- "Wie viel % der Nutzer wählen die CO2-neutrale Lieferung?"
