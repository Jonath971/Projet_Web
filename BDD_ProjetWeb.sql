-- phpMyAdmin SQL Dump
-- version 4.7.0
-- https://www.phpmyadmin.net/
--
-- Hôte : 127.0.0.1
-- Généré le :  mer. 05 déc. 2018 à 16:23
-- Version du serveur :  5.7.17
-- Version de PHP :  5.6.30

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données :  `projetweb`
--

-- --------------------------------------------------------

--
-- Structure de la table `joueur`
--

CREATE TABLE `joueur` (
  `id_joueur` bigint(20) UNSIGNED NOT NULL,
  `pseudo` char(100) NOT NULL,
  `score` double NOT NULL DEFAULT '0'
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Déchargement des données de la table `joueur`
--

INSERT INTO `joueur` (`id_joueur`, `pseudo`, `score`) VALUES
(1, 'Jonathan', 90.2165),
(2, 'Mateo', 103.54),
(3, 'Programmeur', 42.016),
(4, 'dfdf', 144.231),
(5, ',jjh,', 56.425000000000004),
(6, 'fjfu', 65.31400000000001),
(7, 'ferfr', 51.962),
(8, 'vzt', 94.654);

-- --------------------------------------------------------

--
-- Structure de la table `objets`
--

CREATE TABLE `objets` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `nom` varchar(100) NOT NULL,
  `bordure_1_lat` double NOT NULL,
  `bordure_1_lon` double NOT NULL,
  `bordure_2_lat` double NOT NULL,
  `bordure_2_lon` double NOT NULL,
  `url` varchar(200) NOT NULL,
  `bloque_id` int(100) DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Déchargement des données de la table `objets`
--

INSERT INTO `objets` (`id`, `nom`, `bordure_1_lat`, `bordure_1_lon`, `bordure_2_lat`, `bordure_2_lon`, `url`, `bloque_id`) VALUES
(1, 'trace_de_pas_1', 48.84, 2.58, 48.85, 2.59, 'sticker-traces-de-pas.jpg', NULL),
(2, 'trace_de_pas_2', 48.85, 2.58, 48.86, 2.59, 'sticker-traces-de-pas.jpg', 1),
(3, 'trace_de_pas_3', 48.86, 2.58, 48.87, 2.59, 'sticker-traces-de-pas.jpg', 2),
(4, 'trace_de_pas_4', 48.87, 2.58, 48.88, 2.59, 'sticker-traces-de-pas.jpg', 3),
(5, 'trace_de_pas_5', 48.885, 2.58, 48.88, 2.59, 'Maison.jpg', 4),
(6, 'hotel', 4.68, -74.14, 4.67, -74.15, 'hotel.jpg', 5),
(7, 'pizza', 4.68, -74.12, 4.67, -74.13, 'pizzeria.jpg', 6),
(8, 'bijouterie', 4.73, -73.972, 4.725, -73.967, 'bijouterie.jpg', 11),
(9, 'ordinateurs', 4.808, -74.105, 4.813, -74.11, 'ordinateurs.jpg', 8),
(10, 'mcdonald', 4.918, -74.102, 4.923, -74.107, 'mcdonald.jpg', 9),
(11, 'serrure', 4.67, -74.135, 4.675, -74.14, 'serrure.jpg', 7);

--
-- Index pour les tables déchargées
--

--
-- Index pour la table `joueur`
--
ALTER TABLE `joueur`
  ADD PRIMARY KEY (`id_joueur`);

--
-- Index pour la table `objets`
--
ALTER TABLE `objets`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT pour les tables déchargées
--

--
-- AUTO_INCREMENT pour la table `joueur`
--
ALTER TABLE `joueur`
  MODIFY `id_joueur` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;
--
-- AUTO_INCREMENT pour la table `objets`
--
ALTER TABLE `objets`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
