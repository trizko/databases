CREATE DATABASE chat;

USE chat;





-- ---
-- Globals
-- ---

-- SET SQL_MODE="NO_AUTO_VALUE_ON_ZERO";
-- SET FOREIGN_KEY_CHECKS=0;

-- ---
-- Table 'messages'
--
-- ---

DROP TABLE IF EXISTS `messages`;

CREATE TABLE `messages` (
  `pk_messages_id` INTEGER(8) NULL AUTO_INCREMENT DEFAULT NULL,
  `fk_rooms_id` INTEGER(8) NULL DEFAULT NULL,
  `fk_users_id` INTEGER(8) NULL DEFAULT NULL,
  `message` VARCHAR(140) NULL DEFAULT NULL,
  PRIMARY KEY (`pk_messages_id`)
);

-- ---
-- Table 'users'
--
-- ---

DROP TABLE IF EXISTS `users`;

CREATE TABLE `users` (
  `pk_users_id` INTEGER(8) NULL AUTO_INCREMENT DEFAULT NULL,
  `username` VARCHAR(30) NULL DEFAULT NULL,
  PRIMARY KEY (`pk_users_id`)
);

-- ---
-- Table 'rooms'
--
-- ---

DROP TABLE IF EXISTS `rooms`;

CREATE TABLE `rooms` (
  `pk_rooms_id` INTEGER(8) NULL AUTO_INCREMENT DEFAULT NULL,
  `roomname` VARCHAR(30) NULL DEFAULT NULL,
  PRIMARY KEY (`pk_rooms_id`)
);

-- ---
-- Foreign Keys
-- ---

ALTER TABLE `messages` ADD FOREIGN KEY (fk_rooms_id) REFERENCES `rooms` (`pk_rooms_id`);
ALTER TABLE `messages` ADD FOREIGN KEY (fk_users_id) REFERENCES `users` (`pk_users_id`);

-- ---
-- Table Properties
-- ---

-- ALTER TABLE `messages` ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
-- ALTER TABLE `users` ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
-- ALTER TABLE `rooms` ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

-- ---
-- Test Data
-- ---

-- INSERT INTO `messages` (`pk_messages_id`,`fk_rooms_id`,`fk_users_id`,`message`) VALUES
-- ('','','','');
-- INSERT INTO `users` (`pk_users_id`,`username`) VALUES
-- ('','');
-- INSERT INTO `rooms` (`pk_rooms_id`,`roomname`) VALUES
-- ('','');

