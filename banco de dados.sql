CREATE TABLE cortes (
    id SERIAL PRIMARY KEY,            
    modelo VARCHAR(50) NOT NULL,
    valor NUMERIC(10, 2) NOT NULL,
    descricao TEXT,
    imagem TEXT                       
);

select * from cortes

INSERT INTO cortes (modelo, valor, descricao, imagem)
VALUES 
('Social', 20.00, 'O corte de cabelo social masculino é um estilo clássico e atemporal.', 'https://i.pinimg.com/control1/736x/48/85/fe/4885fee3268b4b3450bc2d842cbf99fe.jpg'),
('Degradê', 35.00, 'O corte de cabelo degradê clássico é caracterizado por uma transição suave e gradual entre diferentes comprimentos, onde os fios começam bem curtos na nuca e nas laterais e aumentam progressivamente em direção ao topo da cabeça.', 'https://inspiracabelo.com.br/wp-content/uploads/2024/03/corte-de-cabelo-em-degrade-22.jpg'),
('Americano', 35.00, 'O corte americano é um estilo masculino versátil caracterizado por laterais e nuca curtas (raspadas ou em degradê/fade) que se fundem gradualmente à pele, contrastando com o topo mais longo e volumoso.', 'https://i.pinimg.com/736x/61/80/78/6180789af4f5b1c81cc36b458dcb0cf6.jpg')
('moicano', 35.00, 'O moicano moderno é uma evolução do corte clássico, caracterizada por uma faixa central mais larga e texturizada (5-12 cm) combinada com laterais em degradê (fade).', 'https://i.pinimg.com/control1/1200x/f7/c2/ce/f7c2cef4b3ff10419350d532b446beb3.jpg'),
('buzzcutt', 35.00, 'Buzz cut é um corte de cabelo masculino (e feminino) caracterizado por ser raspado e uniforme, utilizando máquina elétrica para deixar os fios com comprimento curto, geralmente entre 0 e 12 mm, rente ao couro cabeludo.', 'https://fatosmilitares.com/wp-content/uploads/2022/06/corte-militar-brasileiro.jpg'),
('jit fade', 35.00, 'O corte Jit Fade é um estilo masculino moderno caracterizado por um degradê sutil e limpo, com foco principal nas costeletas e na parte inferior da nuca, mantendo volume e comprimento no topo.', 'https://i.pinimg.com/736x/9b/1c/dc/9b1cdce6dea0fc4510b0f2a8ab92d52d.jpg'),