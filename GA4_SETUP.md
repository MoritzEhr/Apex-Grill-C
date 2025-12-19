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

## 4. Profi-Tipp: Einzelne Transaktionen als Tabelle (Flat Table)

Wenn du eine Liste möchtest, in der **jede Zeile eine Bestellung** ist (wie in Excel), konfiguriere den Bericht so:

1.  **Dimensionen importieren**: Füge zusätzlich `Transaktions-ID` (Transaction ID) hinzu.
2.  **Zeilen (Rows)** konfiguriere:
    *   Ziehe `Transaktions-ID` an die erste Stelle.
    *   Ziehe danach deine anderen Dimensionen (`Versicherung`, `CO2`, `Abo`) ebenfalls in den Bereich **Zeilen**.
3.  **WICHTIG:** Gehe rechts in den Einstellungen zum Punkt **"Verschachtelte Zeilen" (Nested rows)** und stelle ihn auf **"Nein"**.
    *   Dadurch stehen die Werte nebeneinander statt untereinander!
4.  **Werte (Values)**:
    *   Ziehe hier deine Zahlen rein (`Trinkgeld Prozent`, `Gesamtwert`).

**Das Ergebnis sieht dann so aus:**

| Transaktions-ID | Versicherung | CO2 | Abo | Trinkgeld % | Gesamtwert |
| :--- | :--- | :--- | :--- | :--- | :--- |
| ORDER_12345... | true | false | false | 10 | 25.50€ |
| ORDER_67890... | false | true | true | 5 | 42.00€ |

> [!WARNING]
> **"Keine Daten"? Keine Panik!**
> Die "Explorative Datenanalyse" (Explore) zeigt Daten **nicht in Echtzeit** an. Es dauert oft **24 bis 48 Stunden**, bis neue Events hier auftauchen.
>
> **Sofort-Test:**
> Um zu prüfen, ob es *jetzt gerade* funktioniert, nutze in Google Analytics den Bereich **Verwaltung -> DebugView**. Dort siehst du Events wenige Sekunden nach dem Klick.

## 5. Deine Wunsch-Ansicht: Der Detaillierte Einkaufs-Bericht

Um genau das zu sehen, was du möchtest ("Ein Einkauf pro Zeile mit allen Infos"), baust du den Bericht so:

**Zeilen (in dieser Reihenfolge):**
1.  `Transaktions-ID`
2.  `Stadt` (Woher kommt er?)
3.  `Geschlecht` (siehe Warnung unten!)
4.  `Versicherung gebucht`
5.  `Abonnement`
6.  `Artikelname` (Achtung: Das macht die Zeilen mehrfach!)

**Werte:**
1.  `Gesamtwert (Custom)`
2.  `Trinkgeld Prozent`

### ⚠️ Wichtige Einschränkungen von Google Analytics

1.  **Artikel in einer Zeile:** GA4 kann nicht "Burger, Pommes, Cola" in *eine* Zelle schreiben. Wenn du "Artikelname" hinzufügst, wird die Bestell-ID 3x untereinander auftauchen (einmal für jedes Produkt). Ohne "Artikelname" hast du genau eine Zeile pro Bestellung.
2.  **Geschlecht (Datenschutz):** Google schützt die Privatsphäre sehr streng. Wenn du versuchst, das **Geschlecht** zusammen mit einer **Transaktions-ID** anzuzeigen, wird Google diese Zeilen oft **ausblenden (Thresholding)**, weil man sonst einzelne Personen identifizieren könnte.
    *   *Empfehlung:* Lass das Geschlecht in der Einzelansicht weg und schau es dir lieber in einer großen statistischen Übersicht an.

So bekommst du die sauberste Liste!
