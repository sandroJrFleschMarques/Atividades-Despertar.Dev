select * from customer c
inner join customer_address ca on c.id = ca.customer_id
inner join orders o on c.id = o.customer_id  
inner join items i on o.id = i.id
where ca.state = 'MG' and i.name like 'Sapatilha em Couro Vazad%'

select o.total, c.name, c.phone from customer c
inner join customer_address ca on c.id = ca.customer_id
inner join orders o on c.id = o.customer_id  
where ca.state = 'SP' and o.total > 8000 order by total asc 

select c.name, o.discount from customer c
inner join orders o on c.id = o.customer_id order by o.discount desc
limit 1;

-- SELECT c.name, MAX(o.discount)
-- FROM customer c
-- INNER JOIN orders o ON c.id = o.customer_id
-- GROUP BY c.name
-- ORDER BY o.discount desc
-- limit 1;

