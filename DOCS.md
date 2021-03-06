# example docs
https://github.com/pyeve/eve/tree/master/docs

## software requirements specification (SRS)
http://www.gatherspace.com/static/software_requirement_specification.html


### :open_file_folder: Struktura
Są trzy elementy:
+ serwer na ktorym są wykonywane komendy i skrypty
+ projetky, tzn zestawy komend i skryptów skojarzynch, zgrupowanych wokół jednego tematu, np działania na bazie danych
+ historyczne listy wykonywanych skryptów lub komend

Gdy konieczne jest wykonywanie wielu powtarzalnych komend na lokalnym czy na zdalnym serwerze
Wówczas warto miec narzędzie pozwalające na szybkie wykonywanie pewnych standardowych zadań.
DevOpsTerminal działa również na urządzeniach mobilnych.

#### Templates
warto dodac obsluge wielu templates.
poprzez instalacje pluginow, zeby stworzyc interfejs dla kazdego

#### Projekty, Wyglad strony 
Dodatkowo warto stworzyc widok drzewa, tree dla struktury projektow i komend,
moze niektorzy beda bardziej intuicyjnie uzywac tej aplikacji
* podobnie jak w skrzynce emailowej


### :email: Zgłoszenie E-mail
Można też zgłaszać te błędy do innego członka zespołu,
np administratora
można wspołdzielić projekty i  wten sposób korzystać z tych samych komend i widoków

## Struktura logiki

+ Projekt: zespół
    + Serwer: nazwa host, nr ip
        + Sesja: data i czas
            +  Cmd: komendy i odpowiedzi


# :page_facing_up: Projekt

## Dlaczego podzial na projekty?
Przyjąłem koncepcję, że użytkownik wchodzi na konkretny serwer, by wykonać konkretne zadania.
W takiej strukturze, projekt jako pierwszy definiuje cele.
Dodatkowo podział na projekty, pozwala na przydzielenie zespołów projektowych, ról i konkretnych użytkowników
do konkretnego zakresu działań..
Jeśli pojawia się błąd w sytsemie, każdy użytkownik może go od razu zobaczyć.

## :speech_balloon: Zespoł

## Role
- wlasciciel serwera - osoba ktora go kupila, ale moze nie wiedziec jak nim zarzadzac, moze byc konieczne aby majac go np w firmie, podszedl i zrestartowal maszyne osobiscie
- administrator - osoba ktora ma wiedze jak nim zarzadzac
- developer - uruchamia na serwerza aplikacje
- obserwator, ds jakosci, klient, etc, - w celu pokazania jak dziala sysstem i gdzie wystapil blad

### Blokowanie i ukrywanie dostepu uzytkownikom o nizszej roli
wyzsza instancja moze blokowac i wprowadzac warunkowe wykonanie/obserwowanie
np developer moze ukryc przed obserwatorem pewne dzialania: np zwiazane z bezpieczenstwem danych
Administrator moze zablokowc dostep do pewnych sfer systemu i projektow dla developera
np developer moze wyslac do administratora zadanie wykonania update systemu poniewaz  nie moze uzywac nowszej wersji jezyka programowania
albo system potrzebuje nowego pakietu, ktorego obecnie nie ma


### Projekt: serwis
służy do instalacji pakietów,
dzięki historia zdarzeń, mogę widzieć poprzednie sesje, z tego projektu,
dzięki czemu mogę zauważyć jakie zmiany były wcześniej i kiedy


###  Cmd: komendy i odpowiedzi
Widok posiada dwa parametry:
komendę
odpowiedz serwera

Odpowiedź serwera może być różna, poprawne wykonanie, albo np błąd,
dlatego wszystkie odpowiedzi z informacją błędu będą wyświetlane na czerwono/zółto


# Dla kogo jest to rozwiązanie
Rozwiązanie to nadaje się dla dużych grup deweloperów, gdzie każdy ma dostęp do maszyny serwera, ale
powinien mieć ograniczony dostęp.
Często ze względów bezpiezczeństwa nie daje się dostępu użytkownikowi do serwera,
Tutaj możliwe jest wysyłanie do administratora zapytań, czy może wykonać konkretne zapytanie,
lub po prostu wykonać konkretną pracę, wówczas zamiast komendy pisze sie opis, co ma wykonać na konkretnym serwerze
W ten sposób, workflow jest podobny, ale nie daje szansy na przypadkowe zmiany na serwerze, bo osobą
odpowiedzialną jest administrator, a przepływ danych jest jasny i zarchiwizowany.

## Raporty
W przyszłości możliwe będzie tworzenie raportów

## Szkolenia
Przejrzysty panelowi do zarządzania usługami w grupach użytkowników można być używany w grup edukacjynych.
Gdzie dodatkowa rola, np nauczyciel, będzie pozwalala na obserwacje działań uczniów i informowanie jakie działania powinni wykonać.
Jak poprawić, itp, ale bez uprawnień do ingerencji, gdyż do tego powinny być uprawnienia typu administrator.

Ten system może przydać się grupom w edukacji, na lekcjach programowania i ogólnie administrowanie
być może powstanie specjalna wersja dla nauczycieli, dzięki czemu
na każdy uczeń będzie mógł w grupie dzielić się wykonanymi zadaniami i pytać o przyczyny dlaczego coś nie działą
Cały proces może przebiegać zdalnie, gdyć devopstools jest niezależny od systemu.
