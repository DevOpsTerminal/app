# frontend
The frontend side of application, with jquery plugin and html, json technologies

## How to install with [apicra](https://apicra.com/) (not depends system)

    apicra install

## How to install on Windows

    sh apicra/windows/install.sh

## How to install on Linux


## Jquery & template
zamiast tmpl starego uzywanie render:
http://71104.github.io/jquery-handlebars/


## Cel projektu

Celem jest stworzenie nakladki na terminal, ktory bedzie wykonywal skrypty i wczesniej zdefiniowane komendy
na maszynach lokalnych i zdalnych.

Ma byc nawet mozliwe wspoldzielenie komend, wysylanie ich do spolecznosci, aby np pokazac, problem ktory siepojawil

lub inteligentne zapytanie w google o kod z bledami,
tak aby nie zawieral wrazliwych danych jak:
- nr ip
- nazwa domeny
- login
- password
- Imie
- Nazwisko
- Email
- hash

### Zgłoszenie E-mail
Można też zgłaszać te błędy do innego członka zespołu,
np administratora
można wspołdzielić projekty i  wten sposób korzystać z tych samych komend i widoków

## Struktura logiki

+ Projekt: zespół
    + Serwer: nazwa host, nr ip
        + Sesja: data i czas
            +  Cmd: komendy i odpowiedzi

## Dlaczego podzial na projekty?
Przyjąłem koncepcję, że użytkownik wchodzi na konkretny serwer, by wykonać konkretne zadania.
W takiej strukturze, projekt jako pierwszy definiuje cele.
Dodatkowo podział na projekty, pozwala na przydzielenie zespołów projektowych, ról i konkretnych użytkowników
do konkretnego zakresu działań..
Jeśli pojawia się błąd w sytsemie, każdy użytkownik może go od razu zobaczyć.


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


