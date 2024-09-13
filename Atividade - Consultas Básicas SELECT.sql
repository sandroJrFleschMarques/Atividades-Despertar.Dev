select * from customer c
inner join customer_address ca on c.id = ca.customer_id 
where ca.state = 'MG'

select * from customer c
inner join customer_address ca on c.id = ca.customer_id 
where ca.city = 'São Paulo' and c.gender = 'male'
-- NÃO EXISTE NENHUM MASCULINO NA CIDADE DE 'São Paulo'

select * from orders o 
where  o.total > 3000.00
order by o.total asc

select * from items i
where i.name like 'Sapatilha em Couro Vazad%' 