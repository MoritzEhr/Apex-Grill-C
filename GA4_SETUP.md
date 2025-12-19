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

## 3. Berichte erstellen (Wo sehe ich die Daten?)

Da dies *benutzerdefinierte* Daten sind, tauchen sie nicht automatisch in den Standard-Berichten auf. Du musst einen **Explorativen Bericht (Explore)** erstellen.

1.  Klicke im linken Menü auf **"Explorative Datenanalyse"** (Explore).
2.  Erstelle einen neuen Bericht (Klick auf **"Leeres Blatt"**).
3.  **Variablen hinzufügen** (linke Spalte):
    *   Klicke bei **Dimensionen** auf das `+` und importiere:
        *   `Versicherung gebucht`
        *   `CO2-Neutral`
        *   `Abonnement`
    *   Klicke bei **Messwerte** auf das `+` und importiere:
        *   `Käufe` (Purchase count)
        *   `Gesamtwert (Custom)`
        *   `Trinkgeld Prozent`
4.  **Tabelle bauen** (rechte Spalte "Einstellungen"):
    *   Ziehe deine Dimensionen (z.B. `Versicherung gebucht`) in den Bereich **Zeilen**.
    *   Ziehe deine Messwerte (z.B. `Käufe`, `Gesamtwert (Custom)`) in den Bereich **Werte**.

Jetzt siehst du eine Tabelle, z.B.:
*   `has_insurance = true`: 50 Käufe, 1200€ Umsatz
*   `has_insurance = false`: 30 Käufe, 500€ Umsatz

Wiederhole dies für CO2 und Abo in eigenen Tabs oder neuen Berichten.
