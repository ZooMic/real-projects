Zapisz algorytm dekodowania tekstu (w postaci listy kroków lub w wybranym języku
programowania), który pobiera tablicę bajtów tekstu skompresowanego i wyświetla
źródłowy tekst.
W algorytmie możesz wykorzystać poniższe funkcje lub ich odpowiedniki w wybranym
języku programowania:

    testBit (bajt, numerBitu) – zwraca wartość TRUE, jeśli w bajcie bit
    o podanym numerze ma wartość 1, lub FALSE, jeśli ten bit ma wartość 0.

    ustawBit(bajt, numerBitu) – zwraca bajt, w którym bit o podanym numerze
    ustawiono na 1, a pozostałe bity nie zostały zmienione.

Specyfikacja:
Dane:
    v[] – tablica zawierająca kolejne bajty tekstu skompresowanego

    n – liczba elementów tablicy v[]

    r – liczba różnych znaków w tekście
    
    t[] – tablica przechowująca pary {znak, kod}, definiująca przyporządkowanie
    kodu do znaku

    bity – liczba bitów przeznaczonych do przechowywania kodu jednego znaku
    
    Wynik:
    s – źródłowy łańcuch znaków