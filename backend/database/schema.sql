CREATE DATABASE IF NOT EXISTS registro_horas;
USE registro_horas;

DROP TABLE registros;

CREATE TABLE registros (
  id INT AUTO_INCREMENT PRIMARY KEY,
  cliente VARCHAR(100),
  descricao TEXT,
  inicio DATETIME,
  fim DATETIME,
  horas_totais FLOAT
);

INSERT INTO registros (cliente, descricao, inicio, fim, horas_totais) VALUES
('Cliente A', 'Descrição do trabalho A', '2023-10-01 08:00:00', '2023-10-01 12:00:00', 4.0),
('Cliente B', 'Descrição do trabalho B', '2023-10-02 09:00:00', '2023-10-02 11:30:00', 2.5),
('Cliente C', 'Descrição do trabalho C', '2023-10-03 10:00:00', '2023-10-03 15:00:00', 5.0),
('Cliente D', 'Descrição do trabalho D', '2023-10-04 13:00:00', '2023-10-04 17:00:00', 4.0),
('Cliente E', 'Descrição do trabalho E', '2023-10-05 08:30:00', '2023-10-05 12:30:00', 4.0),
('Cliente F', 'Descrição do trabalho F', '2023-10-06 14:00:00', '2023-10-06 18:00:00', 4.0),
('Cliente G', 'Descrição do trabalho G', '2023-10-07 09:00:00', '2023-10-07 12:00:00', 3.0),
('Cliente H', 'Descrição do trabalho H', '2023-10-08 10:00:00', '2023-10-08 14:00:00', 4.0),
('Cliente I', 'Descrição do trabalho I', '2023-10-09 11:00:00', '2023-10-09 16:00:00', 5.0),
('Cliente J', 'Descrição do trabalho J', '2023-10-10 08:00:00', '2023-10-10 11:00:00', 3.0);