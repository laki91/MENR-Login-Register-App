# MENR-Login-Register-App

Da bi se uslo na aplikaciju potrebno je da se korisnik prvo registruje, a zataim i uloguje preko mail-a i sifre. Nakon toga aplikacija vodi korisnika na Home stranicu
koja je idejno uradjena kao neki blog.
Na Home stranici se nalaze blogovi koje su korisnici postavljali, a klikom na read more na pojedinacnom blogu aplikacija vodi na posebnu stranicu na kojoj se moze
procitati ceo tekst bloga i informacije o korisniku koji ga je postavio.
Klikom na My profile u navigacionom baru aplikacija korisnika vodi na stranicu sopstvenog profila gde su prikazane osnovne informacije o korisniku
i gde se takodje nalazi forma za kreiranje posta, koji ce biti prikazan na Home stranici.
Klikom na Logout u navigaciji, korisnik biva izlogovan iz aplikacije i vracen na stranicu Login.
Aplikacija takodje sprecava dolazak na Home i Profile stranicu preko same URL adrese.
Da bi se korisnik ulogovao potrebno je pravilno da unese mail i sifru (nisam radio posebno validacije, ovaj put sam samo stavio required na inpute), a ukoliko
korisnik unese pogresno mail ili sifru pojavljuje se alert sa odgovarajucom porukom o pogresnom unosu mail-a ili sifre.

U bazu podataka login-register u kolekciju 'users' je rucno unet korisnik admin, a da bi se admin ulogovao na aplikaciju potrebno je da unese svoj mail i sifru koje su:
mail: admin@gmail.com
pass: admin
Logovanje samog admina na aplikaciju mu omogucava jos jednu dodatnu opciju, a to je da se adminu pojavljuje dugme remove na svakom blogu i omogucava mu da obrise sam taj blog
sa stranice i baze.
