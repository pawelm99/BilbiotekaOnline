
=======
![Logo](https://user-images.githubusercontent.com/56208135/141685855-71824113-afba-4470-ab14-7bf75ed645d2.png)


# Specyfikacja - Timber

### 1. Wprowadzenie

#### 1.1. Opis Systemu
Celem jest utworzenie aplikacji, która umożliwi uzytkownikom korzystanie z książek(E-book). Aplikacja ma działać na zasadzie księgarni gdzie użytkownik może zakupić lub wypożyczyć swoją kopię produktu ale także składować swoje E-booki w formie biblioteczki. Po zakupie lub wypożyczeniu użytkownik ale także przeczytaniu zostanie nagrodzony odpowiednią ilość punktów które później będzie mógł wymienić na kody rabatowe(nie tylko obowiązujące w naszej aplikacji) lub nawet zakupić za te punkty kolejny produkt. Dla użykownika będzie również istniała możliwość wykupu subskrypcji w ramach której będzie otrzymywał co miesiąc darmowe kopie książek, po jej zakończeniu nadal będzie mógł z nich w pełni korzystać. Subksrypcja będzie obejmować grupy, każdy dodany do grupy będzie miał możliwość korzystania z biblioteki.

#### 1.2. Słownik Pojęć

-Użytkownik – osoba, która korzysta z programu/strony.

-System – program, który ma za zadanie ułatwić pracę firmy.

-Baza danych – program, który gromadzi dane i ułatwia dostęp do nich. Dzięki temu możliwa jest centralizacja danych.

-Serwer (host) – główny komputer, na którym rezydują programy i który udostępnia komputerom-klientom swoją funkcjonalność poprzez przeglądarkę internetową.

-Przeglądarka internetowa – program, który łączy się z serwerem, pobiera i wyświetla stronę internetową

-klient – rozumiany w dwójnasób – jako osoba zlecająca firmie stworzenie projektu oraz jako komputer, który korzysta z usług innego komputera (serwera).

-grupa – jest to pojęcie opisujące zbiór kliku osób

-Architektura klient – serwer – forma komunikacji upraszczających model wzorcowy ISO OSI z siedmiu do 3 warstw: fizycznej, łącza danych oraz sesji realizowanej za pomocą protokołu zamówienie – odpowiedź.  Centralizuje usługi, dzięki czemu firma korzysta zawsze z tej samej wersji oprogramowania. W naszym przypadku usługą tą jest udostępnianie stron html.

-architektura – schemat ogólny budowy systemu komputerowego lub jego części, określający jego elementy, układy ich łączące i zasady współpracy między nimi.

### 2.Model Procesów Biznesowych

#### 2.1 Obiekty Binesowe

| Nazwa:| Księgarnia <img width=1000/>|         
|:------|:----------------------------------------------------------------------|
| Opis: |Miejsce w ktróym użytkownik może przeglądać dostępne E-booki, przeglądnąć kilka przykładowych stron, dokonwywać ich zakupu, czytać oraz wystawiać opinie.|

| Nazwa:| Biblioteka <img width=1000/>|
|:------|:-------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Opis: |Miejsce w którym użytkownik ma dostęp do zakupionych przez siebie książęk.|

| Nazwa:| Grupa <img width=1000/>                                               |
|:------|:----------------------------------------------------------------------|
| Opis: |Grupa posiada użytkowników oraz właściciela, który zarządza grupą i jej przywilejami. Grupy mają wspólną bibliotektę, które mogą zostać stworzone na początku tylko przez właściciela, który później przydzielając odpowiednie prawa może zezwolić na tę opcję innym użytkownikom.|

#### 2.2 Aktorzy Biznesowi


| Nazwa:| Użytkownik Niezalogowany <img width=1000/>                            |
|:------|:----------------------------------------------------------------------|
| Opis: |Użytkownik który nie zalogował sie lub nie wykreował swojego konta, ma <br> dostęp tylko do księgarni w której może przeglądać interesujące go książki.|

| Nazwa:| Użytkownik Zalogowany <img width=1000/>                                                  |
|:------|:----------------------------------------------------------------------|
| Opis: |Użytkownik który wykreował swoje konto ale także się zalogował ma pełny dostęp do oferowanej treśći.|

| Nazwa:| Subskrybent                 <img width=1000/>                                            |
|:------|:----------------------------------------------------------------------|
| Opis: |Użytkownik który wykupił subskrypcje i ma dostę do specjalnych treści przeznaczonych wyłącznie dla niego oraz użytkowników w jego grupie.|

| Nazwa:| Człownek Grupy       <img width=1000/>                                                   |
|:------|:----------------------------------------------------------------------|
| Opis: |Użytkownik dodany przez właściciela do grupy, ma dostę do treści sybskrybenta.|

| Nazwa:| Administrator          <img width=1000/>                                                 |
|:------|:----------------------------------------------------------------------|
| Opis: |Posiada pełen dostęp do serwisu. Służy jako pomoc techniczna dla użytkowników.|

### 3.Wymagania

#### 3.1 Wymagania Funkcjonalne

| ID:        | 1                   <img width=1000/>                                                    |
|:-----------|:----------------------------------------------------------------------|
| Nazwa:     |Tworzenie konta                                                        |
| Priorytet: |Wysoki                                                                 |
| Rola:      |Wszyscy                                                                |
| Opis:      |Aplikcja oferuje tworzenie konta poprzez podane przez użytkownika dane.|

| ID:        | 2                   <img width=1000/>                                                                                          | 
|:-----------|:------------------------------------------------------------------------------------------------------------|
| Nazwa:     |Logowanie                                                                                                    |
| Priorytet: |Wysoki                                                                                                       |
| Rola:      |Wszyscy                                                                                                      |
| Opis:      |Za pomocą podanych przy logowaniu danych uwierzytelniającyh, użytkownik uzyskuje dostęp do swojego konta.|

| ID:        | 3                    <img width=1000/>                                                        |
|:-----------|:---------------------------------------------------------------------------|
| Nazwa:     |Zakup lub wypożyczenie książki                                              |
| Priorytet: |Wysoki                                                                      |
| Rola:      |Wszyscy                                                                     |
| Opis:      |Aplikcja oferuje zakup lub wypożyczenie książek. Wypożyczenie będzie  ograniczone czasowo, natomiast zakup wiąże się z dożywotnim dostępem.|

| ID:        | 4                   <img width=1000/>                                                         |
|:-----------|:---------------------------------------------------------------------------|
| Nazwa:     |Przechowywanie książek                                                      |
| Priorytet: |Wysoki                                                                      |
| Rola:      |Wszyscy                                                                     |
| Opis:      |Użytkownik w każdym momencie będzie mógł uzyskać dostęp do produktów. <br> Będzie miał możliwość pobrania.|

| ID:        | 5                    <img width=1000/>                                                        |
|:-----------|:---------------------------------------------------------------------------|
| Nazwa:     |Nagradzanie punkatami                                                       |
| Priorytet: |Wysoki                                                                      |
| Rola:      |Wszyscy                                                                     |
| Opis:      |Aplikacja będzie nagradzać użytkownika punktami. Punkty będą przydzielane za zakup, przeczytanie książki lub innego rodzaju aktywnośći <br> np. powiększenie swojej kolekcji.|

| ID:        | 6                      <img width=1000/>                                                      |
|:-----------|:---------------------------------------------------------------------------|
| Nazwa:     |Wymiana punktów                                                             |
| Priorytet: |Wysoki                                                                      |
| Rola:      |Użytkownik                                                                  |
| Opis:      |Możliwość wymiany puntków na nagraody, kody rabatowe lub nawet na darmowe <br> kopie książek|

| ID:        | 7                     <img width=1000/>                                                       |
|:-----------|:---------------------------------------------------------------------------|
| Nazwa:     |Zakup subskrypcji                                                           |
| Priorytet: |Średni                                                                      |
| Rola:      |Użytkownik                                                                  |
| Opis:      |Subskrypcja zaoferuje użytkownikowi dostęp do określonej liczby książek za darmo. Ich pula będzie się zmieniać co miesiąć. Będzie objęty zniżkami na inne produkty oraz będzie miał dostęp przedpremierowo.  Będą istniały 2 rodzaje subskrypcji: Solo oraz Grupowa.|

| ID:        | 8                      <img width=1000/>                                                      |
|:-----------|:---------------------------------------------------------------------------|
| Nazwa:     |Dodawanie użytkownika do grupy subskrypcji                                  |
| Priorytet: |Średni                                                                      |
| Rola:      |Użytkownik                                                                  |
| Opis:      |Po zakupie subksrypcji grupowej właściciel będzie mógł dodawać do grupy  innych użytkowników.|


#### 3.2 Wymagania Niefunkcjonalne

| ID:        | 1                       <img width=1000/>                                                     |
|:-----------|:---------------------------------------------------------------------------|
| Nazwa:     |Podział odpowiedzalnośći                                                    |
| Priorytet: |Wysoki                                                                      |
| Opis:      |Platforma ma być podzielona na część frontendową jak i backendową. |

| ID:        | 2                       <img width=1000/>                                                     |
|:-----------|:---------------------------------------------------------------------------|
| Nazwa:     |Łatwość w użyciu                                                            |
| Priorytet: |Wysoki                                                                      |
| Opis:      |Platforma ma być przyjazna dla użytkownika. Interfejs musi być nowoczesny i przejrzysty.|

| ID:        | 3                      <img width=1000/>                                                      |
|:-----------|:---------------------------------------------------------------------------|
| Nazwa:     |Intergralność danych                                                        |
| Priorytet: |Średni                                                                      |
| Opis:      |Zabezpieczenie przed nieautoryzowaną zmianą danych przez użycie szyfrowania haseł oraz implementacja szyfrowanego połączenia https.|

| ID:        | 4                       <img width=1000/>                                                     |
|:-----------|:---------------------------------------------------------------------------|
| Nazwa:     |Przeładowanie Stron                                                         |
| Priorytet: |Średni                                                                      |
| Opis:      |Platforma powinna wczytywać się raz (brak przeładowywania podstron).        |


### 4. Technologia i Architektura

#### 4.1. Technologie
-ASP.NET

-React.JS

-MySQL

#### 4.2. Opis Architektury

![image](https://user-images.githubusercontent.com/56208135/139593932-508362fd-074d-4bef-b898-e03149c3f736.png)

-Za frontend będzie odpowiadać Reacj.JS w którym zostanie napisany interfejs użytkownika z którym to będzie mógł wchodzić w interakcję.

-Za backend odpowiada ASP.NET w którym zostanie napisany Web API. W ASP.NET zostanie wykonana mechanika strony oraz połączenie z bazą danych. 

-Za przechowywanie danych będzie odpowiadać baza danych MySQL. Będą się w niej znajodwać informacje o klientach, subksrybentach oraz książkach.


![image](https://user-images.githubusercontent.com/54260979/142664020-e094f156-357d-4a81-a958-3389dd7c21a1.png)

### 5. Lista przypdków użycia

W systemie istnieją dwa rodzaje użytkowników: Administrator oraz Użytkownik. Poniższa tabela przedstawia funkcjonalności poszczególnych ról.

|Funkcjonalność | Użytkownik | Administrator|
|:-------------:|:----------:|:------------:|
|Rejestracja użytkownika | + | - |
|Logowanie | + | + |
|Wylogowanie  | + | + |
|Edycja danych profilu | + | + |
|Wyszukiwanie pozycji | + | + |
|Dodanie recenzji | + | - | 
|Dodanie pozycji do koszyka | + | - |
|Usuwanie pozycji z koszyka | + | - |
|Złożenie zamówienia | + | - | 
|Historia zamówień | + | - |
|Kontakt z administratorem | + | - |
|Zbieranie punktów | + | - |
|Wydawanie punktów | + | - |
|Dodawanie pozycji do systemu | - | + | 
|Modyfikowanie pozycji z systemu | - | + |
|Usuwanie pozycji z sytemu | - | + |
|Tryb czytania | + | + |
|Przeglądanie użytkowników | - | + | 
|Usuwanie użytkownika | - | + |
|Przyjmowanie zgłoszeń | - | + |
|Biblioteczka | + | - |
|Zakup subskrypcji | + | - |
|Wypożyczenie pozycji | + | - |

- - - 

### 6. Scenariusze

### Rejestracja użytkownika

* **Cel**: 
        Celem tej funkcjonalności jest stworzenie konta dla nowego użytkownika w celu możliwości zalogowania się do systemu.
        
* **Wejście**:
        Osoba wprowadza e-mail, hasło oraz dane demograficzne.
        
* **Wyjście**:
        Osoba otrzymuje informację o poprawnym założeniu konta lub o  błędzie.
        
* **Główny scenariusz**:
        Osoba chce skorzystać z systemu oraz jego funkcji, aby tego dokonać musi posiadać konto w systemie.
        
* **Kroki**:

        - Krok 1: Osobie korzystającej wyświetla się ekran z możliwością zarejestrowania lub zalogowania.
        
        - Krok 2: Osoba wybiera opcję rejestracji.
        
        - Krok 3: Osoba wypełnia wymagane dane w formularzu.
        
        - Krok 4: Osoba otrzymuje informację o pomyślnym utworzeniu konta lub o wystąpieniu błędu.
        

* **Przykład**:

 ![alt text](https://github.com/Apollion95/IO/blob/Seba/img/rejestracja.png?raw=true)

- - - 

### Logowanie

* **Cel**: 
       Celem tej funkcjonalności jest umożliwienie użytkownikowi/administratorowi  uzyskania dostępu do systemu.
        
* **Wejście**:
        Użytkownik/Administrator wprowadza dane logowania.
        
* **Wyjście**:
       Użytkownik/Administrator otrzymuje informację o poprawnym zalogowaniu oraz dostęp do systemu lub komunikat o wprowadzeniu nieodpowiednich danych.
        
* **Główny scenariusz**:
       Użytkownik/Administrator chce uzyskać dostęp do swojego konta oraz systemu i jego funkcji, w tym celu musi się zalogować korzystając ze swojego konta.
        
* **Kroki**:

        - Krok 1: Użytkownikowi/Administratorowi wyświetla się ekran z możliwością zarejestrowania lub zalogowania.

        - Krok 2: Użytkownik/Administrator wybiera opcję logowania.

        - Krok 3: Użytkownik/Administrator wypełnia wymagane dane w formularzu.

        - Krok 4: Użytkownik/Administrator otrzymuje informację o pomyślnym zalogowaniu lub o błędnych danych.

        

* **Przykład**:

![alt text](https://github.com/Apollion95/IO/blob/Seba/img/logowanie.png?raw=true)

- - - 

### Wylogowanie

* **Cel**: 
        Celem tej funkcjonalności jest umożliwienie użytkownikowi/administratorowi  wylogowanie się z systemu tym samym zakończenie sesji korzystania z sytemu.
     
* **Wejście**:
        Użytkownik/Administrator klika przycisk „Wyloguj”.
        
* **Wyjście**:
       Użytkownik/Administrator otrzymuje informację o poprawnym wylogowaniu oraz zostaje przeniesiony na stronę główna.
        
* **Główny scenariusz**:
       Użytkownik/Administrator chce zakończyć korzystanie z systemu tym samym zabezpieczyć swoje konto przed nieautoryzowanym dostępem.
        
* **Kroki**:

        - Krok 1: Użytkownik/Administrator klika przycisk wyloguj.

        - Krok 2: Zamykana jest sesja określonego użytkownika/użytkownika premium/administratora.
       

* **Przykład**:

![alt text](https://github.com/Apollion95/IO/blob/Seba/img/wylogowanie.png?raw=true)

- - -

### Edycja danych profilu

* **Cel**: 
        Celem tej funkcjonalności jest umożliwienie użytkownikowi/administratorowi edycję danych przypisanych do konta.
     
* **Wejście**:
        Użytkownik/Administrator edytuje wybrane dane. 
        
* **Wyjście**:
       Komunikat o poprawnym zapisaniu nowych danych lub komunikat o błędzie.
        
* **Główny scenariusz**:
       Użytkownik/Administrator chce zaktualizować/edytować dane dotyczące swojego konta, w celu bezpieczeństwa/spójności lub poprawności danych.
        
* **Kroki**:

        - Krok 1: Użytkownik/Administrator przechodzi do zakładki „Ustawienia konta”.
        
        - Krok 2: Użytkownik/Administrator klika przycisk „Edytuj dane”.
        
        - Krok 3: Użytkownik/Administrator wypełnia poszczególne dane.
        
        - Krok 4: Użytkownik/Administrator klika przycisk „Zapisz”.

       

* **Przykład**:

![alt text](https://github.com/Apollion95/IO/blob/Seba/img/edycja_danych.png?raw=true)

- - -



### Wyszukiwanie pozycji

* **Cel**: 
        Celem tej funkcjonalności jest umożliwienie Użytkownikowi/Administratorowi znalezienie wybranej pozycji w systemie lub określonej grupy na podstawie frazy oraz filtrów.
     
* **Wejście**:
        Użytkownik/Administrator wprowadza frazę do wyszukania (autor / tytuł / ISBN).
        
* **Wyjście**:
       Wyświetlenie danej pozycji, kolekcji lub otrzymanie komunikatu o braku.
        
* **Główny scenariusz**:
       Użytkownik/Administrator chce przeszukać księgarnie aby  znaleźć odpowiednią pozycję lub grupę pozycji w celu dalszej interakcji .
        
* **Kroki**:

        - Krok 1: Użytkownik/Administrator wypełnia główne pole wpisując odpowiednią frazę.
        
        - Krok 2: **(Opcjonalnie)** Użytkownik/Administrator zawęża wyniki przy pomocy filtrów.
        
        - Krok 3: Użytkownik/Administrator klika przycisk „Szukaj”.

       

* **Przykład**:

![alt text](https://github.com/Apollion95/IO/blob/Seba/img/wyszukiwanie_pozycji.png?raw=true)

- - -

### Dodanie recenzji 

* **Cel**: 
        Celem tej funkcjonalności jest umożliwienie użytkownikowi dodanie recenzji do pozycji które przeczytał wraz z opsiem oraz oceną. Ocena będzie stanowić pewne kryterium dla innych użytkowników
     
* **Wejście**:
        Użytkownik wybiera opcję dodania recenzji.
        
* **Wyjście**:
       Wyświetlenie komunikatu o dodaniu recenzji.
        
* **Główny scenariusz**:
       Użytkownik po przeczytaniu książki chce ją ocenić wystawiając jej określoną ocene wraz z opisem. 
        
* **Kroki**:

        - Krok 1: Użytkownik wyszukuje przeczytaną książkę.
        
        - Krok 2: Użytkownik wybiera opcję "Oceń".
        
        - Krok 3: Użytkownik wprowadza ocene (1-5).
        
        - Krok 4: Użytkownik dodaje opis.
        
        - Krok 5: Użytkownik zatwierdza dodanie recenzji

       

* **Przykład**:

![alt text](https://github.com/Apollion95/IO/blob/Seba/img/recenzja.png?raw=true)

- - -


### Dodanie pozycji do koszyka

* **Cel**: 
        Celem tej funkcjonalności jest umożliwienie użytkownikowi dodania wielu pozycji do koszyka w celu wykonania jednego zamówienia wraz z wszystkimi wybranymi pozycjami zamiast wykonywania pojedynczych transakcji.
     
* **Wejście**:
        Użytkownik dodaje pozycje do koszyka.
        
* **Wyjście**:
       Wyświetlenie komunikatu o dodaniu pozycji do koszyka.
        
* **Główny scenariusz**:
      Użytkownik chce wykonać większe zamówienie, tym samym przeszukuje księgarnie w celu znalezienia interesujących go pozycji. Po znalezieniu danej pozycji  klika przycisk „Dodaj do koszyka”.
        
* **Kroki**:

        - Krok 1: Użytkownik wyszukuje określoną pozycję.

        - Krok 2: Użytkownik dodaje znalezioną pozycję do koszyka za pomocą przycisku.

       

* **Przykład**:

![alt text](https://github.com/Apollion95/IO/blob/Seba/img/dodanie_pozycji_do_koszyka.png?raw=true)

- - -

### Usuwanie pozycji z koszyka

* **Cel**: 
        Celem tej funkcjonalności jest umożliwienie usunięcia poszczególnych pozycji z koszyka.
     
* **Wejście**:
        Użytkownik klika przycisk „Usuń”.
        
* **Wyjście**:
       Wyświetlenie komunikatu o usunięciu pozycji z koszyka.
        
* **Główny scenariusz**:
      Użytkownik chce usunąć daną pozycję z koszyka, w tym celu wchodzi w zakładkę koszyk reprezentującą zamówienie. Następnie klika przycisk „Usuń” przy wybranej pozycji.
        
* **Kroki**:

        - Krok 1: Użytkownik otwiera zakładkę „Koszyk”.
        
        - Krok 2: Użytkownik przycisk „Usuń” przy wybranej pozycji.

       

* **Przykład**:

![alt text](https://github.com/Apollion95/IO/blob/Seba/img/usunięcie_pozycji_z_koszyka.png?raw=true)

- - -


### Złożenie zamówienia 

* **Cel**: 
        Celem tej funkcjonalności jest umożliwienie uzytkownikowi złożenie oraz opłacenie zamówienia.
     
* **Wejście**:
        Użytkownikowi potiwerdza zamówienie
        
* **Wyjście**:
      - Wyświetlenie komunikatu o przyjęciu zamówienia lub o błędzie.     
      - W przypadku powodzenia pobierana jest opłata oraz udostępniane są pozycje z zamówienia.

        
* **Główny scenariusz**:
      Użytkownik chce sfinalizować zamówienie w tym  celu wchodzi w zakładkę „Koszyk” klika przycisk „Złóż zamówienie”. Następnie sprawdza formularz po czym zatwierdza zamówienie poprzez przycisk „Zatwierdź”. Automatycznie przechodzi do zakładki płatność gdzie wybiera opcje płatności oraz finalizuje transakcje.
        
* **Kroki**:

        - Krok 1: Użytkownik otwiera zakładkę "Koszyk"
        
        - Krok 2: Użytkownik klika przycisk „Złóż zamówienie”.
        
        - Krok 3: Użytkownik sprawdza poprawność danych pozycji w formularzu.
        
        - Krok 4: Użytkownik potwierdza zamówienie.
        
        - Krok 5: Użytkownik wybiera metodę płatności.
        
        - Krok 6: Użytkownik finalizuje transkacje.


* **Przykład**:

![alt text](https://github.com/Apollion95/IO/blob/Seba/img/złóż_zamówienie.png?raw=true)

- - -

### Historia zamówień

* **Cel**: 
        Celem tej funkcjonalności jest umożliwienie użytkownikowi otrzymanie informacji na temat złożonych zamówień.
     
* **Wejście**:
        Użytkownik wybiera zakładkę „Historia”.
        
* **Wyjście**:
        Wyświetlenie historii zamówień.
        
* **Główny scenariusz**:
      Użytkownik chce sprawdzić złożone przez siebie zamówienia, przechodzi w zakładkę odpowiedzialną za historię, otrzymuje zestawienie wykonanych zamówień.
        
* **Kroki**:

        - Krok 1: Użytkownik otwiera zakładkę „Historia”.
        
        - Krok 2: Użytkownik opcjonalnie wybiera określone filtry(łączna cena / data złożenia … )
        
        - Krok 3: Użytkownik klika „Szukaj”.

       

* **Przykład**:

![alt text](https://github.com/Apollion95/IO/blob/Seba/img/historia.png?raw=true)

- - -

### Kontakt z administracją

* **Cel**: 
        Celem tej funkcjonalności jest umożliwienie użytkownikowi skontaktowanie się z administratorem systemu poprzez wysłanie zgłoszenia.
     
* **Wejście**:
        Użytkownik wysyła zgłoszenie
        
* **Wyjście**:
        Potwierdzenie wysłania zgłoszenia.
        
* **Główny scenariusz**:
         Użytkownik chce skontaktować się z administracją serwisu np. w celu złożenia zapytania/prośby o usunięcie konta. 
        
* **Kroki**:

        - Krok 1: Użytkownik otwiera zakładkę „Kontakt”.
        
        - Krok 2: Użytkownik klika przycisk „Wyślij zgłoszenie”.
        
        - Krok 3: Użytkownik wypełnia formularz zgłoszeniowy.
        
        - Krok 4: Użytkownik klika przycisk „Wyślij”.

       

* **Przykład**:

![alt text](https://github.com/Apollion95/IO/blob/Seba/img/kontakt.png?raw=true)

- - -

### Zdobywanie punktów

* **Cel**: 
        Celem tej funkcjonalności jest umożliwienie zbierania punktów użytkownikowi za wydawanie dostępnych środków oraz za wykonywanie określonych aplikacji w systemie.
     
* **Wejście**:
        Użytkowik wykonuję określoną akcję.
        
* **Wyjście**:
      - Użytkowik otrzymuję określoną ilość punktów w zależności od wykonanej akcji.
      - Użytkowik premium otrzymuje komunikat o ilości otrzymanych punktów.
        
* **Główny scenariusz**:
      Użytkowik wykonuje określone akcje np. złożenie zamówienia / wypożyczenie książki. Za sfinalizowanie akcji otrzymuje określoną ilośc punktów na swoje konto.
        
* **Kroki**:

        - Krok 1: Użytkowik wykonuje określoną akcję
        
        - Krok 2: Po jej zakończeniu punkty automatycznie są dopisywane do konta w odpowiedniej ilości.

       

* **Przykład**:

![alt text](https://github.com/Apollion95/IO/blob/Seba/img/zdobywanie_punktów.png?raw=true)

- - -

### Wydawanie punktów

* **Cel**: 
        Celem tej funkcjonalności jest umożliwienie użytkownikowi wymiany zebranych punktów na określone nagrody(ksiązki / kody rabatowe).
     
* **Wejście**:
        Użytkownik wybiera sposób wykorzystania punktów.
        
* **Wyjście**:
        - Użytkownik traci pewną ilość punktów.
        - Użytkownik otrzymuje określoną nagordę.
        
* **Główny scenariusz**:
      Użytkownik po zebraniu określonej ilości punktów wyraża chęć ich wykorzystania. 
        
* **Kroki**:

        - Krok 1: Użytkownik wchodzi w zakładkę "Punkty".
        
        - Krok 2.1.1: Użytkownik wybiera opcję uzyskania rabatu.
        
        - Krok 2.1.2: Użytkownik wybiera określony rabat oraz go zatwierdza.
        
        - Krok 2.1.3: Użytkownik otrzymuje kod, który może wykorzystać w zamówieniu

        /
        
        - Krok 2.2.1: Użytkownik wybiera opcję otrzymania określonej pozycji.
        
        - Krok 2.2.2: Użytkownik wybiera pozycję z określonej puli.
        
        - Krok 2.2.3: Użytkownik zatwierdza swój wybór.
       

* **Przykład**:

![alt text](https://github.com/Apollion95/IO/blob/Seba/img/wydawanie_punktów.png?raw=true)

- - -

### Dodanie pozycji do systemu

* **Cel**: 
        Celem tej funkcjonalności jest umożliwienie powiększenia ilości udostępnianych zasobów dostępnych w systemie.
     
* **Wejście**:
        Administrator zatwierdza odpowiedni formularz.
        
* **Wyjście**:
        Administrator otrzymuje komunikat o pomyślnym dodaniu zasobu lub komunikat o błędzie .
        
* **Główny scenariusz**:
      Administrator otrzymuje zasób do udostępnienia w systemie. Po zalogowaniu do systemu wchodzi w odpowiednią zakładkę. Wypełnia formularz (tytuł/autor/isbn..) oraz dodaje zasób, po czym zatwierdza formularz. 
        
* **Kroki**:

        - Krok 1: Administrator otrzymuje zasób.
        
        - Krok 2: Administrator uruchamia odpowiedni formularz.
        
        - Krok 3: Administrator wypełnia formularz.
        
        - Krok 4: Administrator ładuje zasób.
        
        - Krok 5: Administrator zatwierdza zasób.

       

* **Przykład**:

![alt text](https://github.com/Apollion95/IO/blob/Seba/img/dodanie_pozycji_do_systemu.png?raw=true)

- - -

### Modyfikowanie pozycji z systemu

* **Cel**: 
        Celem tej funkcjonalności jest umożliwienie zmianę zbioru danych które definiują dany zasób(autor, tytuł, ISBN).
     
* **Wejście**:
        Administrator modyfikuje poszczególne dane.
        
* **Wyjście**:
         Administrator otrzymuje komunikat o pomyślnej  modyfikacji zasobu lub komunikat o błędzie.
        
* **Główny scenariusz**:
      Administrator otrzymuje informację o zmianie danych identyfikujących dany zasób. Przeszukuje system w poszukiwaniu określonego zasobu oraz w momencie znalezienia modyfikuje określone informacje.
        
* **Kroki**:

        - Krok 1: Administrator przeszukuje system w poszukiwaniu określonej pozycji.
        
        - Krok 2: Administrator modyfikuje określone pola.
        
        - Krok 3: Administrator zatwierdza wprowadzone modyfikacje.

       

* **Przykład**:

![alt text](https://github.com/Apollion95/IO/blob/Seba/img/modyfikowanie_pozycji_z_systemu.png?raw=true)

- - -


### Usuwanie pozycji z systemu

* **Cel**: 
        Celem tej funkcjonalności jest umożliwienie usunięcia poszczególnych zasobów z systemu.
     
* **Wejście**:
        Administrator zatwierdza usunięcie pozycji.
        
* **Wyjście**:
        Administrator otrzymuje komunikat o pomyślnym usunięciu lub komunikat o błędzie.
        
* **Główny scenariusz**:
            Administrator otrzymuje informację o potrzebie usunięcia danego zasobu z systemu. Administrator wyszukuje odpowiedni zasób, wybiera opcję usunięcia po czym ją zatwierdza.
        
* **Kroki**:

        - Krok 1: Administrator przeszukuje system w poszukiwaniu określonej pozycji.
        
        - Krok 2: Administrator wybiera opcję usunięcia.
        
        - Krok 3: Administrator zatwierdza usunięcie pozycji.
       

* **Przykład**:

![alt text](https://github.com/Apollion95/IO/blob/Seba/img/usuwanie_pozycji_z_systemu.png?raw=true)

- - -


### Tryb czytania

* **Cel**: 
        Celem tej funkcjonalności jest umożliwienie użytkownikowi/administratorowi skorzystanie z zasobu w postaci trybu do czytania.
     
* **Wejście**:
       Użytkownik/Administrator wybiera dany zasób.
        
* **Wyjście**:
        Użytkownik/Administrator otrzymuje dany zasób w trybie "do czytania".
        
* **Główny scenariusz**:
        Użytkownik/Administrator chce skorzystać z zasobu, w tym celu przechodzi do odpowiedniej zakładki i wybiera interesującą go pozycje.
        
* **Kroki**:

        Użytkownik:
        
        - Krok 1: Wybiera zakładkę biblioteczka.
        
        - Krok 2: Wyszukuje interesującą go pozcyję.
        
        - Krok 3: Uruchamia tryb "do czytania".

        Administrator:
        
        - Krok 1: Wyszukuje określoną pozycję.
        
        - Krok 2: Uruchamia tryb "do czytania".

* **Przykład**:

![alt text](https://github.com/Apollion95/IO/blob/Seba/img/tryb_czytania.png?raw=true)

- - -


### Przeglądanie użytkowników

* **Cel**: 
        Celem tej funkcjonalności jest umożliwienie Administratorowi przeglądanie użytkowników w postaci listy lub w postaci indywidualnej celem późniejszych modyfikacji.
     
* **Wejście**:
        Adminstrator wyszukuje określonego użytkownika / grupę przy pomocy fraz i filtrów.
        
* **Wyjście**:
        Określony użytkownik / Kolekcja użytkowników / Komunikat o nie znalezieniu.
        
* **Główny scenariusz**:
        Administrator wybiera zakładkę przeszukania bazy w celu znalezienia określonego użytkownika lub grupy użytkowników. 
        
* **Kroki**:

        - Krok 1: Administrator wybiera zakładkę przeszukania bazy użytkowników
        
        - Krok 2: Administrator wpisuje określoną frazę do odnalezienia.
        
        - Krok 3: **(opcjonalnie)** Stosuje określone filtry w celu zawężenia wyników.
        
       

* **Przykład**:

![alt text](https://github.com/Apollion95/IO/blob/Seba/img/przeglądanie_użytkowników.png?raw=true)

- - -


### Usuwanie użytkowników

* **Cel**: 
        Celem tej funkcjonalności jest umożliwienie Administratorowi usunięcie danych użytkownika z systemu.
     
* **Wejście**:
        Administrator wybiera opcję usunięcia konta.
        
* **Wyjście**:
        Komunikat o pomyślnym usunięciu konta i powiązanych danych lub komunikat o błędzie.
        
* **Główny scenariusz**:
        Administrator otrzymuje zgłoszenie od klienta z prośbą o usunięcie konta. Administrator przeszukuje bazę użytkowników. Po znalezieniu określonego użytkownika wybiera opcję usunięcia .
        
* **Kroki**:

        - Krok 1: Administrator otrzymuje zgłoszenie.
        
        - Krok 2: Administrator wyszukuje określonego użytkownika.
        
        - Krok 3: Administrator wybiera opcję usunięcia.
        
        - Krok 4: Administrator potwierdza wykonywaną operację.
       

* **Przykład**:

![alt text](https://github.com/Apollion95/IO/blob/Seba/img/usuwanie_użytkowników.png?raw=true)

- - -


### Przyjmowanie zgłoszeń

* **Cel**: 
        Celem tej funkcjonalności jest umożliwienie przyjmowanie zgłoszeń przez administratora otrzymanych od użytkowników systemu.
     
* **Wejście**:
        Administrator potwierdza przyjęcie zgłoszenia.
        
* **Wyjście**:
        Administrator zostaje przypisany do zgłoszenia.
        
* **Główny scenariusz**:
    Po otrzymaniu zgłoszeń od użytkowników, administrator wybiera dane zgłoszenie i przypisuje się do niego.
        
* **Kroki**:

        - Krok 1: Administrator wchodzi w panel zgłoszeń.
        
        - Krok 2: Administrator wybiera określone zgłoszenie.
        
        - Krok 3: Administrator potwierdza przypisanie
        
        - Krok 4: Administrator zostaje przypisany do zgłoszenia
       

* **Przykład**:

![alt text](https://github.com/Apollion95/IO/blob/Seba/img/zgłoszenia.png?raw=true)

- - -


### Biblioteczka

* **Cel**: 
        Celem tej funkcjonalności jest umożliwnie użytkownikom przeglądniecię pozycji do których uzyskali dostęp oraz za pomocą tej funkcjonalności przejście to trybu "do czytania".
     
* **Wejście**:
        Użytkownik wybiera zakładkę "Biblioteczka".
        
* **Wyjście**:
        Użytkownik otrzymuję kolekcję zasobów do których ma przyznany dostęp.
        
* **Główny scenariusz**:
        Użytkownik chce skorzystać z posiadanych zasobów, w tym celu wybiera odpowiednią zakładkę oraz wyszukuje określoną pozycję.
        
* **Kroki**:

        - Krok 1: Użytkownik wybiera zakładkę "Biblioteczka"
        
        - Krok 2: Użytkownik otrzymuje kolekcję pozycji do który posiada dostęp.
        
        - Krok 3: **(opcjonalnie)** Użytkownik wybiera określoną pozycję której szukał w celu uruchomienia trybu "do czytania".
       

* **Przykład**:

![alt text](https://github.com/Apollion95/IO/blob/Seba/img/biblioteczka.png?raw=true)

- - -


### Zakup subskrypcji

* **Cel**: 
        - Użytkownik otrzymuje możliwość zakupienia miesięcznej subskrybcji w celu otrzymania statusu "premium" oraz otrzymując tym samym następujące bonusy: 
        
          - Otrzymanie określonej ilości pozycji za darmo(ich pula zmienia się co miesiąc)
          
          - Dodatkowe zniżki
          
          - Możliwość zakupienia określonych pozycji przedpremierowo 
          
          - Dodatkowej ilości przyznawanych punktów za doładowania
          
     
   
        
     
* **Wejście**:
        Użytkownik wybiera zakładkę "Premium".
        
* **Wyjście**:
        - Użytkownik otrzymuje status premium lub komunikat o niepowodzeniu.
        
* **Główny scenariusz**:
        Użytkownik chce skorzystać z funkcji premium, wybiera odpowiednią zakładkę oraz potwierdza transakcję.
        
       
        
* **Kroki**:

        - Krok 1:  Użytkownik wybiera zakładkę "premium"

        Użytkownik:
        
        - Krok 1.1.1: Wybiera jeden z dostępnych typów subskrypcji.
        
        - Krok 1.1.2: Klika przycisk "Kup".
       
       - Krok 1.1.3: Zatiwerdza sfinalizowanie transakcji.

       

* **Przykład**:

![alt text](https://github.com/Apollion95/IO/blob/Seba/img/subskrypcja.png?raw=true)

- - -



### Wypożyczenie pozycji

* **Cel**: 
        Celem tej funkcjonalności jest umożliwienie użytkownikowi wypożyczenie danej pozycji za mniejszą kwotę lub za punkty  w zamian za udostępnienie danej pozycji na określony przedział czasu.
     
* **Wejście**:
        Użytkowni wybiera opcję wypożyczenia.
        
* **Wyjście**:
        Użytkownik otrzymuje dany zasób na określony czas.
        
* **Główny scenariusz**:
        Użytkownik chce skorzystać z tańszej alternatywy otrzymania danego zasobu. Po wypożyczeniu pozycji otrzymuje do niej pełny dostęp na określony przediał czasu.
        
* **Kroki**:

        - Krok 1: Użytkownik wyszukuje interesującą go pozcycje.
       
       - Krok 2: Użytkownik wybiera opcję "Wypożycz".
       
       - Krok 3: Użytkownik wybiera opcję wypożyczenia za punkty/z dostępnych środków
        
        - Krok 4: Użytkownik zatwierdza swój wybór.
       
       - Krok 5: Użytkownik otrzymuje dany zasób na  określony czas.
       

* **Przykład**:

![alt text](https://github.com/Apollion95/IO/blob/Seba/img/wypożyczenie.png?raw=true)

- - -

### 7. Diagram UML

![Diagram UML](https://user-images.githubusercontent.com/56208135/142721410-b27871ad-aa10-4cd2-8823-3eaae0fcb485.png)

### 8. Szkic Intefrejsu

![Logowanie](https://user-images.githubusercontent.com/56208135/142667777-7ac7c94c-10dc-40fb-93dd-475b5d46d4d4.JPG)
- - - 
![Strona Główna](https://user-images.githubusercontent.com/56208135/142667795-589b8b7a-32e9-4f48-81b5-dc8d5fe695f2.JPG)
- - - 
![Okno](https://user-images.githubusercontent.com/56208135/142667896-69a467de-4686-42f6-8ee8-2232be37bac2.JPG)
- - -
![Czytanie Jasne](https://user-images.githubusercontent.com/56208135/142667907-658c71fc-393f-45d9-97af-580c9ee59b78.JPG)
- - -
![Czytanie Ciemne](https://user-images.githubusercontent.com/56208135/142667916-6800a0b6-4226-4bcc-a806-6764be7d61f3.JPG)
- - -
