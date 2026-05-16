import type { FAQItem } from '../types/index';

export const faqItems: FAQItem[] = [
  {
    question: 'Jak długo trwa wdrożenie i integracja z moim sklepem?',
    answer: 'Standardowe wdrożenie zajmuje 1 dzień roboczy. Nasz zespół przeprowadza cały proces — od podłączenia do Allegro API, przez konfigurację hurtowni, aż po pierwsze automatyczne wystawienie produktów. Nie musisz mieć wiedzy technicznej.',
  },
  {
    question: 'Czy automatyzacja jest zgodna z regulaminem Allegro?',
    answer: 'Tak, AllegroAuto działa wyłącznie przez oficjalne Allegro REST API, zgodnie z wytycznymi dla partnerów technologicznych Allegro. Nie używamy żadnych niedozwolonych metod scraping ani botów. Jesteśmy autoryzowanym partnerem technologicznym Allegro.',
  },
  {
    question: 'Co jeśli moja hurtownia nie ma API ani pliku XML?',
    answer: 'Obsługujemy hurtownie bez API — możemy pobierać dane z plików CSV, XLSX lub nawet automatycznie parsować katalogi FTP. W ramach planu Enterprise oferujemy również niestandardowe integracje dedykowane. Skontaktuj się z nami, aby omówić Twój przypadek.',
  },
  {
    question: 'Czy jest możliwość przetestowania przed zakupem?',
    answer: 'Tak, oferujemy bezpłatny 14-dniowy trial bez podawania karty kredytowej. W tym czasie masz dostęp do wszystkich funkcji planu Pro. Po zakończeniu trialu możesz wybrać plan dopasowany do potrzeb lub zrezygnować bez żadnych opłat.',
  },
  {
    question: 'Co się dzieje, gdy hurtownia jest niedostępna lub pojawia się błąd synchronizacji?',
    answer: 'System automatycznie wykrywa błędy i podejmuje kolejne próby synchronizacji (do 3 razy w ciągu godziny). Jeśli problem się utrzymuje, otrzymujesz powiadomienie e-mail lub SMS. Oferty na Allegro pozostają aktywne z ostatnimi poprawnymi stanami, więc nie tracisz widoczności.',
  },
];
