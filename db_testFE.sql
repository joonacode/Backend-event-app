-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Waktu pembuatan: 22 Okt 2020 pada 12.15
-- Versi server: 10.4.11-MariaDB
-- Versi PHP: 7.4.5

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `db_testFE`
--

-- --------------------------------------------------------

--
-- Struktur dari tabel `events`
--

CREATE TABLE `events` (
  `id` int(11) NOT NULL,
  `title` varchar(128) NOT NULL,
  `location` varchar(128) NOT NULL,
  `participant` varchar(255) NOT NULL,
  `date` varchar(128) NOT NULL,
  `note` text NOT NULL,
  `picture` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data untuk tabel `events`
--

INSERT INTO `events` (`id`, `title`, `location`, `participant`, `date`, `note`, `picture`) VALUES
(1, 'Meeting', 'Jakarta', 'Cep, Guna, Widodo', '2020-10-22 12:11:56', 'Masalahnya, ketika kita begitu mencintai sebuah dongeng atau cerita, akhir yang membahagiakan saja tak cukup. Ibarat menanti kabar saudara yang tinggal jauh di seberang pulau, kita ingin mendengar cerita terbaru mereka, tokoh-tokoh rekaan yang kita sayang. Tak terkecuali Harry Potter, Hermione, dan Ron rekaan J.K. Rowling.', 'http://localhost:4000/uploads/q39jvq7hre8.png'),
(17, 'Konser Musik', 'Bandung, Indonesia', 'Cep, Mark, Deno, Ridwan', 'Thu Dec 31 2020 17:09:47 GMT+0700 (Western Indonesia Time)', 'Dari pemberitaan media kala itu kita tahu sedikit banyak kisahnya seputar petualangan anak kedua Harry, Albus. Kamu mungkin juga masih ingat pemberitaan kala itu ramai oleh karakter Hermione dewasa yang dimainkan aktris kelahiran Afrika Selatan, Noma Dumezweni.', 'http://localhost:4000/uploads/jpd8c72ijpg.png'),
(18, 'Tes Event', 'Jakarta', 'Tes', 'Sat Oct 24 2020 17:11:58 GMT+0700 (Western Indonesia Time)', 'Dari pemberitaan media kala itu kita tahu sedikit banyak kisahnya seputar petualangan anak kedua Harry, Albus. Kamu mungkin juga masih ingat pemberitaan kala itu ramai oleh karakter Hermione dewasa yang dimainkan aktris kelahiran Afrika Selatan, Noma Dumezweni.', 'http://localhost:4000/uploads/cm9gtniu39.jpg'),
(19, 'Tes Tiga', 'Jakarta', 'Abc', 'Sat Oct 31 2020 17:12:22 GMT+0700 (Western Indonesia Time)', 'Dari pemberitaan media kala itu kita tahu sedikit banyak kisahnya seputar petualangan anak kedua Harry, Albus. Kamu mungkin juga masih ingat pemberitaan kala itu ramai oleh karakte', 'http://localhost:4000/uploads/e23ti5ksb18.jpg'),
(20, 'Mocha', 'Bandung', 'Mouse', 'Wed Oct 28 2020 17:12:54 GMT+0700 (Western Indonesia Time)', 'Dari pemberitaan media kala itu kita tahu sedikit banyak kisahnya seputar petualangan anak kedua Harry,', 'http://localhost:4000/uploads/fr111ltdjc8.jpg'),
(21, 'Web', 'Indonesia', 'Tes', 'Fri Nov 27 2020 17:13:22 GMT+0700 (Western Indonesia Time)', 'Dari pemberitaan media kala itu kita tahu sedikit banyak kisahnya seputar petualangan anak kedua Harry, Albus. Kamu mungkin juga masih ingat pemberitaan kala itu ramai oleh karakter Hermione dewasa yang dimainkan aktris kelahiran Afrika Selatan, Noma Dumezweni.', 'http://localhost:4000/uploads/47e14npjn5.jpg'),
(22, 'Last', 'Jauh', 'last, event', 'Thu Oct 29 2020 17:14:06 GMT+0700 (Western Indonesia Time)', 'Dari pemberitaan media kala itu kita tahu sedikit banyak kisahnya seputar petualangan anak kedua Harry, Albus. Kamu mungkin juga masih ingat pemberitaan kala itu ramai ole', 'http://localhost:4000/uploads/ive7r4c4k4o.jpg');

--
-- Indexes for dumped tables
--

--
-- Indeks untuk tabel `events`
--
ALTER TABLE `events`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT untuk tabel yang dibuang
--

--
-- AUTO_INCREMENT untuk tabel `events`
--
ALTER TABLE `events`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=23;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
