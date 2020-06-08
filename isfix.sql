-- phpMyAdmin SQL Dump
-- version 5.0.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jun 08, 2020 at 01:55 AM
-- Server version: 10.4.11-MariaDB
-- PHP Version: 7.4.2

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `isfix`
--

-- --------------------------------------------------------

--
-- Table structure for table `bill_lading`
--

CREATE TABLE `bill_lading` (
  `bill_id` varchar(20) NOT NULL,
  `date` datetime NOT NULL,
  `fix_id` varchar(20) NOT NULL,
  `dep_id` varchar(10) NOT NULL,
  `durable_num` varchar(50) NOT NULL,
  `sp_id` varchar(20) NOT NULL,
  `qty` int(100) NOT NULL,
  `user_id` varchar(20) NOT NULL,
  `status` enum('approved','waitforapprove') NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `budget_year`
--

CREATE TABLE `budget_year` (
  `budget_id` varchar(20) NOT NULL,
  `budgety_code` varchar(100) NOT NULL,
  `budgety_detail` varchar(100) DEFAULT NULL,
  `prom_id` varchar(20) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `budget_year`
--

INSERT INTO `budget_year` (`budget_id`, `budgety_code`, `budgety_detail`, `prom_id`) VALUES
('bgy-5e77a7fea2d8d', 'ก่อนปี 2562', NULL, NULL),
('bgy-5ea463916d2e3', '2562', NULL, NULL);

-- --------------------------------------------------------

--
-- Table structure for table `department`
--

CREATE TABLE `department` (
  `dep_id` varchar(10) NOT NULL,
  `dep_name` varchar(150) NOT NULL,
  `dep_short` varchar(100) NOT NULL,
  `org_id` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `department`
--

INSERT INTO `department` (`dep_id`, `dep_name`, `dep_short`, `org_id`) VALUES
('DEP1', 'แผนกซ่อมระบบคอมพิวเตอร์ กองซ่อมบำรุง สำนักปฏิบัติการ', 'ผ.ซ่อมระบบคอมพิวเตอร์ กซร.สปก.', 'G1'),
('DEP2', 'แผนกซ่อมระบบสื่อสารไร้สาย กองซ่อมบำรุง สำนักปฏิบัติการ', 'ผ.ซ่อมระบบสื่อสารไร้สาย กซร.สปก.', 'G1'),
('DEP3', 'แผนกซ่อมระบบสื่อสารทางสาย กองซ่อมบำรุง สำนักปฏิบัติการ', 'ผ.ซ่อมระบบสื่อสารทางสาย กซร.สปก.', 'G1');

-- --------------------------------------------------------

--
-- Table structure for table `dump`
--

CREATE TABLE `dump` (
  `dump_id` varchar(20) NOT NULL,
  `dump_name` varchar(100) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `dump`
--

INSERT INTO `dump` (`dump_id`, `dump_name`) VALUES
('DU-5edcf14620255', 'กระซับแผนกซ่อมคอมฯ');

-- --------------------------------------------------------

--
-- Table structure for table `fix`
--

CREATE TABLE `fix` (
  `fix_id` varchar(20) NOT NULL,
  `userde_id` varchar(100) NOT NULL,
  `datefixer` datetime NOT NULL,
  `durable_num` varchar(50) NOT NULL,
  `detail` varchar(250) NOT NULL,
  `device` varchar(250) NOT NULL,
  `issue` varchar(250) NOT NULL,
  `dep_id` varchar(10) NOT NULL,
  `status` enum('รับเครื่อง','กำลังดำเนินการ','ดำเนินการเสร็จสิ้น','') NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `organization`
--

CREATE TABLE `organization` (
  `org_id` varchar(20) NOT NULL,
  `org_name` varchar(150) NOT NULL,
  `org_short` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `organization`
--

INSERT INTO `organization` (`org_id`, `org_name`, `org_short`) VALUES
('G1', 'กรมการสื่อสารและเทคโนโลยีสารสนเทศทหารเรือ', 'สสท.ทร.');

-- --------------------------------------------------------

--
-- Table structure for table `position`
--

CREATE TABLE `position` (
  `pos_id` varchar(5) NOT NULL,
  `pos_name` varchar(50) NOT NULL,
  `pos_short` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `position`
--

INSERT INTO `position` (`pos_id`, `pos_name`, `pos_short`) VALUES
('POS1', 'หัวหน้าแผนกซ่อมระบบคอมพิวเตอร์', 'หน.แผนกซ่อมระบบคอมพิวเตอร์'),
('POS2', 'นายช่างแผนกซ่อมระบบคอมพิวเตอร์', 'นายช่าง ผ.ซ่อมระบบคอมพิวเตอร์'),
('POS3', 'ช่างคอมพิวเตอร์', 'ช่างคอมพิวเตอร์');

-- --------------------------------------------------------

--
-- Table structure for table `promise`
--

CREATE TABLE `promise` (
  `prom_id` int(5) NOT NULL,
  `prom_code` varchar(5) NOT NULL,
  `prom_detail` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `rank`
--

CREATE TABLE `rank` (
  `rank_id` varchar(5) NOT NULL,
  `rank_priority` int(11) NOT NULL,
  `rank_name` varchar(20) NOT NULL,
  `shorted_out` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `rank`
--

INSERT INTO `rank` (`rank_id`, `rank_priority`, `rank_name`, `shorted_out`) VALUES
('R1', 1, 'พลเรือเอก', 'พล.ร.อ.'),
('R10', 10, 'นาวาโทหญิง', 'น.ท.หญิง'),
('R11', 11, 'นาวาตรี', 'น.ต.'),
('R12', 12, 'นาวาตรีหญิง', 'น.ต.หญิง'),
('R13', 13, 'เรือเอก', 'ร.อ.'),
('R14', 14, 'เรือเอกหญิง', 'ร.อ.หญิง'),
('R15', 15, 'เรือโท', 'ร.ท.'),
('R16', 16, 'เรือโทหญิง', 'ร.ท.หญิง'),
('R17', 17, 'เรือตรี', 'ร.ต.'),
('R18', 18, 'เรือตรีหญิง', 'ร.ต.หญิง'),
('R19', 19, 'พันจ่าเอก', 'พ.จ.อ.'),
('R2', 2, 'พลเรือเอกหญิง', 'พล.ร.อ.หญิง'),
('R20', 20, 'พันจ่าเอกหญิง', 'พ.จ.อ.หญิง'),
('R21', 21, 'พันจ่าโท', 'พ.จ.ท.'),
('R22', 22, 'พันจ่าโทหญิง', 'พ.จ.ท.หญิง'),
('R23', 23, 'พันจ่าตรี', 'พ.จ.ต.'),
('R24', 24, 'พันจ่าตรีหญิง', 'พ.จ.ต.หญิง'),
('R25', 25, 'จ่าเอก', 'จ.อ.'),
('R26', 26, 'จ่าเอกหญิง', 'จ.อ.หญิง'),
('R27', 27, 'จ่าโท', 'จ.ท.'),
('R28', 28, 'จ่าโทหญิง', 'จ.ท.หญิง'),
('R29', 29, 'จ่าตรี', 'จ.ต.'),
('R3', 3, 'พลเรือโท', 'พล.ร.ท.'),
('R30', 30, 'จ่าตรีหญิง', 'จ.ต.หญิง'),
('R4', 4, 'พลเรือโทหญิง', 'พล.ร.ท.หญิง'),
('R5', 5, 'พลเรือตรี', 'พล.ร.ต.'),
('R6', 6, 'พลเรือตรีหญิง', 'พล.ร.ต.หญิง'),
('R7', 7, 'นาวาเอก', 'น.อ.'),
('R8', 8, 'นาวาเอกหญิง', 'น.อ.หญิง'),
('R9', 9, 'นาวาโท', 'น.ท.');

-- --------------------------------------------------------

--
-- Table structure for table `spare_category`
--

CREATE TABLE `spare_category` (
  `spcategory_id` varchar(20) NOT NULL,
  `spcategory_name` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `spare_category`
--

INSERT INTO `spare_category` (`spcategory_id`, `spcategory_name`) VALUES
('spc-5ea469210eb96', 'อะไหล่คอมพิวเตอร์'),
('spc-5ea46932f0ad8', 'เครื่องมือ'),
('spc-5edd7d54b2f83', 'แม่เหล็ก');

-- --------------------------------------------------------

--
-- Table structure for table `spare_name`
--

CREATE TABLE `spare_name` (
  `spname_id` varchar(20) NOT NULL,
  `spname_name` varchar(200) NOT NULL,
  `spn_partnumber` varchar(100) NOT NULL,
  `spcategory_id` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `spare_name`
--

INSERT INTO `spare_name` (`spname_id`, `spname_name`, `spn_partnumber`, `spcategory_id`) VALUES
('SPN-5e779ca317bd1', 'Mainboard', '001', 'spc-5ea469210eb96'),
('SPN-5e779cc7b018a', 'CPU', '002', 'spc-5ea469210eb96'),
('SPN-5e779eabc740a', 'Ram', '003', 'spc-5ea469210eb96'),
('SPN-5e779eb8a7eca', 'Power Supply', '004', 'spc-5ea469210eb96'),
('SPN-5e779ec91825b', 'Hard Disk', '005', 'spc-5ea469210eb96'),
('SPN-5e779ee8290ce', 'Graphic Card', '006', 'spc-5ea469210eb96'),
('SPN-5e779f03d20d3', 'Mouse', '007', 'spc-5ea469210eb96'),
('SPN-5e779f3b459aa', 'Wireless Keyboard', '008', 'spc-5ea469210eb96'),
('SPN-5e779f5198eeb', 'Wireless Mouse', '009', 'spc-5ea469210eb96'),
('SPN-5e779f6c876f0', 'ตลับหมึก', '010', 'spc-5ea469210eb96'),
('SPN-5e779f900dff9', 'Tonner', '011', 'spc-5ea469210eb96'),
('SPN-5e779fcc993cc', 'Drum', '012', 'spc-5ea469210eb96'),
('SPN-5e779fe3e8ddd', 'Print Head Unit', '013', 'spc-5ea469210eb96'),
('SPN-5e779ff5e16db', 'Original Print Head Unit', '014', 'spc-5ea469210eb96'),
('SPN-5e77a00f5140c', 'Original Tray Porous Pad Assembly', '015', 'spc-5ea469210eb96'),
('SPN-5e77a02ba7755', 'หมึก', '016', 'spc-5ea469210eb96'),
('SPN-5e77a048e5c57', 'Mainboard', '017', 'spc-5ea469210eb96'),
('SPN-5e77a05cca5ff', 'Battery', '018', 'spc-5ea469210eb96'),
('SPN-5e77a06d92d87', 'ถ่าน Alkaline', '019', 'spc-5ea469210eb96'),
('spn-5ea57eef72ccc', 'อื่นๆ', '020', 'spc-5ea46932f0ad8');

-- --------------------------------------------------------

--
-- Table structure for table `spare_part`
--

CREATE TABLE `spare_part` (
  `sp_id` varchar(20) NOT NULL,
  `sptype_id` varchar(20) NOT NULL,
  `spp_partnumber` varchar(100) NOT NULL,
  `part_detail` varchar(200) NOT NULL,
  `serial_number` varchar(50) NOT NULL,
  `budget_id` varchar(20) NOT NULL,
  `purchasing_amount` int(11) NOT NULL,
  `dump_id` varchar(20) DEFAULT NULL,
  `take_out` int(11) NOT NULL,
  `part_qty` int(11) NOT NULL,
  `status` enum('have','outofstock') NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `spare_part`
--

INSERT INTO `spare_part` (`sp_id`, `sptype_id`, `spp_partnumber`, `part_detail`, `serial_number`, `budget_id`, `purchasing_amount`, `dump_id`, `take_out`, `part_qty`, `status`) VALUES
('spp-5ea536c3be3ae', 'spt-5ea53575d9662', '0001', 'INTEL', '', 'bgy-5ea463916d2e3', 20, 'DU-5edcf14620255', 0, 20, 'have'),
('spp-5ea581181f4c8', 'spt-5ea580459158d', '0001', '4 port USB 3.0 HUB', '', 'bgy-5ea463916d2e3', 5, 'DU-5edcf14620255', 0, 5, 'have'),
('spp-5ea5ca6015905', 'spt-5ea53575d9662', '0002', 'INTEL GEN5', '', 'bgy-5ea463916d2e3', 20, 'DU-5edcf14620255', 0, 20, 'have'),
('spp-5ea5cb2d517c3', 'spt-5ea53575d9662', '0002', 'INTEL GEN5', '', 'bgy-5ea463916d2e3', 20, 'DU-5edcf14620255', 0, 20, 'have'),
('spp-5ea5cc4259c0e', 'spt-5ea53575d9662', '0003', 'INTEL GEN7', '', 'bgy-5ea463916d2e3', 20, 'DU-5edcf14620255', 0, 20, 'have'),
('spp-5ea5cd1301b7a', 'spt-5ea53575d9662', '0003', 'INTEL GEN7', '', 'bgy-5ea463916d2e3', 20, 'DU-5edcf14620255', 0, 20, 'have'),
('spp-5ea5d13101db2', 'spt-5ea53575d9662', '0002', '0000000', '', 'bgy-5ea463916d2e3', 20, 'DU-5edcf14620255', 0, 20, 'have'),
('spp-5ea826d06011c', 'spt-5ea53575d9662', '0002', 'gggg', '', 'bgy-5ea463916d2e3', 6, 'DU-5edcf14620255', 0, 6, 'have'),
('spp-5ea826d0611d6', 'spt-5ea53575d9662', '0002', 'gggg', '', 'bgy-5ea463916d2e3', 6, 'DU-5edcf14620255', 0, 6, 'have'),
('spp-5ea826ef70a08', 'spt-5ea53575d9662', '0002', 'g', '', 'bgy-5ea463916d2e3', 5, 'DU-5edcf14620255', 0, 5, 'have'),
('spp-5ea827131a193', 'spt-5ea53575d9662', '0002', 'f', '', 'bgy-5ea463916d2e3', 5, 'DU-5edcf14620255', 0, 5, 'have'),
('spp-5ea82734a971b', 'spt-5ea53575d9662', '0002', 'qqq', '', 'bgy-5ea463916d2e3', 4, 'DU-5edcf14620255', 0, 4, 'have'),
('spp-5ea82734ad796', 'spt-5ea53575d9662', '0002', 'qqq', '', 'bgy-5ea463916d2e3', 4, 'DU-5edcf14620255', 0, 4, 'outofstock'),
('spp-5ea82734aedf9', 'spt-5ea53575d9662', '0002', 'qqq', '', 'bgy-5ea463916d2e3', 4, 'DU-5edcf14620255', 0, 4, 'have'),
('spp-5ea82cfee6c39', 'spt-5ea580459158d', '0002', '000000', '', 'bgy-5ea463916d2e3', 6, 'DU-5edcf14620255', 0, 6, 'have'),
('spp-5ea82cfee7e46', 'spt-5ea580459158d', '0002', '000000', '', 'bgy-5ea463916d2e3', 6, 'DU-5edcf14620255', 0, 6, 'have'),
('spp-5ea82ff0dc6ab', 'spt-5ea53575d9662', '0002', 'eeeee', '', 'bgy-5ea463916d2e3', 5, 'DU-5edcf14620255', 0, 5, 'have'),
('spp-5ea8301561ac2', 'spt-5ea53575d9662', '0002', 'ewewew', '', 'bgy-5ea463916d2e3', 4, 'DU-5edcf14620255', 0, 4, 'have'),
('spp-5ea8301565ba3', 'spt-5ea53575d9662', '0002', 'ewewew', '', 'bgy-5ea463916d2e3', 4, 'DU-5edcf14620255', 0, 4, 'have'),
('spp-5ea8301567b24', 'spt-5ea53575d9662', '0002', 'ewewew', '', 'bgy-5ea463916d2e3', 4, 'DU-5edcf14620255', 0, 4, 'have'),
('spp-5edd5715aa56c', 'spt-5ea535eb5c3a0', '0002', 'wwwww', '', 'bgy-5ea463916d2e3', 6, '34', 0, 6, 'have'),
('spp-5edd64d3d459f', 'spt-5ea535eb5c3a0', '0002', 'GEN10', '', 'bgy-5ea463916d2e3', 20, 'DU-5edcf14620255', 0, 20, 'outofstock'),
('spp-5edd64d3d5c11', 'spt-5ea535eb5c3a0', '0002', 'GEN10', '', 'bgy-5ea463916d2e3', 20, 'DU-5edcf14620255', 0, 20, 'have');

-- --------------------------------------------------------

--
-- Table structure for table `spare_type`
--

CREATE TABLE `spare_type` (
  `sptype_id` varchar(20) NOT NULL,
  `sptype_name` varchar(50) NOT NULL,
  `spt_partnumber` varchar(100) NOT NULL,
  `spname_id` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `spare_type`
--

INSERT INTO `spare_type` (`sptype_id`, `sptype_name`, `spt_partnumber`, `spname_id`) VALUES
('spt-5ea53575d9662', 'Core i5', '001', 'SPN-5e779cc7b018a'),
('spt-5ea535eb5c3a0', 'Core i7', '002', 'SPN-5e779cc7b018a'),
('spt-5ea580459158d', 'อื่นๆ', '020', 'spn-5ea57eef72ccc');

-- --------------------------------------------------------

--
-- Table structure for table `user`
--

CREATE TABLE `user` (
  `user_id` varchar(20) NOT NULL,
  `username` varchar(50) NOT NULL,
  `password` varchar(200) NOT NULL,
  `userde_id` varchar(20) NOT NULL,
  `level` enum('ADMIN','OFFICER','SysADMIN') NOT NULL,
  `status` enum('active','not_active','pending') NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `user`
--

INSERT INTO `user` (`user_id`, `username`, `password`, `userde_id`, `level`, `status`) VALUES
('US-5e746c624bdea', 'songkiat.t', '*56C1607598715992428AF396B1B56E6A8DA8EAC3', 'UD-5e746a20b735b', 'ADMIN', 'active'),
('US-5e746d255235d', 'teerayut.n', '*600FE53B55C3FAE8A9FCAB8060125364879C08E3', 'UD-5e746a91b1538', 'ADMIN', 'active'),
('US-5e746d5fb7577', 'aumnuay.n', '*4CB947971FACB7AB4E93FAF2078DD186A4C91A46', 'UD-5e746b608c3ec', 'OFFICER', 'active'),
('us-5edd6f1fe1a20', 'ssss', '*5CA21153986A27343DDF7E88ABB3C8454F2E6008', 'ud-5edd6f1fe1a1d', 'OFFICER', 'pending'),
('US-root', 'root', '*F90B6576111DD063A65BC2CA6BADED74C2E4FAEE', 'UD-root', 'SysADMIN', 'active');

-- --------------------------------------------------------

--
-- Table structure for table `userdetail`
--

CREATE TABLE `userdetail` (
  `userde_id` varchar(20) NOT NULL,
  `rank_id` varchar(20) DEFAULT NULL,
  `firstname` varchar(100) NOT NULL,
  `lastname` varchar(100) NOT NULL,
  `pos_id` varchar(5) DEFAULT NULL,
  `tel` varchar(15) NOT NULL,
  `image` varchar(200) NOT NULL,
  `dep_id` varchar(10) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `userdetail`
--

INSERT INTO `userdetail` (`userde_id`, `rank_id`, `firstname`, `lastname`, `pos_id`, `tel`, `image`, `dep_id`) VALUES
('UD-5e746a20b735b', 'R9', 'ทรงเกียรติ', 'ทับสูงเนิน', 'POS1', '0000000000', 'No', 'DEP1'),
('UD-5e746a91b1538', 'R15', 'ธีระยุทธ', 'น่วมภักดี', 'POS2', '0000000000', 'No', 'DEP1'),
('UD-5e746b608c3ec', 'R19', 'อำนวย', 'เนตรน้อย', 'POS3', '0000000000', 'No', 'DEP1'),
('ud-5edd6f1fe1a1d', 'R25', 'ssssss', 'ssssss', 'POS2', '0000000000', '', 'DEP1'),
('UD-root', NULL, 'root', '', NULL, '0000000000', '', NULL);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `bill_lading`
--
ALTER TABLE `bill_lading`
  ADD PRIMARY KEY (`bill_id`),
  ADD KEY `fix_id` (`fix_id`,`dep_id`,`sp_id`,`user_id`),
  ADD KEY `user_id` (`user_id`),
  ADD KEY `dep_id` (`dep_id`),
  ADD KEY `part_id` (`sp_id`);

--
-- Indexes for table `budget_year`
--
ALTER TABLE `budget_year`
  ADD PRIMARY KEY (`budget_id`),
  ADD KEY `prom_id` (`prom_id`);

--
-- Indexes for table `department`
--
ALTER TABLE `department`
  ADD PRIMARY KEY (`dep_id`),
  ADD KEY `org_id` (`org_id`);

--
-- Indexes for table `dump`
--
ALTER TABLE `dump`
  ADD PRIMARY KEY (`dump_id`);

--
-- Indexes for table `fix`
--
ALTER TABLE `fix`
  ADD PRIMARY KEY (`fix_id`),
  ADD KEY `userde_id` (`userde_id`,`dep_id`),
  ADD KEY `fix_ibfk_1` (`dep_id`);

--
-- Indexes for table `organization`
--
ALTER TABLE `organization`
  ADD PRIMARY KEY (`org_id`);

--
-- Indexes for table `position`
--
ALTER TABLE `position`
  ADD PRIMARY KEY (`pos_id`);

--
-- Indexes for table `promise`
--
ALTER TABLE `promise`
  ADD PRIMARY KEY (`prom_id`);

--
-- Indexes for table `rank`
--
ALTER TABLE `rank`
  ADD PRIMARY KEY (`rank_id`);

--
-- Indexes for table `spare_category`
--
ALTER TABLE `spare_category`
  ADD PRIMARY KEY (`spcategory_id`);

--
-- Indexes for table `spare_name`
--
ALTER TABLE `spare_name`
  ADD PRIMARY KEY (`spname_id`),
  ADD KEY `spcategory_id` (`spcategory_id`);

--
-- Indexes for table `spare_part`
--
ALTER TABLE `spare_part`
  ADD PRIMARY KEY (`sp_id`),
  ADD KEY `budget_id` (`budget_id`),
  ADD KEY `sptype_id` (`sptype_id`) USING BTREE;

--
-- Indexes for table `spare_type`
--
ALTER TABLE `spare_type`
  ADD PRIMARY KEY (`sptype_id`),
  ADD KEY `spname_id` (`spname_id`);

--
-- Indexes for table `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`user_id`),
  ADD KEY `userde_id` (`userde_id`);

--
-- Indexes for table `userdetail`
--
ALTER TABLE `userdetail`
  ADD PRIMARY KEY (`userde_id`),
  ADD KEY `dep_id` (`dep_id`),
  ADD KEY `rank_id` (`rank_id`),
  ADD KEY `pos_id` (`pos_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `promise`
--
ALTER TABLE `promise`
  MODIFY `prom_id` int(5) NOT NULL AUTO_INCREMENT;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `department`
--
ALTER TABLE `department`
  ADD CONSTRAINT `department_ibfk_1` FOREIGN KEY (`org_id`) REFERENCES `organization` (`org_id`) ON DELETE CASCADE;

--
-- Constraints for table `spare_name`
--
ALTER TABLE `spare_name`
  ADD CONSTRAINT `spare_name_ibfk_1` FOREIGN KEY (`spcategory_id`) REFERENCES `spare_category` (`spcategory_id`);

--
-- Constraints for table `spare_part`
--
ALTER TABLE `spare_part`
  ADD CONSTRAINT `spare_part_ibfk_3` FOREIGN KEY (`budget_id`) REFERENCES `budget_year` (`budget_id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `spare_part_ibfk_4` FOREIGN KEY (`sptype_id`) REFERENCES `spare_type` (`sptype_id`),
  ADD CONSTRAINT `spare_part_ibfk_6` FOREIGN KEY (`sptype_id`) REFERENCES `spare_type` (`sptype_id`);

--
-- Constraints for table `spare_type`
--
ALTER TABLE `spare_type`
  ADD CONSTRAINT `spare_type_ibfk_1` FOREIGN KEY (`spname_id`) REFERENCES `spare_name` (`spname_id`);

--
-- Constraints for table `user`
--
ALTER TABLE `user`
  ADD CONSTRAINT `user_ibfk_3` FOREIGN KEY (`userde_id`) REFERENCES `userdetail` (`userde_id`) ON DELETE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
